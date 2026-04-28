import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Label } from "../../components/ui/label.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Wheat,
  TrendingUp,
  Cloud,
  DollarSign,
  FileText,
  MessageSquare,
  Calendar,
  Award,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import { API_URL } from "../../config/api.js";

export function FarmerDashboard() {
  const [crops, setCrops] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  const [newCrop, setNewCrop] = useState({
    name: "",
    area: "",
    expectedYield: "",
  });

  useEffect(() => {
    if (!userId) {
      toast.error("User not logged in. Redirecting...");
    } else {
      fetchData();
    }
  }, [userId]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [cropsRes, consultRes] = await Promise.all([
        fetch(`${API_URL}/api/crops/${userId}`),
        fetch(`${API_URL}/api/consultations/${userId}`),
      ]);
      if (cropsRes.ok) setCrops(await cropsRes.json());
      if (consultRes.ok) setConsultations(await consultRes.json());
    } catch (error) {
      toast.error("Connection lost. Check if backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCrop = async () => {
    if (!newCrop.name || !newCrop.area || !newCrop.expectedYield) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/crops`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newCrop, farmerId: userId }),
      });

      if (response.ok) {
        toast.success("Crop added successfully");
        setNewCrop({ name: "", area: "", expectedYield: "" });
        fetchData();
      } else {
        const err = await response.text();
        toast.error("Error: " + err);
      }
    } catch (error) {
      toast.error("Network error. Is the backend running?");
    }
  };

  const stats = [
    {
      icon: Wheat,
      title: "Active Crops",
      value: crops.length.toString(),
      change: "Current season",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: TrendingUp,
      title: "Total Expected Yield",
      value: crops.length > 0
        ? crops.reduce((acc, c) => acc + (parseFloat(c.expectedYield) || 0), 0).toFixed(1) + " Tons"
        : "0 Tons",
      change: crops.length > 0
        ? `Avg: ${(crops.reduce((acc, c) => acc + (parseFloat(c.expectedYield) || 0), 0) / crops.length).toFixed(1)}T per crop`
        : "No estimates yet",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MessageSquare,
      title: "Consultations",
      value: consultations.length.toString(),
      change: "Pending replies",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Cloud,
      title: "Live Temperature",
      value: "31.5°C",
      change: "Ideal for Rice & Wheat",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const priceData = [
    { month: "Jan", price: 2200 },
    { month: "Feb", price: 2350 },
    { month: "Mar", price: 2450 },
    { month: "Apr", price: 2400 },
    { month: "May", price: 2500 },
    { month: "Jun", price: 2450 },
  ];

  const schemes = [
    {
      title: "PM-KISAN Scheme",
      description: "Direct income support of ₹6000 per year",
      status: "Active",
    },
    {
      title: "Crop Insurance",
      description: "Protection against crop loss due to natural calamities",
      status: "Enrolled",
    },
  ];

  const recentArticles = [
    { title: "Water Conservation Techniques", date: "2 days ago" },
    { title: "Organic Pest Control Methods", date: "5 days ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {localStorage.getItem("userName") || "Farmer"}
          </h1>
          <p className="text-gray-600">Here's what's happening with your farm today</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Crop
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Crop</DialogTitle>
              <DialogDescription>
                Enter the details of your new crop to track its yield.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Crop Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Wheat, Rice"
                  value={newCrop.name}
                  onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="area">Area (Acres)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="10"
                  value={newCrop.area}
                  onChange={(e) => setNewCrop({ ...newCrop, area: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="yield">Expected Yield (Tons)</Label>
                <Input
                  id="yield"
                  type="number"
                  placeholder="4.5"
                  value={newCrop.expectedYield}
                  onChange={(e) => setNewCrop({ ...newCrop, expectedYield: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddCrop}>Save Crop</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Crop Overview</CardTitle>
            <CardDescription>Area and yield by crop type</CardDescription>
          </CardHeader>
          <CardContent>
            {crops.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={crops}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="area" fill="#2E7D32" name="Area (acres)" />
                  <Bar dataKey="expectedYield" fill="#A5D6A7" name="Yield (tons)" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                No crops added yet.
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Market Price Trend</CardTitle>
            <CardDescription>Price per quintal over 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#2E7D32" strokeWidth={2} name="Price (₹)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Government Schemes & Articles */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="rounded-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Government Schemes</CardTitle>
                <CardDescription>Available benefits for you</CardDescription>
              </div>
              <Award className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schemes.map((scheme, index) => (
                <div key={index} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{scheme.title}</h4>
                    <p className="text-sm text-gray-600">{scheme.description}</p>
                  </div>
                  <Badge
                    className={
                      scheme.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }
                  >
                    {scheme.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Articles</CardTitle>
                <CardDescription>Latest farming insights</CardDescription>
              </div>
              <FileText className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{article.title}</h4>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Articles
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
