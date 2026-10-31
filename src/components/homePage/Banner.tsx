
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A magical story about following your dreams and discovering your true purpose in life.",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Discover how tiny changes can lead to remarkable results and transform your everyday life.",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    description:
      "A powerful story of love, courage, and the strength to make difficult choices.",
    image: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "Explore the fascinating relationship between money, human behavior, and financial decisions.",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description:
      "Enter a magical world of friendship, adventure, mystery, and unforgettable discoveries.",
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
  },
];

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      {mounted && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="book-banner overflow-hidden rounded-2xl"
        >
          {books.map((book, index) => (
            <SwiperSlide key={book.title}>
              <div className="grid min-h-[380px] items-center gap-8 bg-[#fff5e9] px-8 py-10 md:grid-cols-2 md:px-16 md:py-14">
                <div className="order-2 text-center md:order-1 md:text-left">
                  <span className="mb-4 inline-block rounded-full bg-[#ead9ca] px-4 py-2 text-sm font-semibold text-[#783528]">
                    Featured Book {index + 1}
                  </span>

                  <h2 className="mb-2 text-3xl font-bold text-[#613126] md:text-4xl lg:text-5xl">
                    {book.title}
                  </h2>

                  <p className="mb-4 font-medium text-[#896b5e]">
                    By {book.author}
                  </p>

                  <p className="mx-auto mb-7 max-w-lg leading-7 text-[#795b4f] md:mx-0">
                    {book.description}
                  </p>

                  <Link
                    href="/books"
                    className="inline-block rounded-lg bg-[#783528] px-7 py-3 font-semibold text-white transition hover:bg-[#613126]"
                  >
                    Browse Books
                  </Link>
                </div>

                <div className="order-1 flex justify-center md:order-2">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={224}
                    height={320}
                    className="h-64 w-44 rounded-lg object-cover shadow-xl transition duration-500 hover:-translate-y-2 hover:scale-105 md:h-80 md:w-56"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Banner;
