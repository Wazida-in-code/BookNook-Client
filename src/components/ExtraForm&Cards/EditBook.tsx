"use client";
import { Mail, Pencil, UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const CATEGORIES = [
  "Mystery & Thriller",
  "Fiction",
  "Science",
  "History",
  "Fantasy",
  "Horror",
  "Self-Help",
  "Others",
];

interface IBook {
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

const fieldClass =
  "h-11 rounded-lg border-[#e6d8c9] bg-white text-[#5a2a20] placeholder:text-[#b39a8a] " +
  "focus-visible:border-[#7b2d1f] focus-visible:ring-2 focus-visible:ring-[#7b2d1f]/20";

const labelClass = "text-sm font-medium text-[#7b2d1f]";

const EditBook = ({book}:{book: IBook}) => {
  const router = useRouter()
   const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const token = await getTokenFromClient()
    const formData = new FormData(e.target);
    const totalCopies = formData.get("totalCopies");
    const bookData =  {
  ...Object.fromEntries(formData.entries()),
  totalCopies: Number(totalCopies),
};

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/books/${book._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bookData),
      },
    );
    const result = await res.json();

    if (result) {
      toast.add({
        title: "Book Updated Successfully!",
        type: "success",
      });
    }

    if (!result) {
      toast.add({
        title: "Something went wrong!",
        type: "error",
      });
    }
    router.refresh()
  };
    const handleClose = () => setIsOpen(false);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        type="button"
        className="inline-flex h-8 flex-1 items-center justify-center gap-2 rounded-lg bg-[#6B4226] px-3 text-xs text-white hover:bg-[#4A2F22]"
      >
        <Pencil size={14} />
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Books Info-</DialogTitle>
        </DialogHeader>
            <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <Label htmlFor="title" className={labelClass}>
                    Book title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={book.title}
                    className={`${fieldClass} h-9`}
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="author" className={labelClass}>
                    Author name
                  </Label>
                  <Input
                    id="author"
                    name="author"
                    defaultValue={book.author}
                    className={`${fieldClass} h-9`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="category" className={labelClass}>
                                Category
                              </Label>
              
                              <select
                                id="category"
                                name="category"
                                defaultValue={book.category}
                                className={`${fieldClass} h-9 w-full`}
                                required
                              >
                                <option value="" disabled>
                                  Select a category
                                </option>
              
                                {CATEGORIES.map((c) => (
                                  <option key={c} value={c.toLowerCase()}>
                                    {c}
                                  </option>
                                ))}
                              </select>
                            </div>
              
                            <div className="space-y-2">
                              <Label htmlFor="totalCopies" className={labelClass}>
                                Total Copies
                              </Label>
              
                              <Input
                                id="totalCopies"
                                name="totalCopies"
                                defaultValue={book.totalCopies}
                                type="number"
                                min="0"
                                placeholder="Enter total copies"
                                className={fieldClass}
                                required
                              />
                            </div>
                          </div>

              <div className="space-y-1">
                <Label htmlFor="image-url" className={labelClass}>
                  Image URL
                </Label>
                <Input
                  id="image-url"
                  name="image"
                  type="url"
                  defaultValue={book.image}
                  className={`${fieldClass} h-9`}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="description" className={labelClass}>
                  Short description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={2}
                  defaultValue={book.description}
                  className="min-h-16 rounded-lg border-[#e6d8c9] bg-white text-sm text-[#5a2a20] placeholder:text-[#b39a8a] focus-visible:border-[#7b2d1f] focus-visible:ring-2 focus-visible:ring-[#7b2d1f]/20"
                />
              </div>

              <div className="grid gap-3 rounded-lg border border-[#ecdfd0] bg-[#fdf8f1] p-3 md:grid-cols-2">
                <div className="space-y-1">
                  <Label htmlFor="userName" className={labelClass}>
                    Your name
                  </Label>
                  <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9a7b6c]" />
                    <Input
                      id="userName"
                      name="userName"
                      value={user?.name || ""}
                      readOnly
                      className={`${fieldClass} h-9 cursor-not-allowed bg-[#f4ebdf] pl-9`}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="userEmail" className={labelClass}>
                    Your email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9a7b6c]" />
                    <Input
                      id="userEmail"
                      name="userEmail"
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className={`${fieldClass} h-9 cursor-not-allowed bg-[#f4ebdf] pl-9`}
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit" onClick={handleClose}
                className="h-10 w-full rounded-lg bg-[#7b2d1f] text-sm font-medium text-white hover:bg-[#64241a] focus-visible:ring-2 focus-visible:ring-[#7b2d1f]/40"
              >
                Edit Book
              </Button>
            </form>
            </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditBook;
