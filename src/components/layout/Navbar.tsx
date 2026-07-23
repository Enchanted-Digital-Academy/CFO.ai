type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <div className="h-16 bg-zinc-800 flex items-center justify-between px-6 text-white">
      <div className="flex items-center gap-4">
        {/* Hamburger menu - only visible on mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <h1 className="text-xl font-bold">
          CFO.ai Dashboard
        </h1>
      </div>

      <p>Welcome Back!</p>
    </div>
  );
};

export default Navbar;