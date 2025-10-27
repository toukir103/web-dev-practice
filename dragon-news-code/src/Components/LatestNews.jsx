// In the name of Allah
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-base-200 to-base-300 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Badge */}
      <span className="bg-secondary text-base-100 px-4 py-2 rounded-full font-semibold text-sm tracking-wide shadow-sm">
         Latest
      </span>

      {/* News Text */}
      <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      className="flex gap-10"
    >
      <p className="text-base text-gray-800 leading-relaxed text-center sm:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident excepturi maxime hic quis.
      </p>
      <p className="text-base text-gray-800 leading-relaxed text-center sm:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident excepturi maxime hic quis.
      </p>
      <p className="text-base text-gray-800 leading-relaxed text-center sm:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident excepturi maxime hic quis.
      </p>
    </Marquee>
    
     
    </div>
  );
};

export default LatestNews;
