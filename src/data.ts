export interface Expense {
  title: string;
  price: number;
  currency: "EUR" | "USD";
  date: Date;
  paidBy: string;
}

export const expenses: Array<Expense> = [
  {
    title: "Hotel",
    price: 85.0,
    currency: "EUR",
    date: new Date(),
    paidBy: "Alex",
  },
  {
    title: "Picnic",
    price: 13.0,
    currency: "EUR",
    date: new Date(),
    paidBy: "Brian",
  },
  {
    title: "Car",
    price: 64.5,
    currency: "EUR",
    date: new Date(),
    paidBy: "Julia",
  },
];
