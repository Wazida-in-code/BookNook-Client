
import { BookOpen } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F5F0] px-4">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EDE2D5]">
        <BookOpen
          size={38}
          className="animate-pulse text-[#6B4226]"
        />
      </div>

      <h2 className="text-3xl font-bold tracking-wide text-[#4A2F22]">
        BookNook
      </h2>

      <p className="mt-2 text-sm text-[#8B735F]">
        Preparing your next favorite read...
      </p>

      <div className="mt-7 h-1.5 w-40 overflow-hidden rounded-full bg-[#E8DED3]">
        <div className="h-full w-1/2 animate-[slide_1.5s_ease-in-out_infinite] rounded-full bg-[#6B4226]" />
      </div>

    </div>
  );
};

export default Loading;
