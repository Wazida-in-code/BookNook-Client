import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IBook {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
}

const AllBooksCard = ({ book }: { book: IBook }) => {
  return (
    <Card className="group overflow-hidden border border-[#E8DDD0] bg-[#FFFCF7] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6B4226]/10">
      <div className="relative h-64 overflow-hidden bg-[#F2E9DE] p-5">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="space-y-3 p-5">
        <span className="inline-block rounded-full bg-[#EFE3D5] px-3 py-1 text-xs font-semibold text-[#805638]">
          {book.category}
        </span>

        <h2 className="line-clamp-1 text-xl font-bold text-[#4A2F22]">
          {book.title}
        </h2>

        <p className="text-sm text-[#927B69]">
          By <span className="font-medium text-[#6B4226]">{book.author}</span>
        </p>
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

export default AllBooksCard;
