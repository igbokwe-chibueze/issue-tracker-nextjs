"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({ ticketId }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    const res = await fetch(`http://localhost:4000/tickets/${ticketId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.push('/tickets');
      router.refresh();
    } else {
      console.error('Failed to delete the ticket');
      // Optionally handle error UI
    }
    setIsDeleting(false);
  };

  return (
    <button onClick={handleDelete} className="btn-delete" disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
};

export default DeleteButton;
