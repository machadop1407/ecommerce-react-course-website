import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const products = getProducts();

   useEffect(() => {
      if (!user) {
        navigate("/auth");
        return;
      }})
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
