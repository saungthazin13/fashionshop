import categortWomen from "@/assets/images/lady.jpg";
import categortMen from "@/assets/images/men.jpg";
import categortLady from "@/assets/images/lady.jpg";
import categortBaby from "@/assets/images/babys.jpg";

const Product = () => {
  const categories = [
    { name: "Women", Image: categortWomen },
    { name: "Men", Image: categortMen },
    { name: "Lady", Image: categortLady },
    { name: "Baby", Image: categortBaby },
  ];
  return (
    <div className="">
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
    </div>
  );
};

export default Product;
