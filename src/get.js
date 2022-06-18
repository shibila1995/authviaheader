import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const url = "https://gorest.co.in/public/v2/users";
  const token =
    "8498579f1bcca86778493562939981f29b2ed572714974a02740856d036a31f5";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    Axios.get(url, config)
      .then((res) => {
        console.log("getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //now we r rendering
  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>Lets use axios</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default App;
