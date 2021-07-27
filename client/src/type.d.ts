export interface IExpense {
  title: string;
  amount: number;
  currency: "EUR" | "USD";
  date: Date;
  paidBy: string;
  forWhom: Array<string>;
}

export interface IUser {
  name: string;
}

export interface IRootState {
  expenses: Array<IExpense>;
  users: Array<IUser>;
}
