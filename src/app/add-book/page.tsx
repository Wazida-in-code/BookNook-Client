"use client";

import { BookOpen, UserRound, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";

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
const loggedInUser = {
  name: "Jane Reader",
  email: "jane@example.com",
};

const fieldClass =
  "h-11 rounded-lg border-[#e6d8c9] bg-white text-[#5a2a20] placeholder:text-[#b39a8a] " +
  "focus-visible:border-[#7b2d1f] focus-visible:ring-2 focus-visible:ring-[#7b2d1f]/20";

const labelClass = "text-sm font-medium text-[#7b2d1f]";

const AddBookPage = () => {
  const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookData = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData)
    })
    const result = await res.json();

    if (result){
      toast.add({
        title: "Book Added Successfully!",
        type: "success",
      });
    }

    if (!result){
      toast.add({
        title: "Something went wrong!",
        type: "error",
      });
    }
  };

  return (
    <section className="bg-[#ffffff] px-4 py-12 md:py-16">
      <Card className="mx-auto w-full max-w-3xl border-[#ecdfd0] bg-[#fffdf9] shadow-[0_8px_30px_-12px_rgba(123,45,31,0.18)]">
        <CardHeader className="items-center space-y-2 pb-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#7b2d1f]/10 text-[#7b2d1f]">
            <BookOpen className="size-6" />
          </div>
          <CardTitle className="text-3xl font-semibold text-[#7b2d1f]">
            Add a Book
          </CardTitle>
          <CardDescription className="text-[#9a7b6c]">
            Share a book with the BookNook community. Fill in the details below.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title" className={labelClass}>
                  Book title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g. The Midnight Library"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author" className={labelClass}>
                  Author name
                </Label>
                <Input
                  id="author"
                  name="author"
                  placeholder="e.g. Matt Haig"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className={labelClass}>
                Category
              </Label>

              <select
                id="category"
                name="category"
                defaultValue=""
                className={`${fieldClass} w-full`}
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
              <Label htmlFor="image-url" className={labelClass}>
                Image URL
              </Label>
              <Input
                id="image-url"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className={fieldClass}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className={labelClass}>
                Short description
              </Label>
              <Textarea
                id="description"
                name="description"
                rows={4}
                placeholder="What is this book about?"
                className="rounded-lg border-[#e6d8c9] bg-white text-[#5a2a20] placeholder:text-[#b39a8a] focus-visible:border-[#7b2d1f] focus-visible:ring-2 focus-visible:ring-[#7b2d1f]/20"
              />
            </div>

            <div className="grid gap-6 rounded-xl border border-[#ecdfd0] bg-[#fdf8f1] p-4 md:grid-cols-2">
              <div className="space-y-2">
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
                    className={`${fieldClass} cursor-not-allowed bg-[#f4ebdf] pl-9`}
                  />
                </div>
              </div>

              <div className="space-y-2">
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
                    className={`${fieldClass} cursor-not-allowed bg-[#f4ebdf] pl-9`}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="h-12 w-full rounded-lg bg-[#7b2d1f] text-base font-medium text-white hover:bg-[#64241a] focus-visible:ring-2 focus-visible:ring-[#7b2d1f]/40"
            >
              Add Book
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default AddBookPage;
