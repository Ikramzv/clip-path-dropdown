import { useRef, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("left");
  const back = useRef(null);

  function style(target) {
    const ul = document.querySelector(".list > div.active");
    let index = "";
    Array.from(ul.children).forEach((li, i) => {
      if (li === target) {
        index = i + 1;
        li.querySelector("a").style.color = "white";
      } else {
        li.querySelector("a").style.color = "black";
      }
    });
    return index;
  }

  function translate(e) {
    let target = null;
    if (e.target.matches("ul li")) target = e.target;
    else if (e.target.matches("ul li a")) target = e.target.parentElement;
    else return;
    const height = 44.8;
    const index = style(target);
    const backEl = back.current;
    backEl.style.transform = `translateY(${height * index + "px"})`;
    backEl.classList.add("active");
  }

  return (
    <div className="container">
      <div className="relative">
        <button onClick={() => setOpen(!open)}>New + </button>
        <div className={`dropdown ${open ? "open" : ""}`}>
          <div className="back" ref={back}></div>
          <ul>
            <button
              onClick={() => {
                setPosition(position === "left" ? "right" : "left");
                style(null);
                back.current.classList.remove("active");
              }}
            >
              Turn to {position === "left" ? "right" : "left"}
            </button>
            <div className="list">
              <div
                className={`left ${position === "left" ? "active" : ""}`}
                onPointerOver={translate}
              >
                <li>
                  <a href="#">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="#">Saepe, vitae?</a>
                </li>
                <li>
                  <a href="#">Praesentium, cum!</a>
                </li>
                <li>
                  <a href="#">Mollitia, fugit?</a>
                </li>
                <li>
                  <a href="#">Mollitia, fugit?</a>
                </li>
                <li>
                  <a href="#">Mollitia, fugit?</a>
                </li>
                <li>
                  <a href="#">Mollitia, fugit?</a>
                </li>
                <li>
                  <a href="#">Mollitia, fugit?</a>
                </li>
                <li>
                  <a href="#">Mollitia, fugit?</a>
                </li>
              </div>
              <div
                className={`right ${position === "right" ? "active" : ""}`}
                onPointerOver={translate}
              >
                <li>
                  <a href="#">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="#">Rem, ea.</a>
                </li>
                <li>
                  <a href="#">Dignissimos, illo!</a>
                </li>
                <li>
                  <a href="#">Ex, voluptatum.</a>
                </li>
                <li>
                  <a href="#">Velit, earum.</a>
                </li>
                <li>
                  <a href="#">Corrupti, at?</a>
                </li>
                <li>
                  <a href="#">Corporis, nesciunt!</a>
                </li>
                <li>
                  <a href="#">Architecto, et.</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
