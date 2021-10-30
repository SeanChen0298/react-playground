import { useEffect, useState } from "react";
import axios from "axios";

//https://randomuser.me/api - fetch data from this api

//API Section
const fetchRamdomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function App() {
  //useState  - allows get set for client side data
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  //useEffect - perform actions as page loads
  useEffect(() => {
    fetchRamdomData().then((randomData) => {
      setRandomUserDataJSON(randomData || "No user data found");
    });
  }, []);

  return (
    <div>
      <h2>Reload this page to load random user data.</h2>
      <pre>{JSON.stringify(randomUserDataJSON, null, 2)}</pre>
    </div>
  );
}
