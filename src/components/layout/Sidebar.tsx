const Sidebar = () => {
  return (
    <div className="w-60 bg-[#0a1120] border-r border-[#1e2a3a] flex flex-col flex-shrink-0 min-h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-[#1e2a3a]">
        <h2 className="text-xl font-bold text-yellow-400">CFO.ai</h2>
        <p className="text-[#8a9bb0] text-xs mt-0.5">Financial Co-Pilot</p>
      </div>

      {/* Nav */}
      <ul className="mt-4 px-3 space-y-1 flex-1">
        {[
          { label: "Dashboard", active: true },
          { label: "AI Advisor", active: false },
          { label: "Revenue", active: false },
          { label: "Expenses", active: false },
          { label: "Customers", active: false },
          { label: "Invoices", active: false },
          { label: "Reports", active: false },
          { label: "Settings", active: false },
        ].map((item) => (
          <li
            key={item.label}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-150 ${
              item.active
                ? "bg-yellow-400/10 text-yellow-400"
                : "text-[#8a9bb0] hover:bg-[#1e2a3a] hover:text-white"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;