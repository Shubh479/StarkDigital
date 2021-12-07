import React, { useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [state, setState] = useState([]);
  let page = 1;
  function getData() {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((item) => item.json())
      .then((res) => setState(res.data));
  }
  getData();

  function showData() {
    setTimeout(() => {
      page++;
      getData();
    }, 500);
  }
  window.addEventListener("scroll", () => {
    let { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      showData();
    }
  });
  return (
    <>
      <div className="app">
        {state.map((datas) => (
          <User
            email={datas.email}
            first_name={datas.first_name}
            last_name={datas.last_name}
            image={datas.avatar}
            key={datas.id}
          />
        ))}
      </div>
      ;
    </>
  );
}

export default App;
