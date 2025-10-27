// In the name of Allah
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <div className="p-4 bg-base-100 rounded-lg">
      <h2 className="font-semibold mb-3 text-gray-800">All Category</h2>

      <div className="space-y-2">
        {categories.map((cat, i) => (
          <NavLink
            to={`/category/${cat.id}`}
            key={i}
            className={({ isActive }) =>
              `block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
