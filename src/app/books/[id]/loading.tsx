import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-white px-5 py-16 md:px-10 lg:px-16 animate-pulse">

      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="mb-12 flex flex-col items-center gap-4">
          <div className="h-9 w-48 rounded-lg bg-[#EDE3D9]"></div>
          <div className="h-1 w-20 rounded-full bg-[#B77B50]"></div>
          <div className="h-4 w-64 rounded-md bg-[#F2E9E0]"></div>
        </div>

        {/* Book Details Section */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">

          {/* Book Image Skeleton */}
          <div className="flex justify-center rounded-2xl border border-[#E8DDD0] bg-[#F8F3EC] p-8 md:p-10">
            <div className="h-[420px] w-full max-w-[300px] rounded-xl bg-[#EDE3D9]"></div>
          </div>

          {/* Book Information Skeleton */}
          <div className="flex flex-col gap-6">

            {/* Category */}
            <div className="h-7 w-24 rounded-full bg-[#EDE3D9]"></div>

            {/* Title & Author */}
            <div className="space-y-3">
              <div className="h-9 w-full rounded-lg bg-[#EDE3D9]"></div>
              <div className="h-9 w-3/4 rounded-lg bg-[#EDE3D9]"></div>
              <div className="h-4 w-48 rounded-md bg-[#F2E9E0]"></div>
            </div>

            <div className="h-px w-full bg-[#E8DDD0]"></div>

            {/* Description */}
            <div className="space-y-4">
              <div className="h-6 w-40 rounded-md bg-[#EDE3D9]"></div>
              <div className="h-4 w-full rounded-md bg-[#F2E9E0]"></div>
              <div className="h-4 w-full rounded-md bg-[#F2E9E0]"></div>
              <div className="h-4 w-4/5 rounded-md bg-[#F2E9E0]"></div>
            </div>

            {/* Added By Skeleton */}
            <div className="rounded-xl border border-[#E5DDD4] bg-[#F8F8F7] p-5">
              <div className="mb-5 h-5 w-24 rounded-md bg-[#EDE3D9]"></div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#EDE3D9]"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-16 rounded bg-[#EDE3D9]"></div>
                    <div className="h-4 w-24 rounded bg-[#EDE3D9]"></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#EDE3D9]"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-20 rounded bg-[#EDE3D9]"></div>
                    <div className="h-4 w-28 rounded bg-[#EDE3D9]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Borrow Button Skeleton */}
            <div className="h-12 w-full rounded-xl bg-[#EDE3D9]"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;