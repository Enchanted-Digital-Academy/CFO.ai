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
    <div>
      <h1>Settings</h1>

      <section>
        <h2>User Profile</h2>
        <p>Profile management will appear here.</p>
      </section>

      <section>
        <h2>Business Information</h2>
        <p>Business Name: {business.businessName}</p>
        <p>Industry: {business.industry}</p>
        <p>Country: {business.country}</p>
        <p>Currency: {business.currency}</p>
        <p>Employees: {business.employees}</p>
        <p>Founded: {business.founded}</p>
      </section>


      <section> 
        <h2>Theme Preferences</h2>
        <p>Light/Dark mode toggle will appear here.</p>
      </section>

      <section>
        <h2>Security</h2>
        <p>Password and security settings will appear here.</p>
      </section>

      <section>
        <h2>Subscription</h2>
        <p>Subscription and billing details will appear here.</p>
      </section>

      <section>
        <h2>Help & Support</h2>
        <p>Help and support resources will appear here.</p>
      </section>
    </div>
  );
}

export default Settings;