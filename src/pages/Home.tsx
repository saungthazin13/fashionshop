import categortWomen from "@/assets/images/lady.jpg";
import categortMen from "@/assets/images/men.jpg";
import categortLady from "@/assets/images/lady.jpg";
import categortBaby from "@/assets/images/babys.jpg";
import categortP1 from "@/assets/images/p1.jpg";
import categortP2 from "@/assets/images/g2.jpg";
import categortP3 from "@/assets/images/P3.jpg";

const Home = () => {
  const categories = [
    { name: "Women", Image: categortWomen },
    { name: "Men", Image: categortMen },
    { name: "Lady", Image: categortLady },
    { name: "Baby", Image: categortBaby },
  ];

  const brands = [
    { name: "p1", Image: categortP1 },
    { name: "p2", Image: categortP2 },
    { name: "p3", Image: categortP3 },
  ];
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero section */}
      <section className="relative h-[130vh] items-center bg-[url('assets\\images\\banner.jpg')] bg-cover bg-center text-center md:h-[72vh]">
        <div className="">
          <div className="container mx-auto p-6">
            <h2 className="pb-4 pt-20 text-lg font-bold italic text-sky-600 md:text-4xl">
              30% OFF
            </h2>
            <h1 className="pb-4 text-4xl font-bold">Elevate Fashion Style</h1>
            <p className="pt-4 italic text-gray-700">
              Discover the latest trends & exclusive collections.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <button className="mt-4 rounded-lg bg-sky-600 px-6 py-3 text-white hover:bg-black">
            Shop Now
          </button>
        </div>
      </section>

      {/* Best Sellers section */}
      <section className="container m-20 mx-auto px-10">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Shop By Category
        </h2>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={category.Image}
                alt={category.name}
                className="h-auto w-full transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-center text-2xl font-bold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="bg-white px-6 py-20 md:px-20">
        <h2 className="text-center text-4xl font-bold">
          Discover Our New Collection
        </h2>
        <p className="mb-14 mt-6 text-center text-gray-600">
          Handpicked styles for every season.
        </p>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={brand.Image}
                alt={brand.name}
                className="h-auto w-full transition duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="relative bg-center py-20 text-center text-white"
        style={{ backgroundImage: "url('assets/images/new.jpg')" }}
      >
        <h2 className="text-3xl font-bold text-black">Stay Updated</h2>
        <p className="mt-2 text-gray-400">
          Subscribe to get the latest trends & offers.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-72 rounded-l-lg p-3 text-gray-900 focus:outline-none"
          />
          <button className="rounded-r-lg bg-sky-500 px-6 py-3 font-semibold transition hover:bg-sky-600">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
