import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { MessageSquare, Calendar } from "lucide-react";
import { toast } from "sonner";
import { API_URL } from "../../config/api";

export function FarmerConsult() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      toast.error("Please login first!");
    } else {
      console.log("Fetching consultations for userId:", userId);
      fetchConsultations();
    }
  }, [userId]);

  const fetchConsultations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/consultations/${userId}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Consultations fetched successfully:", data);
        setConsultations(data);
      } else {
        console.error("Failed to fetch consultations:", response.status);
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
      toast.error("Backend connection error!");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      toast.error("User session missing. Please login again.");
      return;
    }

    console.log("Submitting consultation with body-linked userId:", { topic, question, farmerId: userId });
    try {
      const response = await fetch(`${API_URL}/api/consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          topic, 
          question,
          farmerId: userId 
        }),
      });
      if (response.ok) {
        toast.success("Question submitted to expert!");
        setTopic("");
        setQuestion("");
        fetchConsultations();
      } else {
        const err = await response.text();
        console.error("Submit consultation failed:", err);
        toast.error("Submission failed: " + err);
      }
    } catch (error) {
      console.error("Submit consultation network error:", error);
      toast.error("Network error! Is the backend server running?");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ask an Expert</h1>
        <p className="text-gray-600">Get professional advice for your farming concerns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>New Consultation</CardTitle>
          <CardDescription>Describe your problem in detail</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                placeholder="e.g., Pest Control, Soil Nutrition"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="question">Your Question</Label>
              <Textarea
                id="question"
                placeholder="Explain your situation..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Submit Question</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Previous Consultations</h2>
        {consultations.length === 0 ? (
          <p className="text-gray-500">No previous consultations found.</p>
        ) : (
          consultations.map((consultation, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{consultation.topic}</h4>
                    <p className="text-sm text-gray-600 line-clamp-1">{consultation.question}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {new Date(consultation.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge>{consultation.status}</Badge>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
