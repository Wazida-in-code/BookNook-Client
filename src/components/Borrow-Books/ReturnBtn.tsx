'use client'
import { toast } from "../ui/toast";
import { useRouter } from "next/navigation";
interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description: string;
  userName: string;
  userEmail: string;
  borrowerName: string,
  borrowerEmail: string,
  borrowDate: string;
  returnDate: string;
  status:string;
}


const ReturnBtn = ({book}:{book: Book}) => {
    const router = useRouter()
    const handleReturn = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/borrows/${id}`,
    {
      method: "PATCH",
    }
  );

  const data = await res.json();

  if (res.ok) {
    toast.add({
      title: "Book Returned Successfully!",
      type: "success",
    });

    router.refresh();
  } else {
    toast.add({
      title: data.message,
      type: "error",
    });
  }
};
  return (
    <button
      type="button" 
      className="rounded-lg bg-[#6B4226] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4A2F22]"
      disabled={book.status === "Returned"}
  onClick={() => handleReturn(book._id)}
    >
      {book.status === "Returned" ? "Returned" : "Return Book"}
    </button>
  );
};

export default ReturnBtn;
