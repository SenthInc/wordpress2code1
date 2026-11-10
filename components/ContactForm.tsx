// Sends the form to canada_raj@hotmail.com through the visitor's email app.
// No server or API key is needed, which suits the static site.
const TO_EMAIL = "canada_raj@hotmail.com";

export default function ContactForm() {
  return (
    <form
      className="form"
      action={`mailto:${TO_EMAIL}?subject=Website%20inquiry`}
      method="post"
      encType="text/plain"
    >
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
      <p className="form-note">
        Clicking Send opens your email app with your message addressed to {TO_EMAIL}.
      </p>
    </form>
  );
}
