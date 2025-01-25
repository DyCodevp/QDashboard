// src/routes/dashboard/invoices/create/index.tsx

import { component$ } from "@builder.io/qwik";
import { routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { CreateForm } from "~/components/ui/invoices/create-form";
import { createInvoice } from "~/lib/actions";

// Define a Zod schema
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number().positive(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

// Create a new Zod schema for the form
const CreateInvoiceSchema = FormSchema.omit({ id: true, date: true });

export const useCreateInvoice = routeAction$(async (data, { redirect }) => {
  await createInvoice(data);
  throw redirect(302, "/dashboard/invoices");
}, zod$(CreateInvoiceSchema));

export default component$(() => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateForm />
    </main>
  );
});
