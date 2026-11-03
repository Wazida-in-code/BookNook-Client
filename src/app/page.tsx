import Banner from "@/components/homePage/Banner";
import ReaderReviewsPage from "@/components/homePage/ReaderReviews";
import SomeBooks from "@/components/homePage/SomeBooks";
import TopCategories from "@/components/homePage/TopCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookNook | Home",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <SomeBooks />
      <TopCategories />
      <ReaderReviewsPage />
    </div>
  );
}
