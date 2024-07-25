import { notFound } from "next/navigation";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

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

const TicketDetails = async ({ params }) => {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>

        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
        
        <div className="flex items-center space-x-4">
            <DeleteButton className="btn-delete" ticketId={ticket.id} />

            <Link href={`/tickets/${ticket.id}/edit`}>
                <button className="btn-edit">Edit Ticket</button>
            </Link>
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
