
import Link from "next/link";

async function getTickets() {
    // Imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache
        }
    });
  
    return res.json();
}

const TicketsList = async() => {
    const tickets = await getTickets();

    // Sort tickets by createdAt in descending order
    tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    );
}

export default TicketsList;
