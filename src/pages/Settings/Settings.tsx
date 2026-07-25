import businessData from '../../../business.json';

type Business = {
  businessName: string;
  industry: string;
  country: string;
  currency: string;
  employees: number;
  businessHealth: number;
  monthlyRevenue: number;
  monthlyProfit: number;
  cashAvailable: number;
  founded: string;
};

function Settings() {
  const business = businessData as Business;

  return (
    <div className="p-6 w-full max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Settings</h1>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">User Profile</h2>
        <p className="text-neutral-400">Profile management will appear here.</p>
      </section>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Business Information</h2>
        <p>Business Name: {business.businessName}</p>
        <p>Industry: {business.industry}</p>
        <p>Country: {business.country}</p>
        <p>Currency: {business.currency}</p>
        <p>Employees: {business.employees}</p>
        <p>Founded: {business.founded}</p>
      </section>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Theme Preferences</h2>
        <p className="text-neutral-400">Light/Dark mode toggle will appear here.</p>
      </section>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Security</h2>
        <p className="text-neutral-400">Password and security settings will appear here.</p>
      </section>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Subscription</h2>
        <p className="text-neutral-400">Subscription and billing details will appear here.</p>
      </section>

      <section className="bg-neutral-800 border border-neutral-700 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Help & Support</h2>
        <p className="text-neutral-400">Help and support resources will appear here.</p>
      </section>
    </div>
  );
}

export default Settings;