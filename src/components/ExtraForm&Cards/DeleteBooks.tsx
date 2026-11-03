'use client'
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
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

interface IBook {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description: string;
  userName: string;
  userEmail: string;
}


const DeleteBooks = ({book}:{book:IBook}) => {
    const router = useRouter()
    const handleDeleteBook = async() =>{
      const token = await getTokenFromClient()
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/books/${book._id}`, {
            method: "DELETE",
            headers: {
          authorization: `Bearer ${token}`
        },
        })
        // const data = await res.json();
        if (!res.ok) {
          console.log("Failed to delete book");
          return;
        }

  router.refresh();
    }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="h-8 flex-1 rounded-lg border-[#D9B8A0] text-xs text-[#A34F3B] hover:bg-[#F8EAE5] hover:text-[#8D3829]"
          >
            <Trash2 size={14} />
            Delete
          </Button>
        }
      >
        Show Dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
           Do you want to delete this book?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteBook}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBooks;
