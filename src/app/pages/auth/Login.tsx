import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Sprout } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "farmer",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in a real app, this would call an API
    console.log("Login:", formData);
    // Redirect to dashboard based on role
    navigate(`/dashboard/${formData.role}`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-12 px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
            <Sprout className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Login to your FarmConnect account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="farmer@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">Login As</Label>
              <Select
                value={formData.role}
                onValueChange={(value) =>
                  setFormData({ ...formData, role: value })
                }
              >
                <SelectTrigger id="role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="expert">Agricultural Expert</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="public">Public User</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, rememberMe: checked as boolean })
                  }
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal cursor-pointer"
                >
                  Remember me
                </Label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
