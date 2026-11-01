import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-5 py-16">

      <div className="w-full max-w-lg rounded-2xl border border-[#E8DDD0] bg-[#FFFCF7] px-6 py-12 text-center shadow-sm md:px-12">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFE3D5]">
          <BookOpen size={38} className="text-[#805638]" />
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight text-[#6B4226]">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-[#4A2F22]">
          Book Not Found!
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#927B69]">
          Oops! We couldn&apos;t find the book you&apos;re looking for.
          It may have been removed or the link might be incorrect.
        </p>

        <Link
          href="/books"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#6B4226] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4A2F22] hover:shadow-lg"
        >
          <ArrowLeft size={18} />
          Explore All Books
        </Link>

      </div>
    </div>
  );
};

export default NotFound;