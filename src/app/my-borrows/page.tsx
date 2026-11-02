import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
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
  returnDate: string
}

const MyBorrowsPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
      const user = session?.user;
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/my-borrows/${user?.email}`)
      const borrows:Book[] = await res.json()
      console.log(borrows);
    return (
        <div className="min-h-screen bg-[#F8F5F0] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#4A2F22]">
            My Borrowed Books
          </h1>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#E8DDD2] bg-white shadow-sm">
          <table className="w-full min-w-[750px] text-left">

            <thead className="bg-[#6B4226] text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Image</th>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Borrow Date</th>
                <th className="px-6 py-4 font-semibold">Return Date</th>
                <th className="px-6 py-4 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E8DDD2]">

              {borrows.length > 0 ? (
                borrows.map((book) => (
                  <tr key={book._id} className="transition hover:bg-[#F8F5F0]">

                    <td className="px-6 py-4">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={55}
                        height={75}
                        className="h-[75px] w-[55px] rounded-md object-cover"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <p className="font-semibold text-[#4A2F22]">
                        {book.title}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {book.borrowDate}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {book.returnDate}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        type="button"
                        className="rounded-lg bg-[#6B4226] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4A2F22]"
                      >
                        Return Book
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500">
                    You haven&apos;t borrowed any books yet.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

      </div>
    </div>
    );
};

export default MyBorrowsPage;