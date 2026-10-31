"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Star, Quote, ThumbsUp } from "lucide-react";

import { cn } from "cn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "October 24, 2026",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    book: "The Silent Patient",
    review:
      "An absolutely captivating read! I couldn't put this book down. Every chapter kept me guessing, and the ending was something I never expected.",
  },
  {
    id: 2,
    name: "Emily Carter",
    date: "October 20, 2026",
    avatar: "https://i.pravatar.cc/100?img=44",
    rating: 5,
    book: "Atomic Habits",
    review:
      "This book completely changed the way I think about personal growth. Simple, practical advice that I can actually apply to my everyday life.",
  },
  {
    id: 3,
    name: "Michael Brown",
    date: "October 17, 2026",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 4,
    book: "The Midnight Library",
    review:
      "A beautiful and thought-provoking story. It reminds us that every little decision matters. Definitely a book worth reading.",
  },
  {
    id: 4,
    name: "Olivia Wilson",
    date: "October 12, 2026",
    avatar: "https://i.pravatar.cc/100?img=49",
    rating: 5,
    book: "It Ends With Us",
    review:
      "Emotional, powerful, and beautifully written. I found myself connecting deeply with the characters. A memorable reading experience.",
  },
  {
    id: 5,
    name: "Daniel Smith",
    date: "October 08, 2026",
    avatar: "https://i.pravatar.cc/100?img=13",
    rating: 4,
    book: "The Alchemist",
    review:
      "A wonderful reminder to follow your dreams and trust the journey. The writing is simple but the message stays with you.",
  },
];

export default function ReaderReviewsPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <main className="bg-white px-5 py-12 text-[#49352A] md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Reviews Heading */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">What Readers Say</h2>
            <p className="mt-1 text-sm text-[#927D6C]">
              Real stories from our reading community.
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="basis-full pl-4 md:basis-1/2"
              >
                <article className="flex h-full flex-col rounded-2xl border border-[#EADFD3] bg-[#FAF7F2] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold">{review.name}</h3>
                        <p className="text-xs text-[#A18E7E]">{review.date}</p>
                      </div>
                    </div>

                    <Quote
                      size={22}
                      className="shrink-0 text-[#E8D8C6]"
                      fill="currentColor"
                    />
                  </div>

                  <div className="mb-2 flex gap-0.5 text-[#D69B45]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  <p className="mb-1 text-xs font-semibold text-[#936C50]">
                    {review.book}
                  </p>

                  <p className="line-clamp-3 text-sm leading-6 text-[#806E60]">
                    {review.review}
                  </p>

                  <div className="mt-auto flex items-center gap-1.5 border-t border-[#F1EAE2] pt-3 text-xs text-[#A18E7E]">
                    <ThumbsUp size={13} />
                    Helpful review
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <CarouselPrevious className="static size-9 rounded-full border-[#EADFD3] bg-white text-[#936C50] shadow-sm hover:bg-[#F6EFE7] hover:text-[#7A5540]" />

            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === current}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 bg-[#783528]"
                      : "w-2 bg-[#D8C7B7] hover:bg-[#B9A08C]"
                  )}
                />
              ))}
            </div>

            <CarouselNext className="static size-9 rounded-full border-[#EADFD3] bg-white text-[#936C50] shadow-sm hover:bg-[#F6EFE7] hover:text-[#7A5540]" />
          </div>
        </Carousel>
      </div>
    </main>
  );
}
