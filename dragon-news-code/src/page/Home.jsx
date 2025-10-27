// In the name of Allah

const Home = () => {
  const posts = [
    {
      title:
        "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
      author: "Awlad Hossain",
      date: "2022-08-21",
      img: "https://i.ibb.co/VSD3FgM/news-main1.jpg",
      rating: 4.9,
      views: 499,
    },
    {
      title:
        "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
      author: "Awlad Hossain",
      date: "2022-08-21",
      img: "https://i.ibb.co/TBgCjMn/news-main2.jpg",
      rating: 4.9,
      views: 499,
    },
  ];

  return (
    <div className="flex-1 p-4">
      <h2 className="font-bold text-lg mb-4">Dragon News Home</h2>

      {posts.map((post, index) => (
        <div key={index} className="border rounded-lg mb-6 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-2 border-b">
            <img
              src="https://i.ibb.co/XkZ0mTX/author.jpg"
              alt={post.author}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <img
              src={post.img}
              alt={post.title}
              className="w-full rounded mb-2"
            />
            <p className="text-sm text-gray-600">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Ukraine, Military, News, Security, U.S.
            </p>
            <p className="text-red-500 mt-1 cursor-pointer hover:underline">
              Read More
            </p>

            <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
              <p>⭐ {post.rating}</p>
              <p>👁️ {post.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
