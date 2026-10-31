import Banner from "@/components/homePage/Banner";
import ReaderReviewsPage from "@/components/homePage/ReaderReviews";
import TopCategories from "@/components/homePage/TopCategories";


export default function Home() {
  return (
    <div>
      <Banner />
      <TopCategories />
      <ReaderReviewsPage />
    </div>
  );
}
