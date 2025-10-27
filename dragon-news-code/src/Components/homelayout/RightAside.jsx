// In the name of Allah

const RightAside = () => {
  const qZoneItems = [
    {
      name: "Swimming",
      img: "https://i.ibb.co/7RCQ2sK/swimming.jpg",
    },
    {
      name: "Class",
      img: "https://i.ibb.co/B6kkmH2/class.jpg",
    },
    {
      name: "Play Ground",
      img: "https://i.ibb.co/1QwrZJY/playground.jpg",
    },
  ];

  return (
    <div className="p-4 w-full md:w-[280px] border-l">
      <div className="mb-6">
        <h3 className="font-bold mb-3">Login With</h3>
        <button className="border w-full py-2 mb-2 rounded hover:bg-gray-100">
          Login with Google
        </button>
        <button className="border w-full py-2 rounded hover:bg-gray-100">
          Login with Github
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-3">Find Us On</h3>
        <ul className="space-y-2">
          <li className="border p-2 rounded hover:bg-gray-100">Facebook</li>
          <li className="border p-2 rounded hover:bg-gray-100">Twitter</li>
          <li className="border p-2 rounded hover:bg-gray-100">Instagram</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-3">Q-Zone</h3>
        {qZoneItems.map((item, index) => (
          <div
            key={index}
            className="border rounded mb-3 overflow-hidden shadow-sm"
          >
            <img src={item.img} alt={item.name} className="w-full" />
            <p className="text-center py-2 font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightAside;
