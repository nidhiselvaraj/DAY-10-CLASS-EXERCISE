import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function Books() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((result) => {
        setPosts(result.data);
      }) 
  }, []);

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h5>{data.id}.
            {data.title} by {data.author}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Books;