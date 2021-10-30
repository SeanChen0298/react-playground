import { useEffect, useState } from "react";
import axios from "axios";

//https://randomuser.me/api - fetch data from this api

//API Section
const fetchRamdomData = (pageNumber) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getFullUserName = (userInfo) => {
  const {
    name: { first, last },
  } = userInfo;
  return `${last} ${first}`;
};

const getImageURL = (userInfo) => {
  const {
    picture: { thumbnail },
  } = userInfo;
  return thumbnail;
};

export default function App() {
  //useState  - allows get set for client side data
  const [pageNumber, setPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]); //to store all user info

  const fetchNextUserInfo = () => {
    fetchRamdomData(pageNumber).then((randomData) => {
      if (randomData === undefined) return;

      //appends new user from random data into existing user info list
      const newUserInfos = [...userInfos, ...randomData.results];
      setUserInfos(newUserInfos);
      setPageNumber(randomData.info.page + 1);
    });
  };

  //useEffect - perform actions as page loads
  useEffect(() => {
    fetchNextUserInfo();
  }, []);

  return (
    <div>
      <h2>Spam this button to add even more users.</h2>
      <button
        onClick={() => {
          fetchNextUserInfo();
        }}
      >
        Add More Users
      </button>
      {userInfos.map((userInfos, index) => (
        <div key={index}>
          <p>{getFullUserName(userInfos)}</p>
          <img src={getImageURL(userInfos)} />
        </div>
      ))}
    </div>
  );
}
