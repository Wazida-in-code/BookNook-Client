"use client";
import { Button } from "../ui/button";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "../ui/toast";
import { authClient } from "@/lib/auth-client";
import { Mail, UserRound } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BorrowBtn = ({ book }: { book: Book }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleBorrowBook = async () => {
    const borrowDate = new Date();

    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 14);

    const { _id, ...bookInfo } = book;
    const info = {
      ...bookInfo,
      bookId: _id,
      borrowerName: user?.name,
      borrowerEmail: user?.email,
      borrowDate: borrowDate.toLocaleDateString("en-GB", {
        timeZone: "Asia/Dhaka",
      }),
      returnDate: returnDate.toLocaleDateString("en-GB", {
        timeZone: "Asia/Dhaka",
      }),
      status: "Borrowed",
    };
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/borrows`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      },
    );
    const data = await res.json();

    if (!res.ok) {
  toast.add({
    title: data.message,
    type: "error",
  });
  return;
}

    if (data) {
      toast.add({
        title: "Book Has Borrowed Successfully!",
        type: "success",
      });
      setIsOpen(false);
      router.refresh();
    }
  };

  return (
    <div>
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>        
        <AlertDialogTrigger
          render={
            <Button
              type="button"
              className="h-12 w-full rounded-xl bg-[#6B4226] text-base font-semibold text-white shadow-md shadow-[#6B4226]/10 transition-all duration-300 hover:bg-[#4A2F22] hover:shadow-lg"
            >
              Borrow This Book
            </Button>
          }
        >
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Do you want to borrow this book?
            </AlertDialogTitle>
            <div className="space-y-2">
              <Label htmlFor="userName">Your name</Label>
              <div className="relative">
                <UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9a7b6c]" />
                <Input
                  value={user?.name || ""}
                  disabled
                  className="cursor-not-allowed bg-[#f4ebdf] pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="userEmail">Your email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9a7b6c]" />
                <Input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="cursor-not-allowed bg-[#f4ebdf] pl-9"
                />
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={book.totalCopies === 0} onClick={handleBorrowBook}>
              {book.totalCopies === 0 ? "Not Available" : "Borrow this book"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BorrowBtn;
