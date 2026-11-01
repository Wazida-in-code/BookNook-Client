
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F5F0] px-4 text-center">

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#EDE2D5]">
        <BookOpen size={38} className="text-[#6B4226]" />
      </div>

      <h1 className="text-8xl font-extrabold text-[#6B4226] sm:text-9xl">
        404
      </h1>

      <h2 className="mt-5 text-2xl font-bold text-[#4A2F22] sm:text-3xl">
        Page Not Found!
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
        Oops! The page you are looking for doesn&apos;t exist or
        may have been moved. Let&apos;s get you back to your
        favorite books.
      </p>

        <Link href="/" className="mt-8 flex flex-row items-center justify-center gap-2 bg-[#6B4226] px-7 py-3 rounded-2xl text-white hover:bg-[#4A2F22]">
          <Home size={18} />
          Back to Home
        </Link>
    </div>
  );
};

export default NotFound;
