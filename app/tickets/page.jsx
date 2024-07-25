import { Suspense } from "react"
import TicketsList from "./TicketsList"
import Loading from "../loading"

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>

      {/* The Suspense component ensures only the components within it is streamed, without this the entire page is streamed.
        Without Suspense the Loading Component shows for the entire page, but with it, the Loading Component 
        only shows for components within Components */}
      <Suspense fallback={<Loading/>}>
        <TicketsList />
      </Suspense>
    </main>
  )
}

export default Tickets