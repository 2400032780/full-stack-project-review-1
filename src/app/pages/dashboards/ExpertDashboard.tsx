import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Textarea } from "../../components/ui/textarea";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FileText,
  MessageSquare,
  Users,
  TrendingUp,
  Eye,
  ThumbsUp,
  HelpCircle,
  CheckCircle,
  Clock,
  PlusCircle,
} from "lucide-react";
import { toast } from "sonner";
import { API_URL } from "../../config/api";

export function ExpertDashboard() {
  const [queries, setQueries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuery, setSelectedQuery] = useState<any>(null);
  const [answer, setAnswer] = useState("");
  const expertId = localStorage.getItem("userId");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/consultations`);
      if (response.ok) {
        const data = await response.json();
        setQueries(data);
      }
    } catch (error) {
      console.error("Error fetching expert data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = async () => {
    if (!answer.trim()) return;
    try {
      const response = await fetch(`${API_URL}/api/consultations/${selectedQuery.id}/answer`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer, expertId }),
      });
      if (response.ok) {
        toast.success("Answered successfully!");
        setSelectedQuery(null);
        setAnswer("");
        fetchData();
      }
    } catch (error) {
      toast.error("Failed to submit answer");
    }
  };

  const stats = [
    {
      icon: FileText,
      title: "Total Questions",
      value: queries.length.toString(),
      change: "Across all farmers",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: CheckCircle,
      title: "Solved Issues",
      value: queries.filter(q => q.status === "ANSWERED").length.toString(),
      change: "+2 today",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: "Pending Queries",
      value: queries.filter(q => q.status === "PENDING").length.toString(),
      change: "Need attention",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Users,
      title: "Active Experts",
      value: "12",
      change: "Online now",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "ANSWERED":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Expert Control Center
        </h1>
        <p className="text-gray-600">
          Welcome back, {localStorage.getItem("userName") || "Expert"}! Help farmers with your insights.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Management */}
      <Tabs defaultValue="queries" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="queries">Farmer Queries</TabsTrigger>
          <TabsTrigger value="articles">My Articles</TabsTrigger>
        </TabsList>

        {/* Farmer Queries */}
        <TabsContent value="queries">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Farmer Queries</CardTitle>
              <CardDescription>
                Provide professional advice for the latest farming challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {queries.length === 0 ? (
                  <p className="text-center py-8 text-gray-500">No queries found.</p>
                ) : (
                  queries.map((query, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          query.status === "PENDING"
                            ? "bg-amber-100"
                            : "bg-green-100"
                        }`}>
                          {query.status === "PENDING" ? (
                            <HelpCircle className="h-6 w-6 text-amber-600" />
                          ) : (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">
                              {query.farmerName || "Farmer #" + query.farmerId.slice(-4)}
                            </h4>
                            <Badge className="bg-blue-100 text-blue-800">
                              {query.topic}
                            </Badge>
                            <Badge className={getStatusBadgeColor(query.status)}>
                              {query.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{query.question}</p>
                          {query.answer && (
                            <div className="mt-3 p-3 bg-gray-100 rounded border-l-4 border-primary italic">
                              <strong>Your Answer:</strong> {query.answer}
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                            <Clock className="h-4 w-4" />
                            {new Date(query.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      {query.status === "PENDING" && (
                        <Button size="sm" onClick={() => setSelectedQuery(query)}>
                          Answer
                        </Button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Articles (Placeholder for now) */}
        <TabsContent value="articles">
          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>My Articles</CardTitle>
                  <CardDescription>Manage your published content</CardDescription>
                </div>
                <Button disabled>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                Article management for experts is coming in the next update.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Answer Dialog */}
      <Dialog open={!!selectedQuery} onOpenChange={() => setSelectedQuery(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Provide Expert Answer</DialogTitle>
            <DialogDescription>
              Farmer is asking about: <strong>{selectedQuery?.topic}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm font-medium mb-2 text-gray-700">Question:</p>
            <p className="text-gray-600 italic bg-gray-50 p-3 rounded border mb-4">
              "{selectedQuery?.question}"
            </p>
            <p className="text-sm font-medium mb-2">Your Answer:</p>
            <Textarea 
              placeholder="Provide a detailed, helpful solution..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="min-h-[150px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedQuery(null)}>Cancel</Button>
            <Button onClick={handleAnswer}>Submit Answer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
