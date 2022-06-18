import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const url = "https://gorest.co.in/public/v1/users/all";
  const token =
    "8498579f1bcca86778493562939981f29b2ed572714974a02740856d036a31f5";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  function submit(e) {
    e.preventDefault();
    Axios.post(url, config, {
      name: data.name,
      year: data.email,
      gender: data.gender,
      staus: data.status,
    }).then((res) => {
      console.log("latest details is", res);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log("new data is........", newdata);
  }

  return (
    <div className="App">
      <h1>Lets use axios</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <br />

        <input
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
          placeholder="email"
          type="text"
        ></input>
        <br />
        <input
          onChange={(e) => handle(e)}
          id="gender"
          value={data.gender}
          placeholder="gender"
          type="text"
        ></input>
        <br />
        <input
          onChange={(e) => handle(e)}
          id="status"
          value={data.status}
          placeholder="status"
          type="text"
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
