"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { authClient, signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries()) as {email: string; password: string;}
     const { data, error } = await signIn.email(userData);
    
        if (data) {
            toast.add({
            title: "You Have Been Successfully Logged in!",
            type: "success"
        })
          redirect("/")
        }
        if (error) {
           toast.add({
            title: "Something went wrong!",
            type: "error"
        })
        }
  }

  const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-[#F8F5F0] p-8 shadow-xl sm:p-10">
      
        <div className="mb-7 flex flex-col items-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B422E] text-white">
            <BookOpen size={30} />
          </div>
          <p className="mt-2 text-md text-gray-600">Welcome back! Sign in to continue reading.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#4A2C20]">Email Address
            </label>

            <div className="relative">
              <Mail size={19} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>

              <input id="email" name="email" type="email" placeholder="Enter your email" required
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#8B5E46] focus:ring-2 focus:ring-[#8B5E46]/20"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password"
                className="text-sm font-semibold text-[#4A2C20]"> Password
              </label>
            </div>

            <div className="relative">
              <Lock size={19} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" required
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-[#8B5E46] focus:ring-2 focus:ring-[#8B5E46]/20"
              />

              <button type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#6B422E]"> {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}</button>
            </div>
          </div>

          <button
            type="submit" className="w-full rounded-lg bg-[#6B422E] py-3 font-semibold text-white transition hover:bg-[#4A2C20]"> Login </button>

             <Link href="/forgot-password" className="text-[15px] ml-19 lg:ml-30 text-[#8B5E46] hover:underline"> Forgot Password? </Link>

        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <Button
          type="button" variant="outline"
          className="h-12 w-full gap-3 border-[#E8DDD3] text-[#49352B] hover:bg-[#FAF7F2]"
          onClick={handleGoogleSignIn}>
          <FcGoogle size={20} /> Continue with Google </Button>

        <p className="mt-7 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-bold text-[#8B5E46] hover:underline"> Register Now </Link>
        </p>
      </div>
    </div>
  );
}
