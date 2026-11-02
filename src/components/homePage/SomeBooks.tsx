import Link from "next/link";
import { Button } from "../ui/button";
import SomeBooksCard from "../ExtraForm&Cards/SomeBooksCard";

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

const SomeBooks = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/six-books`)
    const data:Book[] = await res.json()
    console.log(data);
    return (
        <section className="bg-[#F8F5F0] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#A07855]">
            Explore Our Collection
          </p>

          <h2 className="text-3xl font-bold text-[#4A2F22] sm:text-4xl">
            New Arrivals
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Discover the latest additions to our book collection
            and find your next favorite read.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((book) => (
            <SomeBooksCard key={book._id} book={book} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            className="relative z-10 cursor-pointer justify-center rounded-lg bg-[#6B4226] text-white transition-colors hover:bg-[#4A2F22]"
          >
            <Link href="/books">
              See All Books
            </Link>
          </Button>
        </div>

      </div>
    </section>
    );
};

export default SomeBooks;