import Image from './src/assets/Artboard 1@4x.png'; // update this path accordingly

const HeroSection = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">
            Where we empower you to embrace your unique personality and unleash your full potential
          </h1>
          <p className="text-xl text-gray-700">
            236+ tests taken today, 98% result rated
          </p>
          <button className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition">
            Start Test
          </button>
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-4">
            <span className="bg-gray-200 px-4 py-2 rounded-full">Bold Personality</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">Self-discovery</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">Personal Growth</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={Image} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
