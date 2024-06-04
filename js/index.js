import { CardComponent } from "../components/CardComponents.js";

// document.addEventListener("DOMContentLoaded", () => {
const renderArea = document.getElementById("renderArea");
const BASE_URL = "http://127.0.0.1:5500/data/products.json";
fetch(BASE_URL)
  .then((a) => a.json())
  .then((data) => {
    let products = data.result.products;
    products.map((product) => (renderArea.innerHTML += CardComponent(product)));
  });
