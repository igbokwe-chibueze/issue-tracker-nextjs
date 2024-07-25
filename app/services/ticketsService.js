// Server-side function to fetch tickets
export async function getTickets() {
  // Imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  const res = await fetch('http://localhost:4000/tickets', {
    cache: 'no-store', // Ensure data is not cached
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tickets');
  }

  const tickets = await res.json();

  // Sort tickets by createdAt in descending order
  tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return tickets;
}
