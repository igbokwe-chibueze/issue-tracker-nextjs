import { notFound } from "next/navigation";
import EditForm from "./EditForm";

async function getTicket(id) {
  // Imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    cache: 'no-store', // Ensure data is not cached
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const EditTicketPage = async ({ params }) => {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <h2 className="text-center">Edit Ticket</h2>
      <EditForm ticket={ticket} />
    </main>
  );
};

export default EditTicketPage;
