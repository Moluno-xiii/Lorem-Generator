import React, { useState } from "react";
import data from "./data";
import text from "./data";
function App() {
const [text, setText] = useState([])
const [count, setCount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count)
    
let finalAmount = parseInt(count)

    if (!finalAmount){
      setText([])
      alert("you didn't input any amount")
    }
    if (finalAmount < 1){
      setText([])
      alert("invalid amount")
    }else if(finalAmount <= data.length && finalAmount >= 1 ){
      setText(data.slice(0, finalAmount))
    }else if (finalAmount > data.length){
      setCount(data.length -1)
      setText(data.slice(0, finalAmount))
    }
    
    
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form action="" onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button className="btn" type="submit" onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          dicta.
        </p> */}
      </article>
    </section>
  );
}

export default App;
