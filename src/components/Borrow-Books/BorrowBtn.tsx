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
}
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BorrowBtn = ({ book }: { book: Book }) => {
  const handleBorrowBook = async () => {
    const borrowDate = new Date();

    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 14);

    const info = {
      ...book,
      borrowDate: borrowDate.toLocaleDateString("en-GB", {
        timeZone: "Asia/Dhaka",
      }),
      returnDate: returnDate.toLocaleDateString("en-GB", {
        timeZone: "Asia/Dhaka",
      }),
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
    console.log(data);
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button
          type="button"
          className="h-12 w-full rounded-xl bg-[#6B4226] text-base font-semibold text-white shadow-md shadow-[#6B4226]/10 transition-all duration-300 hover:bg-[#4A2F22] hover:shadow-lg"
        >
          Borrow This Book
        </Button>}>
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to borrow this book?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBorrowBook} >Borrow This Book</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BorrowBtn;
