"use client";

import { useState, type FormEvent } from "react";

// The export has no working form backend. This form validates input and
// shows a notice; connect onSubmit to an email or CRM endpoint before launch.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <button className="btn btn-primary" type="submit">
        Send
      </button>
      {status === "sent" && (
        <p className="form-note" role="status">
          Thanks for your message. This form is not connected to a mail service
          yet, so please also email us directly.
        </p>
      )}
    </form>
  );
}
