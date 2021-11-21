import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Recipe from "./components/Recipe";
import Header from "./components/Header";

function App() {
  const APP_ID = "6c9efa8c";
  const APP_KEY = "a97217809e699d8e7465b4379cea0057";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
      } catch (error) {
        console.log("error", error);
      }
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="&#61442;"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
