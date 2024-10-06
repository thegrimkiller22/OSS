import * as React from "react";


export default function Query({ name, email, phone ,message }) {
  return `<b>
      <h2>New Query Registered from ${name}</h2>
      <h3>Details</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
      </b>
    `;
}