import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// import products from './data'
import Card from "./Components/Card";

const BASE_URL = "https://fakestoreapi.com/products";
const CAT_URL = "https://fakestoreapi.com/products/categories";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // fetching categories
  useEffect(() => {
    const fetchCategories = async () => {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        const response = await fetch(`${CAT_URL}`, { signal });
        const categories = await response.json();
        setCategories(categories);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Aborted");
          return;
        }
      }
      return () => controller.abort();
    };
    fetchCategories();
  }, []);
  // fetching product
  useEffect(() => {
    const fetchProducts = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        const response = await fetch(`${BASE_URL}`, { signal });
        const products = await response.json();
        setProducts(products);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Aborted");
          return;
        }
      }
      return () => controller.abort();
    };
    fetchProducts();
  }, []);

  // Input Filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => {
    return (
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
    );
  });

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => {
          return (
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
          );
        }
      );
    }

    return filteredProducts.map(({ image, title, id, price }) => {
      return <Card key={id} img={image} title={title} price={price} />;
    });
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
