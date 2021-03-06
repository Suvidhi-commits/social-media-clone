import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      header: {
        Authorization: "Bearer" + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card">
            <h5>{item.postedby.name}</h5>
            <div className="card-image">
              <img src={item.photo} />
            </div>
            <div className="card-content">
              <i className="material-icons">favorite</i>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
