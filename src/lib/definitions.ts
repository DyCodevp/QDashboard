export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};
export type LatestInvoice = {
  amount: number;
  email: string;
  name: string;
  image_url: string | undefined;
  id: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};
export type InvoicesTable = {
  id: string;
  amount: number;
  date: string;
  status: string;
  name: string;
  email: string;
  image_url: string | undefined;
};

export type CustomerField = {
  id: string;
  name: string;
};
