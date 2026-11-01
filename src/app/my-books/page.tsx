import MyBooksCard from "@/components/ExtraForm&Cards/MyBooksCard";
import { auth } from "@/lib/auth";
import { BookOpen } from "lucide-react";
import { headers } from "next/headers";

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

const MyBooks = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/my-books/${user?.email}`,); //http://localhost:8000/my-books/omor@bin.com
  const books:IBook[] = await res.json();

  return (
    <div className="min-h-screen bg-white px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#4A2F22] md:text-4xl">
            My Books
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#B77B50]"></div>

          <p className="mt-5 text-sm text-[#927B69] md:text-base">
            My Book collection
          </p>
        </div>

        {books.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <MyBooksCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9C7B5] bg-[#FFFCF7] px-5 py-16 text-center">
            <div className="mb-5 rounded-full bg-[#EFE3D5] p-5">
              <BookOpen size={35} className="text-[#805638]" />
            </div>

            <h2 className="text-xl font-bold text-[#4A2F22]">
              No Books Added Yet!
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#927B69]">
              Your book collection is waiting to grow. Start adding your
              favorite books!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooks;
