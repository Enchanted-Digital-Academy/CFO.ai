import expensesData from '../../../expenses.json';
import invoicesData from '../../../invoices.json';
import businessData from '../../../business.json';

type Expense = {
  category: string;
  amount: number;
};

type Invoice = {
  invoiceNo: string;
  customer: string;
  country: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
};

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

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function Reports() {
  const expenses = expensesData as Expense[];
  const invoices = invoicesData as Invoice[];
  const business = businessData as Business;

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const paidTotal = invoices.filter((inv) => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingTotal = invoices.filter((inv) => inv.status === 'Pending').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueTotal = invoices.filter((inv) => inv.status === 'Overdue').reduce((sum, inv) => sum + inv.amount, 0);
  const profitMargin = ((business.monthlyProfit / business.monthlyRevenue) * 100).toFixed(1);

  return (
    <div className="p-6 w-full max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Reports</h1>

      <section className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Revenue Report</h2>
        <p>Monthly Revenue: {formatCurrency(business.monthlyRevenue, business.currency)}</p>
        <p>Paid Invoices: {formatCurrency(paidTotal, business.currency)}</p>
        <p>Pending Invoices: {formatCurrency(pendingTotal, business.currency)}</p>
        <p>Overdue Invoices: {formatCurrency(overdueTotal, business.currency)}</p>
      </section>

      <section className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Expense Report</h2>
        <ul className="space-y-1">
          {expenses.map((expense) => (
            <li key={expense.category}>
              {expense.category}: {formatCurrency(expense.amount, business.currency)}
            </li>
          ))}
        </ul>
        <p className="mt-3 font-semibold">Total Expenses: {formatCurrency(totalExpenses, business.currency)}</p>
      </section>

      <section className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Cash Flow Report</h2>
        <p>Cash Available: {formatCurrency(business.cashAvailable, business.currency)}</p>
        <p>Money In (Paid Invoices): {formatCurrency(paidTotal, business.currency)}</p>
        <p>Money Out (Expenses): {formatCurrency(totalExpenses, business.currency)}</p>
      </section>

      <section className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Profit Report</h2>
        <p>Monthly Profit: {formatCurrency(business.monthlyProfit, business.currency)}</p>
        <p>Profit Margin: {profitMargin}%</p>
      </section>

      <section className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Tax Summary</h2>
        <p className="text-neutral-400">Tax summary data is not available in the current mock dataset.</p>
      </section>
    </div>
  );
}

export default Reports;