const Sidebar = () => {
  return (
    <div className="w-64 bg-zinc-900 text-white p-6">
      <h2 className="text-2xl font-bold text-yellow-400">
        CFO.ai
      </h2>

      <ul className="mt-8 space-y-4">
        <li>Dashboard</li>
        <li>AI Advisor</li>
        <li>Revenue</li>
        <li>Expenses</li>
        <li>Customers</li>
        <li>Invoices</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;