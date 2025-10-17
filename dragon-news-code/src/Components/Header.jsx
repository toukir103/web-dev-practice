// In the name of Allah
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-3 ">
      <img src={logo} alt="Website Logo"  />
      <h1 className="text-2xl font-semibold text-gray-800">Welcome to My Website</h1>
      <p className="text-gray-600 text-sm">Sunday, November 27, 2025</p>
    </header>
  );
};

export default Header;
