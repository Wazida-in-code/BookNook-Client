import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, UserRound } from "lucide-react";

interface IBook {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  userName: string;
}

const MyBooksCard = ({ book }: {book: IBook}) => {
  return (
    <Card className="group overflow-hidden rounded-xl border border-[#E8DDD0] bg-[#FFFCF7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6B4226]/10">

      <CardContent className="flex gap-4 p-4">

        {/* Book Image */}
        <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-lg bg-[#F2E9DE]">
          <Image
            src={book.image}
            alt={book.title}
            fill
            sizes="96px"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Book Information */}
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">

          <div className="space-y-2">

            {/* Category */}
            <Badge className="rounded-full border-0 bg-[#EFE3D5] px-3 py-1 text-xs font-medium capitalize text-[#805638] hover:bg-[#EFE3D5]">
              {book.category}
            </Badge>

            {/* Title */}
            <h2 className="line-clamp-2 text-base font-bold leading-snug text-[#4A2F22]">
              {book.title}
            </h2>

            {/* Author */}
            <p className="line-clamp-1 text-sm text-[#927B69]">
              By {book.author}
            </p>

            {/* Added By */}
            <div className="flex items-center gap-1.5 text-xs text-[#927B69]">
              <UserRound size={14} />
              <span>Added by</span>
              <span className="font-semibold text-[#6B4226]">
                {book.userName}
              </span>
            </div>

          </div>

          {/* Edit & Delete Buttons */}
          <div className="flex gap-2">

            <Button
              type="button"
              size="sm"
              className="h-8 flex-1 rounded-lg bg-[#6B4226] text-xs text-white hover:bg-[#4A2F22]"
            >
              <Pencil size={14} />
              Edit
            </Button>

            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-8 flex-1 rounded-lg border-[#D9B8A0] text-xs text-[#A34F3B] hover:bg-[#F8EAE5] hover:text-[#8D3829]"
            >
              <Trash2 size={14} />
              Delete
            </Button>

          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default MyBooksCard;