const Navbar = () => {
  return (
    <div className="h-16 bg-[#0a1120] border-b border-[#1e2a3a] flex items-center justify-between px-8 text-white flex-shrink-0">
      <h1 className="text-base font-semibold text-[#8a9bb0]">
        CFO.ai Dashboard
      </h1>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
          <span className="text-yellow-400 text-sm font-bold">F</span>
        </div>
        <p className="text-sm text-[#8a9bb0]">Folarin Obajenihi</p>
      </div>
    </div>
  );
};

export default Navbar;