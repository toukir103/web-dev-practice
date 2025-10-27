// In the name of Allah
import { Bookmark, Eye, Share2, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoriesNews = () => {
  const { id } = useParams(); // URL থেকে id নেওয়া
  const [newsList, setNewsList] = useState([]);

  // 📰 Fetch news from JSON file
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        let filteredNews = [];

        if (id === "0") {
          filteredNews = data;
        } else if (id === "1") {
          filteredNews = data.filter(
            (news) => news.others?.is_today_pick === true
          );
        } else {
          filteredNews = data.filter((news) => news.category_id == id);
        }

        setNewsList(filteredNews);
        console.log("Filtered News:", filteredNews);
      })
      .catch((err) => console.error("Error loading news:", err));
  }, [id]);

  return (
    <div className="p-4 bg-base-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Category News: <span className="text-secondary">{id}</span>
      </h2>

      {newsList.length > 0 ? (
        <div className="space-y-4">
          {newsList.map((news) => {
            const { author, title, image_url, details, total_view, rating } =
              news;

            return (
              <div
                key={news.id}
                className="border rounded-lg p-4 mb-5 bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* 🧑‍💼 Author Section */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={author?.img}
                      alt={author?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {author?.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {new Date(author?.published_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Icons */}
                  <div className="flex items-center gap-2 text-gray-500">
                    <Bookmark
                      size={18}
                      className="cursor-pointer hover:text-gray-700"
                    />
                    <Share2
                      size={18}
                      className="cursor-pointer hover:text-gray-700"
                    />
                  </div>
                </div>

                {/* 📰 Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {title}
                </h3>

                {/* 📸 Image */}
                <img
                  src={image_url}
                  alt={title}
                  className="w-full h-60 object-cover rounded-md mb-3"
                />

                {/* 📖 Details */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {details.slice(0, 200)}...
                  <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                    Read More
                  </span>
                </p>

                {/* ⭐ Rating & Views */}
                <div className="flex justify-between items-center border-t pt-3">
                  <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < rating.number ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                    <span className="text-gray-700 font-medium ml-1">
                      {rating.number.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-600">
                    <Eye size={16} />
                    <span>{total_view}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No news found for this category.</p>
      )}
    </div>
  );
};

export default CategoriesNews;
