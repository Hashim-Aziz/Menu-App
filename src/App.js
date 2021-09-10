import React, { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

//Set data structure in javascript accept the unique item
const allcategories = ["all", ...new Set(items.map((item) => item.category))]; // get categories from item list

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  //filter item from item list base on category choose
  const filterCategories = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        {/* pass filterCategories function as props called props drilling */}
        <Categories
          filterCategories={filterCategories}
          categories={categories}
        />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
