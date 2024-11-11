import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-70 shadow-md z-50 p-4 sm:px-10 lg:px-28">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        
        <div className="logo">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-500">
            Travel<span className="text-blue-500 font-normal">Spot</span>
          </h2>
        </div>

        
        <nav className="flex gap-2 px-6 lg:flex lg:items-center lg:gap-6">
          <Link href="/">
            <div className="text-sm sm:text-lg font-medium hover:text-blue-500 transition duration-300">Home</div>
          </Link>
          <Link href="/about-us">
            <div className="text-sm sm:text-lg font-medium hover:text-blue-500 transition duration-300">About</div>
          </Link>
          <Link href="/destinations">
            <div className="text-sm sm:text-lg font-medium hover:text-blue-500 transition duration-300">Destinations</div>
          </Link>
          <Link href="/contact">
            <div className="text-sm sm:text-lg font-medium hover:text-blue-500 transition duration-300">Contact</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
