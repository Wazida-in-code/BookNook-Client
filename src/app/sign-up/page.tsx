"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  User,
  Image as ImageIcon,
  Eye,
  EyeOff,
  BookOpen,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    if (
      !/[A-Z]/.test(userData.password) ||
      !/[a-z]/.test(userData.password) ||
      userData.password.length < 8
    ) {
      setError("Please fulfill all password requirements.");
      return;
    }

    setError("");

    const { data, error } = await signUp.email(userData);

    if (data) {
        toast.add({
            title: "You Have Been Successfully Registered!",
            type: "success"
        })
      redirect("/sign-in")
    }
    if (error) {
       toast.add({
            title: "Something went wrong!",
            type: "error"
        })
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white  px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-[#f7f6f6] bg-[#F8F5F0] px-6 py-10 shadow-xl sm:px-10 md:py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-7 flex flex-col items-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B422E] text-white">
            <BookOpen size={30} />
          </div>

          <h2 className="mt-2 text-[30px] font-bold text-gray-600">Create Account</h2>
        </div>


          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#49352B]">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-[#9A8273]" />
                <Input id="name" name="name" type="text"
                  placeholder="Enter your full name" className="h-11 border-[#E8DDD3] pl-10 focus-visible:ring-[#8B5E46]" required/>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#49352B]">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#9A8273]" />
                <Input id="email" name="email" type="email"
                  placeholder="you@example.com" className="h-11 border-[#E8DDD3] pl-10 focus-visible:ring-[#8B5E46]" required/>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-[#49352B]">Profile Photo URL</Label>
              <div className="relative">
                <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-[#9A8273]" />
                <Input id="image" name="image" type="url" 
                  placeholder="https://example.com/photo.jpg" className="h-11 border-[#E8DDD3] pl-10 focus-visible:ring-[#8B5E4" required/>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#49352B]">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#9A8273]" />
                <Input
                  id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Create a strong password" value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="h-11 border-[#E8DDD3] pl-10 pr-11 focus-visible:ring-[#8B5E46]"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#9A8273]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
              </div>

              <p className="text-xs text-[#9A8273]">Password must contain:</p>

              <div className="space-y-1 text-xs">
                <p
                  className={
                    /[A-Z]/.test(password) ? "text-green-700" : "text-[#9A8273]"}>✓ At least one uppercase letter
                </p>
                <p
                  className={
                    /[a-z]/.test(password) ? "text-green-700" : "text-[#9A8273]"}>✓ At least one lowercase letter
                </p>
                <p
                  className={
                    password.length >= 8 ? "text-green-700" : "text-[#9A8273]" }> ✓ At least 8 characters
                </p>
              </div>

              {error && (
                <p className="text-sm font-medium text-red-600">{error}</p>)}
            </div>

            <Button type="submit"
              className="h-12 w-full bg-[#49352B] text-base font-semibold text-white hover:bg-[#654A3A]">Create My Account</Button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <Separator className="flex-1 bg-[#E8DDD3]" />
            <span className="text-xs text-[#9A8273]">OR CONTINUE WITH</span>
            <Separator className="flex-1 bg-[#E8DDD3]" />
          </div>

          <Button type="button" variant="outline"
            className="h-12 w-full gap-3 border-[#E8DDD3] text-[#49352B] hover:bg-[#FAF7F2]"
            onClick={() => {
              // Add Google authentication here
            }}
          >
            <FcGoogle size={20} />
            Continue with Google
          </Button>

          <p className="mt-8 text-center text-sm text-[#8B786D]">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#49352B] underline underline-offset-4 hover:text-[#8B5E46]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
