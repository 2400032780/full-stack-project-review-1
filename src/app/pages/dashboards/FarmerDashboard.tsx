import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
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
} from "lucide-react";

export function FarmerDashboard() {
  const stats = [
    {
      icon: Wheat,
      title: "Active Crops",
      value: "4",
      change: "+2 this season",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: TrendingUp,
      title: "Expected Yield",
      value: "12.5T",
      change: "+15% vs last year",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: DollarSign,
      title: "Market Price",
      value: "₹2,450",
      change: "per quintal",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Cloud,
      title: "Weather",
      value: "28°C",
      change: "Partly Cloudy",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const cropData = [
    { name: "Rice", area: 12, yield: 45 },
    { name: "Wheat", area: 8, yield: 38 },
    { name: "Corn", area: 6, yield: 32 },
    { name: "Cotton", area: 10, yield: 28 },
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
    {
      title: "Soil Health Card",
      description: "Get your soil tested and improve productivity",
      status: "Pending",
    },
  ];

  const recentArticles = [
    { title: "Water Conservation Techniques", date: "2 days ago" },
    { title: "Organic Pest Control Methods", date: "5 days ago" },
    { title: "Monsoon Preparation Guide", date: "1 week ago" },
  ];

  const consultations = [
    {
      expert: "Dr. Rajesh Kumar",
      topic: "Soil Health Management",
      date: "March 1, 2026",
      status: "Scheduled",
    },
    {
      expert: "Priya Sharma",
      topic: "Drip Irrigation Setup",
      date: "Feb 28, 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Farmer!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your farm today
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

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Crop Overview</CardTitle>
            <CardDescription>Area and yield by crop type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cropData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="area" fill="#2E7D32" name="Area (acres)" />
                <Bar dataKey="yield" fill="#A5D6A7" name="Yield (quintals)" />
              </BarChart>
            </ResponsiveContainer>
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
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#2E7D32"
                  strokeWidth={2}
                  name="Price (₹)"
                />
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
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {scheme.title}
                    </h4>
                    <p className="text-sm text-gray-600">{scheme.description}</p>
                  </div>
                  <Badge
                    className={
                      scheme.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : scheme.status === "Enrolled"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
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

      {/* Expert Consultations */}
      <Card className="rounded-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Expert Consultations</CardTitle>
              <CardDescription>Your scheduled and past consultations</CardDescription>
            </div>
            <Button>
              <MessageSquare className="h-4 w-4 mr-2" />
              Book Consultation
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {consultations.map((consultation, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{consultation.expert}</h4>
                    <p className="text-sm text-gray-600">{consultation.topic}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{consultation.date}</span>
                    </div>
                  </div>
                </div>
                <Badge
                  className={
                    consultation.status === "Scheduled"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }
                >
                  {consultation.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
