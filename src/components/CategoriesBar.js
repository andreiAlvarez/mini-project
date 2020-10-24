import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import { Link } from "react-router-dom";
//import Category from "./Category";

export default function CategoriesBar(props) {
  let { dataCategory } = useContext(NewsContext);
 
  const categories = [
    "technology",
    "sports",
    "science",
    "health",
    "entertainment",
    "business",
  ];

  function handleCategories(event) {
    return dataCategory = event.target.value;
  }
  
  console.log(dataCategory);
  return (
    <div>
      {categories.map((category) => {
        return (
          <Link to={`/category/${category}`}>
            <h4 onClick={handleCategories}>{category}</h4>
          </Link>
        );
      })}
    </div>
  );
}
