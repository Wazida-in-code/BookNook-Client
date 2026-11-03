import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { UserRound, Mail, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import BorrowBtn from "@/components/Borrow-Books/BorrowBtn";
import { Metadata } from "next";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description: string;
  userName: string;
  userEmail: string;
  totalCopies: number;
}

export const metadata: Metadata = {
  title: "Book-Details",
};

const BookDetailsPage = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params;
  const token = await getTokenFromServer()
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/books/${id}`, {
    headers : {
      authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) notFound()
  const data = await res.json();
  const book: Book = data.result ?? data;
  if (!book) notFound()

  return (
    <div className="min-h-screen bg-white px-5 py-16 md:px-10 lg:px-16">

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">

          <h1 className="text-3xl font-bold tracking-tight text-[#4A2F22] md:text-4xl">
            Book Details
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#B77B50]"></div>
          <p className="mt-5 text-sm text-[#927B69] md:text-base">
            Discover more about your next favorite book.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex justify-center rounded-2xl border border-[#E8DDD0] bg-[#F8F3EC] p-8 md:p-10">
            <div className="relative h-[420px] w-full max-w-[300px] overflow-hidden rounded-xl shadow-xl">
              <Image
                src={book.image}
                alt={book.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <Badge className="rounded-full border-0 bg-[#EFE3D5] px-4 py-1.5 text-sm font-semibold capitalize text-[#805638] hover:bg-[#EFE3D5]">
                {book.category}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 lg:gap-20">
                <h1 className="text-3xl font-bold text-[#4A2F22] md:text-4xl">
                  {book.title}
                </h1>
                <span className="rounded-full border border-[#e6d8c9] bg-[#f8f1e8] px-3 py-1.5 text-sm font-semibold text-[#7b2d1f]">
                  {book.totalCopies} Copies Available
                </span>
              </div>
              <p className="text-base text-[#927B69]">
                Written by{" "}
                <span className="font-semibold text-[#6B4226]">
                  {book.author}
                </span>
              </p>
            </div>

            <Separator className="bg-[#E8DDD0]" />

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#4A2F22]">
                <BookOpen size={20} className="text-[#B77B50]" />
                About This Book
              </h3>

              <p className="text-sm leading-7 text-[#806F60] md:text-base">
                {book.description}
              </p>
            </div>

            <Card className="rounded-xl border border-[#E5DDD4] bg-[#F8F8F7] shadow-none">
              <CardContent className="p-5">

                <h3 className="mb-5 text-base font-bold text-[#4A2F22]">
                  Added By
                </h3>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#EDE4D9] p-2">
                      <UserRound size={19} className="text-[#805638]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-[#927B69]">
                        User Name
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-[#4A2F22]">
                        {book.userName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#EDE4D9] p-2">
                      <Mail size={19} className="text-[#805638]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-[#927B69]">
                        Email Address
                      </p>
                      <p className="mt-1 break-all text-sm font-semibold text-[#4A2F22]">
                        {book.userEmail}
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>

            <BorrowBtn book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;