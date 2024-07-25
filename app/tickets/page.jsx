import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import ErrorBoundary from "./error";
import { getTickets } from "../services/ticketsService";

// This is a server component
const Tickets = async () => {
  try {
    const tickets = await getTickets();

    return (
      <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>
        <Suspense fallback={<Loading />}>
          <TicketsList tickets={tickets} />
        </Suspense>
      </main>
    );
  } catch (error) {
    return <ErrorBoundary message={error.message} />;
  }
};

export default Tickets;
