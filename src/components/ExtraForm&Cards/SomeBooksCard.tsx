import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description: string;
  userName: string;
  userEmail: string;
}

const SomeBooksCard = ({ book }: { book: Book }) => {
  return (
    <Card className="overflow-hidden border border-[#E8DED3] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 w-full bg-[#F8F5F0]">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
        />
      </div>

      <CardContent className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-[#4A2F22]">
            {book.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">By {book.author}</p>
        </div>

        <span className="inline-block rounded-full bg-[#F5EDE5] px-3 py-1 text-xs font-medium capitalize text-[#6B4226]">
          {book.category}
        </span>

        <Link
          href={`/books/${book._id}`}
          className="relative z-10 flex h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-[#6B4226] text-white transition-colors hover:bg-[#4A2F22]"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
};

export default SomeBooksCard;