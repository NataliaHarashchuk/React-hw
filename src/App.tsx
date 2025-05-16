import React from 'react';
import './App.scss'
import picture from './assets/images/lama.jpg'

function App() {
  return (
    <div className="simple-section">
      <h1>Привіт, це заголовок сторінки!</h1>
      <p>Це параграф з текстом. Тут можна описати щось цікаве про сторінку або розповісти більше деталей.</p>
      <img src={picture} alt="Якесь фото" />
    </div>
  )

  return React.createElement(
    "div",
    { className: "simple-section" },
    React.createElement("h1", null, "Привіт, це заголовок сторінки!"),
    React.createElement("p", null, "Це параграф з текстом. Тут можна описати щось цікаве про сторінку або розповісти більше деталей."),
    React.createElement("img", { src: picture, alt: "Якесь фото" })
  );
}

export default App
