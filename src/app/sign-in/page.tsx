import SignInForm from "@/components/ExtraForm&Cards/SignInForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sign-In",
};

export default function LoginPage() {
 
  return <SignInForm />
}
