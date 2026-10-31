"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Books", href: "/books" },
  { name: "Add Book", href: "/add-book" },
  { name: "My Books", href: "/my-books" },
  { name: "My Borrows", href: "/my-borrows" },
];

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ead9ca] bg-[#fffaf2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/BookNook-Logo.png"
            alt="BookNook Logo"
            width={200}
            height={200}
            className="h-16 w-40 object-cover"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#613126] transition-colors duration-200 hover:text-[#a33e29]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Popover>
            <PopoverTrigger
              render={
                <button>
                  <Avatar>
                    <AvatarImage
                      referrerPolicy="no-referrer"
                      src={user?.image as string}
                    />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </button>
              }
            ></PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle className="text-xl font-bold my-2">
                  {user?.name}
                </PopoverTitle>
                <Button className="my-2">My Profile</Button>
                <Button variant={"destructive"}>Logout</Button>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <Button
            variant="outline"
            className="border-[#783528] bg-transparent px-5 text-[#783528] hover:bg-[#783528] hover:text-white"
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>

          <Button className="bg-[#783528] px-5 text-white hover:bg-[#5c251d]">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#783528] text-[#783528]"
                />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-[#ead9ca] bg-[#fffaf2]"
            >
              <div className="mt-8 flex flex-col gap-6">
                {/* Mobile Logo */}
                <Link href="/" className="mb-2">
                  <Image
                    src="/BookNook-Logo.png"
                    alt="BookNook Logo"
                    width={200}
                    height={200}
                    className="h-16 w-40 object-cover"
                  />
                </Link>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="border-b border-[#ead9ca] pb-3 text-base font-medium text-[#613126] transition-colors hover:text-[#a33e29]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="mt-3 flex flex-col gap-3">
                  <Popover>
                    <PopoverTrigger
                      render={
                        <button>
                          <Avatar>
                            <AvatarImage
                              referrerPolicy="no-referrer"
                              src={user?.image as string}
                            />
                            <AvatarFallback>
                              {user?.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </button>
                      }
                    ></PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader>
                        <PopoverTitle className="text-xl font-bold my-2">
                          {user?.name}
                        </PopoverTitle>
                        <Button className="my-2">My Profile</Button>
                        <Button variant={"destructive"}>Logout</Button>
                      </PopoverHeader>
                    </PopoverContent>
                  </Popover>
                  <Button
                    variant="outline"
                    className="w-full border-[#783528] text-[#783528] hover:bg-[#783528] hover:text-white"
                  >
                    <Link href="/sign-up">Sign Up</Link>
                  </Button>

                  <Button className="w-full bg-[#783528] text-white hover:bg-[#5c251d]">
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
