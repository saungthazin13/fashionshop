const About = () => {
  return (
    <div className="">
      {/* About Us Section */}
      <section className="bg-white px-6 py-20 md:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src="https://source.unsplash.com/600x600/?fashion,model"
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
    </div>
  );
};

export default About;
