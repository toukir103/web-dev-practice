// In the name of Allah

import Catagores from "../Catagores";

const LeftAside = () => {
 

  return (
    <div className="p-4 border-r w-full md:w-[280px]">
      <Catagores/>

      {/* <div className="mt-5 space-y-4">
        {sampleNews.map((news, i) => (
          <div key={i}>
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[100px] object-cover rounded"
            />
            <h3 className="text-sm font-semibold mt-2">{news.title}</h3>
            <p className="text-xs text-gray-500">
              {news.category} • {news.date}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default LeftAside;
