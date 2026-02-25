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

export function ExpertDashboard() {
  const stats = [
    {
      icon: FileText,
      title: "Published Articles",
      value: "48",
      change: "+6 this month",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MessageSquare,
      title: "Queries Answered",
      value: "234",
      change: "+18 this week",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Farmers Helped",
      value: "156",
      change: "Total reach",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Engagement Rate",
      value: "92%",
      change: "vs 85% avg",
      color: "bg-accent/10 text-accent",
    },
  ];

  const articleStats = [
    { month: "Jan", articles: 6, views: 1200 },
    { month: "Feb", articles: 8, views: 1600 },
    { month: "Mar", articles: 7, views: 1450 },
    { month: "Apr", articles: 9, views: 1800 },
    { month: "May", articles: 10, views: 2100 },
    { month: "Jun", articles: 8, views: 1750 },
  ];

  const myArticles = [
    {
      title: "Organic Farming Best Practices",
      status: "Published",
      views: 2456,
      likes: 189,
      date: "Feb 20, 2026",
    },
    {
      title: "Water Conservation Techniques",
      status: "Published",
      views: 1834,
      likes: 142,
      date: "Feb 15, 2026",
    },
    {
      title: "Soil Health Management",
      status: "Draft",
      views: 0,
      likes: 0,
      date: "Feb 24, 2026",
    },
  ];

  const farmerQueries = [
    {
      farmer: "Ramesh Kumar",
      question: "How to control aphids without chemicals?",
      topic: "Pest Control",
      status: "Pending",
      date: "2 hours ago",
    },
    {
      farmer: "Suresh Patel",
      question: "Best time to plant wheat in my region?",
      topic: "Crop Planning",
      status: "Pending",
      date: "5 hours ago",
    },
    {
      farmer: "Vijay Reddy",
      question: "Drip irrigation setup cost estimate?",
      topic: "Irrigation",
      status: "Answered",
      date: "1 day ago",
    },
    {
      farmer: "Anil Verma",
      question: "Dealing with soil salinity issues",
      topic: "Soil Health",
      status: "Answered",
      date: "2 days ago",
    },
  ];

  const upcomingConsultations = [
    {
      farmer: "Meena Desai",
      topic: "Organic Vegetable Farming",
      date: "Feb 26, 2026",
      time: "10:00 AM",
    },
    {
      farmer: "Rajesh Shah",
      topic: "Crop Rotation Planning",
      date: "Feb 27, 2026",
      time: "2:00 PM",
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Pending":
        return "bg-amber-100 text-amber-800";
      case "Answered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Expert Dashboard
        </h1>
        <p className="text-gray-600">
          Share your knowledge and help farmers succeed
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

      {/* Article Performance */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Article Performance</CardTitle>
          <CardDescription>Your publications and views over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={articleStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="articles" fill="#2E7D32" name="Articles" />
              <Bar yAxisId="right" dataKey="views" fill="#A5D6A7" name="Views" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Content Management */}
      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="articles">My Articles</TabsTrigger>
          <TabsTrigger value="queries">Farmer Queries</TabsTrigger>
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
        </TabsList>

        {/* My Articles */}
        <TabsContent value="articles">
          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>My Articles</CardTitle>
                  <CardDescription>Manage your published content</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Article
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myArticles.map((article, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium max-w-xs">
                        {article.title}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadgeColor(article.status)}>
                          {article.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4 text-gray-400" />
                          {article.views}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-gray-400" />
                          {article.likes}
                        </div>
                      </TableCell>
                      <TableCell>{article.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Farmer Queries */}
        <TabsContent value="queries">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Farmer Queries</CardTitle>
              <CardDescription>
                Answer questions from farmers seeking your expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {farmerQueries.map((query, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        query.status === "Pending"
                          ? "bg-amber-100"
                          : "bg-green-100"
                      }`}>
                        {query.status === "Pending" ? (
                          <HelpCircle className="h-6 w-6 text-amber-600" />
                        ) : (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">
                            {query.farmer}
                          </h4>
                          <Badge className="bg-blue-100 text-blue-800">
                            {query.topic}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{query.question}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {query.date}
                        </div>
                      </div>
                    </div>
                    {query.status === "Pending" && (
                      <Button size="sm">
                        Answer
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Consultations */}
        <TabsContent value="consultations">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Upcoming Consultations</CardTitle>
              <CardDescription>
                Scheduled one-on-one sessions with farmers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingConsultations.map((consultation, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {consultation.farmer}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {consultation.topic}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {consultation.date}
                          </div>
                          <span>{consultation.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button size="sm">
                        Join Session
                      </Button>
                    </div>
                  </div>
                ))}

                {upcomingConsultations.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No upcoming consultations scheduled
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
