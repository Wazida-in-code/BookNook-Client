import AllBooksCard from "@/components/ExtraForm&Cards/AllBooksCard";

interface IBookAll {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
}

const AllBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/books`);

  const data:IBookAll[] = await res.json();

  return (
    <div className="min-h-screen bg-white px-5 py-16 md:px-10 lg:px-16">

      <div className="mx-auto mb-12 max-w-7xl text-center">

        <h1 className="text-3xl font-bold tracking-tight text-[#4A2F22] md:text-4xl">
          All Books
        </h1>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#B77B50]"></div>

        <p className="mt-5 text-sm text-[#927B69] md:text-base">
          Explore our collection and discover your next favorite read.
        </p>

      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((book) => (
          <AllBooksCard key={book._id} book={book} />
        ))}

      </div>

    </div>
  );
};

export default AllBooks;