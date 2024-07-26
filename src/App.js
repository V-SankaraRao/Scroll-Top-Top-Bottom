
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const[curdata,setcurdata]=useState(null);
  let divref=useRef(null);
  function handleToTop(){
    window.scrollTo({
      top:0,left:0,behavior:"smooth"
    });
  }
  function handleToBottom(){
  divref.current.scrollIntoView({behavior:'smooth'});
  }
  async function fetchData(){
   let data=await fetch("https://dummyjson.com/products?limit=100");
   let res=await data.json();
   res.products&&setcurdata(res.products);

  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <div className="App">
      <h1>Scroll To Bottom of Page</h1>
      <button onClick={handleToBottom}>scrollToBottom</button>
      {
        curdata&& curdata.map((item)=><li>{item.title}</li>)
      }
      <div ref={divref}></div>
      <h1>Scroll To Top  of Page</h1>
      <button onClick={handleToTop}>scrollToTop</button>
    </div>
  );
}

export default App;
