import * as React from "react";

export const Contact: React.FC = () => {
  return (
    <main className="contactHolder">
      <header className="holderImg">
        <div>
        <span className="material-icons qustion">contact_support</span>
          <h1>Masz pytania lub skargi?</h1>
          <h3>Skontaktuj się z nami, a my postaramy się ci pomóc</h3>
        </div>
      </header>
    <section className="arrowDown"><span className="material-icons arrowDown">keyboard_arrow_down</span></section>
    <section className="mailHolder">
      <div>
        <input type="text" placeholder="Imię i nazwisko"/>
        <input type="email" placeholder="Adres e-mail"/>
        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="nr telefonu"/>
      </div>
        <div><input type="text" className="topic" placeholder="temat wiadomości"/></div>
        <textarea placeholder="Treść waidomości"></textarea>
        <div className="buttonHolder"><button>Wyślij</button></div>
    </section>
    </main>
  );
};
