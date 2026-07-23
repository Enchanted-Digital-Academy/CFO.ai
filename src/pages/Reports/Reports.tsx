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

  const paidTotal = invoices
    .filter((inv) => inv.status === 'Paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const pendingTotal = invoices
    .filter((inv) => inv.status === 'Pending')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const overdueTotal = invoices
    .filter((inv) => inv.status === 'Overdue')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const profitMargin = ((business.monthlyProfit / business.monthlyRevenue) * 100).toFixed(1);

  return (
    <div>
      <h1>Reports</h1>

      <section>
        <h2>Revenue Report</h2>
        <p>Monthly Revenue: {formatCurrency(business.monthlyRevenue, business.currency)}</p>
        <p>Paid Invoices: {formatCurrency(paidTotal, business.currency)}</p>
        <p>Pending Invoices: {formatCurrency(pendingTotal, business.currency)}</p>
        <p>Overdue Invoices: {formatCurrency(overdueTotal, business.currency)}</p>
      </section>

      <section>
        <h2>Expense Report</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.category}>
              {expense.category}: {formatCurrency(expense.amount, business.currency)}
            </li>
          ))}
        </ul>
        <p>Total Expenses: {formatCurrency(totalExpenses, business.currency)}</p>
      </section>

      <section>
        <h2>Cash Flow Report</h2>
        <p>Cash Available: {formatCurrency(business.cashAvailable, business.currency)}</p>
        <p>Money In (Paid Invoices): {formatCurrency(paidTotal, business.currency)}</p>
        <p>Money Out (Expenses): {formatCurrency(totalExpenses, business.currency)}</p>
      </section>

      <section>
        <h2>Profit Report</h2>
        <p>Monthly Profit: {formatCurrency(business.monthlyProfit, business.currency)}</p>
        <p>Profit Margin: {profitMargin}%</p>
      </section>

      <section>
        <h2>Tax Summary</h2>
        <p>No Tax summary data available in the current mock dataset.</p>
      </section>
    </div>
  );
}

export default Reports;
