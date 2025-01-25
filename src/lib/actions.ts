import { getPool } from "./data";

export const createInvoice = async function(
  data: { customerId: string; amount: number; status: string },
) {
  const amountInCents = Math.round(data.amount * 100)
  const date = new Date().toISOString().split('T')[0]
  const pool = await getPool()
  try {
    await pool.query(`INSERT INTO invoices (customer_id,amount,status,date) VALUES ($1,$2,$3,$4)`, [
      data.customerId,
      amountInCents,
      data.status,
      date
    ])
      return {
        customersId: data.customerId,
        amount: amountInCents,
        status: data.status,
        date: date
      }
  } catch (E) {
      return {error:"Error when creating invoice"}
  } finally{
      await pool.end()
    }

};
