"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  BookOpen,
  BookPlus,
  BookHeart,
  RotateCcw,
  LibraryBig,
  UserRound,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Explore Books",
    description:
      "Discover a world of stories. Explore our collection and find the perfect book for your next adventure.",
    icon: LibraryBig,
    action: "Explore All Books",
    href: "/books",
  },
  {
    title: "Borrow a Book",
    description:
      "Found something interesting? Choose your favorite book and borrow it with just a few clicks.",
    icon: BookPlus,
    action: "Find a Book",
    href: "/books",
  },
  {
    title: "Enjoy Reading",
    description:
      "Get comfortable, open your book, and let your imagination travel somewhere new.",
    icon: BookHeart,
    action: "My Borrowed Books",
    href: "/my-borrows",
  },
  {
    title: "Return a Book",
    description:
      "Finished your adventure? Return your book so another reader can enjoy the story.",
    icon: RotateCcw,
    action: "Manage My Borrows",
    href: "/my-borrows",
  },
];

const bookPositions = [
  { left: "18%", top: "53%" },
  { left: "39%", top: "23%" },
  { left: "76%", top: "43%" },
  { left: "18%", top: "53%" },
];

const HowBorrowingWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = steps[activeStep].icon;

  return (
    <section className="overflow-hidden bg-[#fffaf2] py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-7 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#a56c48]">
            Your Reading Journey
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#613126] md:text-5xl">
            How Borrowing Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#896b5e] md:text-base">
            Every great story starts somewhere. Follow your book&apos;s little
            journey from our library to your hands and back again.
          </p>
        </motion.div>

        {/* Animated Library Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          id="borrowing-scene"
          className="relative mx-auto mb-7 h-[230px] max-w-4xl overflow-hidden rounded-3xl border border-[#ead9ca] bg-[#f5e9dc] sm:h-[260px] md:h-[280px]"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-[40%] top-8 text-[#b77b50]"
          >
            <Sparkles size={22} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-[15%] top-12 text-[#b77b50]"
          >
            <Sparkles size={17} />
          </motion.div>

          {/* Library Shelf */}
          <div className="absolute bottom-7 left-3 flex h-28 w-24 flex-col items-center justify-end sm:left-10 sm:h-32 sm:w-36">
            <LibraryBig
              size={55}
              strokeWidth={1.4}
              className="mb-3 text-[#783528]"
            />

            <div className="flex h-12 w-full items-end justify-center gap-1 border-b-[8px] border-[#783528] bg-[#c08c63] px-2">
              <div className="h-9 w-4 rounded-t-sm bg-[#783528]" />
              <div className="h-11 w-5 rounded-t-sm bg-[#a75b3c]" />
              <div className="h-8 w-4 rounded-t-sm bg-[#d2a06f]" />
              <div className="h-10 w-5 rounded-t-sm bg-[#613126]" />
            </div>

            <span className="mt-2 text-xs font-semibold text-[#783528]">
              Library
            </span>
          </div>

          {/* Reader */}
          <div className="absolute bottom-7 right-3 flex h-28 w-24 flex-col items-center justify-end sm:right-10 sm:h-32 sm:w-36">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#e3bd99] text-[#783528] sm:h-20 sm:w-20">
              <UserRound size={48} strokeWidth={1.4} />
            </div>

            <div className="flex h-12 w-full items-center justify-center rounded-t-2xl bg-[#9a6340] text-[#fffaf2]">
              <BookOpen size={30} />
            </div>

            <span className="mt-2 text-xs font-semibold text-[#783528]">
              Reader
            </span>
          </div>

          {/* Connecting curved path */}
          <svg
            viewBox="0 0 800 220"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M 100 165 C 220 10, 540 10, 700 165"
              fill="none"
              stroke="#c08c63"
              strokeWidth="3"
              strokeDasharray="9 9"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </svg>

          {/* Moving Illustrated Book */}
          <motion.div
            animate={{
              left: bookPositions[activeStep].left,
              top: bookPositions[activeStep].top,
              rotate: activeStep === 1 ? -12 : activeStep === 2 ? 8 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 55,
              damping: 18,
              mass: 0.8,
            }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ perspective: 800 }}
          >
            {/* Floating Book */}
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotateZ: [-2, 2, -2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-16 w-12 sm:h-20 sm:w-16"
            >
              {/* Book Cover */}
              <div className="absolute inset-0 rounded-md border-l-[5px] border-[#4a2f22] bg-gradient-to-r from-[#783528] via-[#9a6340] to-[#6b4226] shadow-xl" />

              {/* Pages */}
              <div className="absolute right-1 top-1 bottom-1 w-[75%] rounded-r-sm border-y border-r border-[#d8bda5] bg-[#fff3df]">
                {/* Page lines */}
                <div className="absolute left-1 right-1 top-3 space-y-1">
                  <div className="h-[2px] rounded bg-[#d8bda5]" />
                  <div className="h-[2px] rounded bg-[#d8bda5]" />
                  <div className="h-[2px] w-2/3 rounded bg-[#d8bda5]" />
                </div>
              </div>

              {/* Animated Turning Page */}
              <motion.div
                animate={{ rotateY: [0, -155, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="absolute right-1 top-1 bottom-1 w-[75%] origin-left rounded-r-sm border border-[#d8bda5] bg-[#fffaf2]"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* Book Spine */}
              <div className="absolute left-1 top-1 bottom-1 w-[5px] rounded-l-sm bg-[#4a2f22]" />
            </motion.div>
          </motion.div>

          {/* Stage label */}
          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-[#fffaf2] px-4 py-2 text-xs font-bold text-[#783528] shadow-sm sm:top-8 sm:text-sm">
            {steps[activeStep].title}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline background */}
          <div className="absolute left-[12.5%] right-[12.5%] top-7 h-1 rounded-full bg-[#ead9ca]" />

          {/* Animated progress */}
          <motion.div
            className="absolute left-[12.5%] top-7 h-1 rounded-full bg-[#9a6340]"
            initial={false}
            animate={{
              width: `${(activeStep / 3) * 75}%`,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Moving timeline book */}
          <motion.div
            initial={false}
            animate={{
              left: `${12.5 + (activeStep / 3) * 75}%`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
            className="absolute top-7 z-10 -mt-4 -ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#783528] text-white shadow-lg"
          >
            <BookOpen size={17} />
          </motion.div>

          {/* Timeline Steps */}
          <div className="relative grid grid-cols-4 gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={step.title}
                  onClick={() => {
                    setActiveStep(index);

                    document.getElementById("borrowing-scene")?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="group flex flex-col items-center pt-2 text-center"
                >
                  <motion.div
                    animate={
                      index === activeStep + 1
                        ? {
                            scale: [1, 1.12, 1],
                            boxShadow: [
                              "0 0 0px rgba(120, 53, 40, 0)",
                              "0 0 18px rgba(120, 53, 40, 0.45)",
                              "0 0 0px rgba(120, 53, 40, 0)",
                            ],
                          }
                        : {
                            scale: 1,
                            boxShadow: "0 0 0px rgba(120, 53, 40, 0)",
                          }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: index === activeStep + 1 ? Infinity : 0,
                    }}
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                      isActive
                        ? "border-[#783528] bg-[#783528] text-white"
                        : "border-[#d8bda5] bg-[#fffaf2] text-[#896b5e]"
                    }`}
                  >
                    <Icon size={21} />
                  </motion.div>

                  <span
                    className={`text-xs font-bold sm:text-sm ${
                      isActive ? "text-[#783528]" : "text-[#896b5e]"
                    }`}
                  >
                    {step.title}
                  </span>

                  <span className="mt-1 text-[10px] text-[#a58b7e] sm:text-xs">
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Description */}

        {/* Active Step Description */}
        <div className="mx-auto mt-5 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 rounded-2xl border border-[#ead9ca] bg-white/60 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              {/* Step Information */}
              <div className="flex flex-1 items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f1e3d4] text-[#783528]">
                  <ActiveIcon size={23} />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#a56c48]">
                    Step 0{activeStep + 1}
                  </span>

                  <h3 className="text-lg font-bold text-[#613126]">
                    {steps[activeStep].title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#896b5e]">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={steps[activeStep].href}
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#783528] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4a2f22] sm:self-center"
              >
                {steps[activeStep].action}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HowBorrowingWorks;
