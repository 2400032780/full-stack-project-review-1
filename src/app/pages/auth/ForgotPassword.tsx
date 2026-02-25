import { Link } from "react-router";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Sprout, ArrowLeft, Mail, KeyRound, Check } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";

export function ForgotPassword() {
  const [step, setStep] = useState<"email" | "otp" | "reset" | "success">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call to send OTP
    console.log("Sending OTP to:", email);
    setStep("otp");
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call to verify OTP
    console.log("Verifying OTP:", otp);
    setStep("reset");
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock API call to reset password
    console.log("Resetting password");
    setStep("success");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-12 px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
            {step === "success" ? (
              <Check className="h-8 w-8 text-white" />
            ) : step === "otp" ? (
              <KeyRound className="h-8 w-8 text-white" />
            ) : (
              <Mail className="h-8 w-8 text-white" />
            )}
          </div>
          <CardTitle className="text-2xl">
            {step === "email" && "Forgot Password"}
            {step === "otp" && "Verify OTP"}
            {step === "reset" && "Reset Password"}
            {step === "success" && "Password Reset!"}
          </CardTitle>
          <CardDescription>
            {step === "email" && "Enter your email to receive a verification code"}
            {step === "otp" && "Enter the 6-digit code sent to your email"}
            {step === "reset" && "Create a new password for your account"}
            {step === "success" && "Your password has been successfully reset"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Email Step */}
          {step === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="farmer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Verification Code
              </Button>
              <div className="text-center">
                <Link
                  to="/login"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Login
                </Link>
              </div>
            </form>
          )}

          {/* OTP Step */}
          {step === "otp" && (
            <form onSubmit={handleOTPSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-center block">
                  Verification Code
                </Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Verify Code
              </Button>
              <div className="text-center text-sm">
                <span className="text-gray-600">Didn't receive the code? </span>
                <button
                  type="button"
                  onClick={() => console.log("Resending OTP")}
                  className="text-primary hover:underline"
                >
                  Resend
                </button>
              </div>
            </form>
          )}

          {/* Reset Password Step */}
          {step === "reset" && (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Reset Password
              </Button>
            </form>
          )}

          {/* Success Step */}
          {step === "success" && (
            <div className="space-y-4 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-10 w-10 text-primary" />
              </div>
              <p className="text-gray-600">
                Your password has been successfully reset. You can now login
                with your new password.
              </p>
              <Button asChild className="w-full" size="lg">
                <Link to="/login">Go to Login</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
