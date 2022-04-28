import React from "react";
import ReactDOM from "react-dom";

const img1 =
  "https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg";
const img2 =
  "https://static.toiimg.com/thumb/52467119.cms?imgsize=1106358&width=800&height=800";
const img3 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mama_instant_noodle_block.jpg/1200px-Mama_instant_noodle_block.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <img className="food-img" src={img1} alt="img1" />
      <img className="food-img" src={img2} alt="img2" />
      <img className="food-img" src={img3} alt="img3" />
    </ul>
  </div>,
  document.getElementById("root")
);
