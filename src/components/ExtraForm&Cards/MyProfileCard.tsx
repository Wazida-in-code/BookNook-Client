"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const MyProfileCard = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#4A2F22]">
          My Profile
        </h1>

        <div className="rounded-2xl border border-[#E6D8C9] bg-[#F8F5F0] p-8 shadow-md sm:p-10">
          <div className="mb-8 flex flex-col items-center">
            <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-[#E6D8C9]">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "Profile"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#6B4226] text-4xl font-bold text-white">
                  {user?.name?.charAt(0)}
                </div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-[#4A2F22]">
              {user?.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              BookNook Member
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl bg-[#F8F5F0] p-4">
              <p className="mb-1 text-sm text-gray-500">Full Name</p>
              <p className="font-semibold text-[#4A2F22]">
                {user?.name}
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5F0] p-4">
              <p className="mb-1 text-sm text-gray-500">Email Address</p>
              <p className="break-all font-semibold text-[#4A2F22]">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyProfileCard;