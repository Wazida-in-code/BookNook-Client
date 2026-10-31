import {
  Search,
  FlaskConical,
  WandSparkles,
  Ghost,
  Brain,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    name: "Mystery & Thriller",
    description: "Uncover secrets and solve mysteries.",
    icon: Search,
  },
  {
    name: "Science Fiction",
    description: "Discover futuristic worlds and technology.",
    icon: FlaskConical,
  },
  {
    name: "Fantasy",
    description: "Escape into magical worlds and adventures.",
    icon: WandSparkles,
  },
  {
    name: "Horror",
    description: "Experience thrilling and chilling stories.",
    icon: Ghost,
  },
  {
    name: "Self-Help",
    description: "Learn, grow, and improve yourself.",
    icon: Brain,
  },
  {
    name: "Biography & Historical",
    description: "Explore inspiring lives and history.",
    icon: BookOpen,
  },
];

const TopCategories = () => {
  return (
    <section className="bg-[#FAF7F2] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#A47B55]">
            Browse Collections
          </p>

          <h2 className="text-3xl font-bold text-[#4A2E20] md:text-4xl">
            Explore Top Categories
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#887568]">
            Discover your next favorite book from our carefully
            selected collections.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group rounded-2xl border border-[#E9DED2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#B68A65] hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4EADF] text-[#795238] transition-colors group-hover:bg-[#795238] group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-[#4A2E20]">
                  {category.name}
                </h3>

                <p className="text-sm leading-6 text-[#887568]">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TopCategories;
