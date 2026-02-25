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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  FileText,
  TrendingUp,
  Activity,
  UserCheck,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

export function AdminDashboard() {
  const stats = [
    {
      icon: Users,
      title: "Total Users",
      value: "12,543",
      change: "+245 this month",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FileText,
      title: "Published Articles",
      value: "1,234",
      change: "+56 this week",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Activity,
      title: "Active Sessions",
      value: "3,421",
      change: "Currently online",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "+18.2%",
      change: "vs last month",
      color: "bg-accent/10 text-accent",
    },
  ];

  const userData = [
    { month: "Jan", farmers: 2400, experts: 240, public: 800 },
    { month: "Feb", farmers: 2800, experts: 280, public: 950 },
    { month: "Mar", farmers: 3200, experts: 320, public: 1100 },
    { month: "Apr", farmers: 3600, experts: 360, public: 1250 },
    { month: "May", farmers: 4100, experts: 410, public: 1400 },
    { month: "Jun", farmers: 4500, experts: 450, public: 1593 },
  ];

  const userDistribution = [
    { name: "Farmers", value: 4500, color: "#2E7D32" },
    { name: "Experts", value: 450, color: "#FBC02D" },
    { name: "Public", value: 1593, color: "#A5D6A7" },
  ];

  const recentUsers = [
    {
      name: "Ramesh Kumar",
      email: "ramesh@example.com",
      role: "Farmer",
      status: "Active",
      joined: "Feb 24, 2026",
    },
    {
      name: "Dr. Anjali Desai",
      email: "anjali@example.com",
      role: "Expert",
      status: "Active",
      joined: "Feb 23, 2026",
    },
    {
      name: "Suresh Patel",
      email: "suresh@example.com",
      role: "Farmer",
      status: "Pending",
      joined: "Feb 22, 2026",
    },
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "Expert",
      status: "Active",
      joined: "Feb 21, 2026",
    },
  ];

  const contentApprovals = [
    {
      title: "Organic Farming Best Practices",
      author: "Dr. Rajesh Kumar",
      type: "Article",
      status: "Pending",
    },
    {
      title: "Water Conservation Methods",
      author: "Meena Patel",
      type: "Article",
      status: "Pending",
    },
    {
      title: "Seasonal Crop Planning Guide",
      author: "Anil Verma",
      type: "Guide",
      status: "Pending",
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Farmer":
        return "bg-green-100 text-green-800";
      case "Expert":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
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
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage users, content, and monitor platform performance
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
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 rounded-xl">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>User registration trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="farmers"
                  stackId="1"
                  stroke="#2E7D32"
                  fill="#2E7D32"
                  name="Farmers"
                />
                <Area
                  type="monotone"
                  dataKey="experts"
                  stackId="1"
                  stroke="#FBC02D"
                  fill="#FBC02D"
                  name="Experts"
                />
                <Area
                  type="monotone"
                  dataKey="public"
                  stackId="1"
                  stroke="#A5D6A7"
                  fill="#A5D6A7"
                  name="Public"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
            <CardDescription>By role type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Users */}
      <Card className="rounded-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent User Registrations</CardTitle>
              <CardDescription>Latest users who joined the platform</CardDescription>
            </div>
            <Button variant="outline">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className={getRoleBadgeColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joined}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Content Approval */}
      <Card className="rounded-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pending Content Approvals</CardTitle>
              <CardDescription>Review and approve submitted content</CardDescription>
            </div>
            <Badge className="bg-amber-100 text-amber-800">
              {contentApprovals.length} Pending
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentApprovals.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{content.title}</h4>
                    <p className="text-sm text-gray-600">By {content.author}</p>
                    <Badge className="bg-blue-100 text-blue-800 mt-1">
                      {content.type}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button size="sm">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
