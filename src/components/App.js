import React from "react";
import { messages, contacts } from "../data";
import NavBar from "./Nav";


console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <NavBar/>
      
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            <li className="message sent">
              <div className="icon">E</div>
              <span className="content">One</span>
            </li>
            <li className="message received">
              <div className="icon">P</div>
              <span className="content">Two</span>
            </li>
            <li className="message sent">
              <div className="icon">E</div>
              <span className="content">Three four five</span>
            </li>
            <li className="message received">
              <div className="icon">P</div>
              <span className="content">🎺🎺🎺🎺🎺</span>
            </li>
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
