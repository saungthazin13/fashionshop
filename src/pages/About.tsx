import aboutasImage from "@/assets/images/about us.jpg";
import person from "@/assets/images/person.png";

const About = () => {
  return (
    <div className="">
      {/* About Us Section */}
      <section className="bg-white px-6 py-20 md:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src={aboutasImage}
              alt="About Us"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600">
              Founded in 2020, our brand is dedicated to redefining fashion with
              elegance, comfort, and sustainability. We believe that style is a
              reflection of individuality, and we craft each piece with passion
              and precision.
            </p>
            <button className="mt-6 rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-gray-100 px-6 py-20 text-center md:px-20">
        <h2 className="text-4xl font-bold text-gray-900">Meet Our Designers</h2>
        <p className="mt-2 text-gray-600">
          The creative minds behind our unique fashion pieces.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              name: "Sophia Lee",
              role: "Head Designer",
              img: { person },
            },
            {
              name: "David Kim",
              role: "Fashion Stylist",
              img: { person },
            },
            {
              name: "Emily Carter",
              role: "Creative Director",
              img: { person },
            },
          ].map((team, index) => (
            <div
              key={index}
              className="mb-8 mt-8 flex flex-col items-center rounded-xl bg-white p-6 shadow-lg"
            >
              <img
                src={person}
                alt={team.name}
                className="h-24 w-24 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-xl font-semibold">{team.name}</h3>
              <p className="text-gray-500">{team.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
