import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, BookOpen } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-[#ead9ca] bg-[#fffaf2] text-[#613126]">
      <div className="mx-auto max-w-7xl px-6 pb-5 pt-7">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/BookNook-Logo.png"
                alt="BookNook Logo"
                width={200}
                height={200}
                className="h-14 w-36 object-contain"
              />
            </Link>

            <p className="mt-1 max-w-xs text-xs leading-6 text-[#896b5e]">
              BookNook is your cozy online library where you can discover books,
              add your favorites, borrow books for a few days, and easily manage
              your reading journey.
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#783528]">
              <BookOpen size={15} />
              <span>A little corner for every book lover.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-base font-bold text-[#783528]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-xs text-[#896b5e]">
              <li>
                <Link href="/" className="hover:text-[#a33e29]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-[#a33e29]">
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/add-book" className="hover:text-[#a33e29]">
                  Add Book
                </Link>
              </li>
              <li>
                <Link href="/my-books" className="hover:text-[#a33e29]">
                  My Books
                </Link>
              </li>
              <li>
                <Link href="/my-borrows" className="hover:text-[#a33e29]">
                  My Borrows
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-3 text-base font-bold text-[#783528]">
              Contact Us
            </h3>

            <ul className="space-y-3 text-xs text-[#896b5e]">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-[#a33e29]" />
                <a
                  href="mailto:hello@booknook.com"
                  className="hover:text-[#a33e29]"
                >
                  hello@booknook.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-[#a33e29]" />
                <a href="tel:+8801234567890" className="hover:text-[#a33e29]">
                  +880 1234-567890
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-[#a33e29]" />
                <span>Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-3 text-base font-bold text-[#783528]">
              Follow Us
            </h3>

            <p className="mb-3 text-xs leading-5 text-[#896b5e]">
              Stay connected with BookNook and never miss a new chapter!
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9ca] transition hover:bg-[#783528] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9ca] transition hover:bg-[#783528] hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9ca] transition hover:bg-[#783528] hover:text-white"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead9ca] transition hover:bg-[#783528] hover:text-white"
              >
              <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 border-t border-[#ead9ca] pt-4 text-center">
          <p className="text-xs text-[#896b5e]">
            © 2026 BookNook. All rights reserved.
          </p>
          <p className="mt-1 text-[11px] text-[#a58b7e]">
            Made with ♥ for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
