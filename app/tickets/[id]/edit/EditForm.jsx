"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditForm = ({ ticket }) => {
  const [title, setTitle] = useState(ticket.title);
  const [body, setBody] = useState(ticket.body);
  const [priority, setPriority] = useState(ticket.priority);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    const createdAt = new Date().toISOString()
    const updatedTicket = { ...ticket, title, body, priority, createdAt };

    const res = await fetch(`http://localhost:4000/tickets/${ticket.id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTicket),
    });

    if (res.ok) {
      router.push(`/tickets/${ticket.id}`);
      router.refresh();
    } else {
      console.error('Failed to update the ticket');
      // Optionally handle error UI
    }
    setIsSaving(false);
  };

  const handleCancel = () => {
    router.push(`/tickets/${ticket.id}`);
  };

  return (
    <form onSubmit={handleSave} className="w-1/2">
      <label>
          <span>Title:</span>
          <input
              required 
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
          />
      </label>
      <label>
          <span>Title:</span>
          <textarea
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
          />
      </label>
      <label>
          <span>Priority:</span>
          <select 
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
          >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          </select>
      </label>

      <div className=" space-y-4">
        <button 
            className="btn-primary" 
            disabled={isSaving}
        >
            {isSaving && <span>Saving...</span>}
            {!isSaving && <span>Save Corrections</span>}
        </button>

        <button type="button" className="btn-edit" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
