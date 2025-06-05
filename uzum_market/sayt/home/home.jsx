import React, { useState } from "react";
import Logo from "../../rasmlar/banner.png";
import Shapoon from '../../rasmlar/shampun.jpg';
import Kasha from "../../rasmlar/kasha.jpg";
import Kasha3 from "../../rasmlar/kasha 3.jpg";
import Kasha4 from "../../rasmlar/kasha 4.jpg";
import Kofe from "../../rasmlar/kofe.jpg";
import "./home.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  process.env.PUBLIC_URL + "/reklama.png",
  process.env.PUBLIC_URL + "/reklama1.png"
];

const productData = [
  {
    id: 1,
    title: 'Garnier Fructis SOS shampun 400ml',
    price: 29990,
    oldPrice: 52990,
    image: Shapoon,
    monthly: '2 124 so‘m/oyiga',
    tags: ['Original', 'Super narx'],
    rating: '4.9 (7648 sharhlar)'
  },
  {
    id: 2,
    title: 'Bolalar uchun aralashma NAN 3, 400gr',
    price: 167900,
    oldPrice: '',
    image: Kasha,
    monthly: '11 892 so‘m/oyiga',
    tags: ['Katta savdo'],
    rating: '5.0 (69 sharhlar)'
  },
  {
    id: 3,
    title: 'Kasha 3',
    price: 54900,
    oldPrice: 79900,
    image: Kasha3,
    monthly: '3 700 so‘m/oyiga',
    tags: ['Sotuvda'],
    rating: '4.7 (323 sharhlar)'
  },
  {
    id: 4,
    title: 'Kasha 4',
    price: 62000,
    oldPrice: '',
    image: Kasha4,
    monthly: '4 100 so‘m/oyiga',
    tags: ['Yangi'],
    rating: '4.8 (100 sharhlar)'
  },
  {
    id: 5,
    title: 'Nescafe Kofe 100gr',
    price: 45900,
    oldPrice: 52000,
    image: Kofe,
    monthly: '3 100 so‘m/oyiga',
    tags: ['Mashhur'],
    rating: '4.9 (503 sharhlar)'
  },
   {
    id: 1,
    title: 'Garnier Fructis SOS shampun 400ml',
    price: 29990,
    oldPrice: 52990,
    image: Shapoon,
    monthly: '2 124 so‘m/oyiga',
    tags: ['Original', 'Super narx'],
    rating: '4.9 (7648 sharhlar)'
  },
  {
    id: 2,
    title: 'Bolalar uchun aralashma NAN 3, 400gr',
    price: 167900,
    oldPrice: '',
    image: Kasha,
    monthly: '11 892 so‘m/oyiga',
    tags: ['Katta savdo'],
    rating: '5.0 (69 sharhlar)'
  },
  {
    id: 3,
    title: 'Kasha 3',
    price: 54900,
    oldPrice: 79900,
    image: Kasha3,
    monthly: '3 700 so‘m/oyiga',
    tags: ['Sotuvda'],
    rating: '4.7 (323 sharhlar)'
  },
  {
    id: 4,
    title: 'Kasha 4',
    price: 62000,
    oldPrice: '',
    image: Kasha4,
    monthly: '4 100 so‘m/oyiga',
    tags: ['Yangi'],
    rating: '4.8 (100 sharhlar)'
  },
  {
    id: 5,
    title: 'Nescafe Kofe 100gr',
    price: 45900,
    oldPrice: 52000,
    image: Kofe,
    monthly: '3 100 so‘m/oyiga',
    tags: ['Mashhur'],
    rating: '4.9 (503 sharhlar)'
  },
   {
    id: 1,
    title: 'Garnier Fructis SOS shampun 400ml',
    price: 29990,
    oldPrice: 52990,
    image: Shapoon,
    monthly: '2 124 so‘m/oyiga',
    tags: ['Original', 'Super narx'],
    rating: '4.9 (7648 sharhlar)'
  },
  {
    id: 2,
    title: 'Bolalar uchun aralashma NAN 3, 400gr',
    price: 167900,
    oldPrice: '',
    image: Kasha,
    monthly: '11 892 so‘m/oyiga',
    tags: ['Katta savdo'],
    rating: '5.0 (69 sharhlar)'
  },
  {
    id: 3,
    title: 'Kasha 3',
    price: 54900,
    oldPrice: 79900,
    image: Kasha3,
    monthly: '3 700 so‘m/oyiga',
    tags: ['Sotuvda'],
    rating: '4.7 (323 sharhlar)'
  },
  {
    id: 4,
    title: 'Kasha 4',
    price: 62000,
    oldPrice: '',
    image: Kasha4,
    monthly: '4 100 so‘m/oyiga',
    tags: ['Yangi'],
    rating: '4.8 (100 sharhlar)'
  },
  {
    id: 5,
    title: 'Nescafe Kofe 100gr',
    price: 45900,
    oldPrice: 52000,
    image: Kofe,
    monthly: '3 100 so‘m/oyiga',
    tags: ['Mashhur'],
    rating: '4.9 (503 sharhlar)'
  },
   {
    id: 1,
    title: 'Garnier Fructis SOS shampun 400ml',
    price: 29990,
    oldPrice: 52990,
    image: Shapoon,
    monthly: '2 124 so‘m/oyiga',
    tags: ['Original', 'Super narx'],
    rating: '4.9 (7648 sharhlar)'
  },
  {
    id: 2,
    title: 'Bolalar uchun aralashma NAN 3, 400gr',
    price: 167900,
    oldPrice: '',
    image: Kasha,
    monthly: '11 892 so‘m/oyiga',
    tags: ['Katta savdo'],
    rating: '5.0 (69 sharhlar)'
  },
  {
    id: 3,
    title: 'Kasha 3',
    price: 54900,
    oldPrice: 79900,
    image: Kasha3,
    monthly: '3 700 so‘m/oyiga',
    tags: ['Sotuvda'],
    rating: '4.7 (323 sharhlar)'
  },
  {
    id: 4,
    title: 'Kasha 4',
    price: 62000,
    oldPrice: '',
    image: Kasha4,
    monthly: '4 100 so‘m/oyiga',
    tags: ['Yangi'],
    rating: '4.8 (100 sharhlar)'
  },
  {
    id: 5,
    title: 'Nescafe Kofe 100gr',
    price: 45900,
    oldPrice: 52000,
    image: Kofe,
    monthly: '3 100 so‘m/oyiga',
    tags: ['Mashhur'],
    rating: '4.9 (503 sharhlar)'
  }
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const prevSlide = () => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const toggleCart = () => setCartOpen(prev => !prev);
  const addToCart = (product) => setCart(prev => [...prev, product]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-top">
          <img src={Logo} alt="Uzum Market" className="logo" />
          <h2 className="Uzum">Uzum Market</h2>
          <button className="catalog">📂 Katalog</button>
          <input type="text" placeholder="Mahsulotlar va turkumlar izlash" className="search" />
          <div className="nav-icons">
            <a href="#">Kirish</a>
            <a href="#" onClick={() => setFavoritesOpen(true)}>
              ❤️ Saralangan ({favorites.length})
            </a>
            <a href="#" onClick={toggleCart}>
              🛒 Savat ({cart.length})
            </a>
          </div>
        </div>
        <nav className="navbar-bottom">
          <a href="#">Hafta tovarlari</a>
          <a href="#">Elektronika</a>
          <a href="#">Go‘zallik va parvarish</a>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner">
        <img src={images[current]} alt={`Banner ${current}`} />
        <button className="slider-button left" onClick={prevSlide}><ChevronLeft /></button>
        <button className="slider-button right" onClick={nextSlide}><ChevronRight /></button>
      </section>

      {/* Products */}
      <section className="popular">
        <h2>Mashhur</h2>
        <div className="product-list">
          {productData.map((product) => (
            <div className="product-card" key={product.id}>
              <div
                className="favorite-icon"
                onClick={() => toggleFavorite(product.id)}
              >
                {favorites.includes(product.id) ? '❤️' : '🤍'}
              </div>
              <img src={product.image} alt={product.title} />
              <div className="tags">
                {product.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <p className="title">{product.title}</p>
              <p className="rating">⭐️ {product.rating}</p>
              <p className="monthly">{product.monthly}</p>
              <p className="price">
                {product.price.toLocaleString()} so‘m
                {product.oldPrice && (
                  <span className="old-price">{product.oldPrice.toLocaleString()} so‘m</span>
                )}
              </p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                ➕ Savatga qo‘shish
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Popup */}
      {cartOpen && (
        <div className="cart-popup">
          <h2>🛒 Savatdagi mahsulotlar</h2>
          {cart.length === 0 ? (
            <p>Savat bo‘sh</p>
          ) : (
            <>
              <ul>
                {cart.map((item, i) => (
                  <li key={i}>{item.title} — {item.price.toLocaleString()} so‘m</li>
                ))}
              </ul>
              <p><strong>Jami:</strong> {totalPrice.toLocaleString()} so‘m</p>
            </>
          )}
          <button className="close-btn" onClick={toggleCart}>Yopish ❌</button>
        </div>
      )}

      {/* Favorites Popup */}
      {favoritesOpen && (
        <div className="cart-popup">
          <h2>❤️ Saralangan mahsulotlar</h2>
          {favorites.length === 0 ? (
            <p>Hech qanday mahsulot saralanmagan</p>
          ) : (
            <>
              <ul>
                {favorites.map((favId) => {
                  const item = productData.find(p => p.id === favId);
                  return item ? (
                    <li key={favId}>{item.title} — {item.price.toLocaleString()} so‘m</li>
                  ) : null;
                })}
              </ul>
              <p><strong>Umumiy narx:</strong> {
                favorites
                  .map(id => productData.find(p => p.id === id)?.price || 0)
                  .reduce((a, b) => a + b, 0)
                  .toLocaleString()
              } so‘m</p>
            </>
          )}
          <button className="close-btn" onClick={() => setFavoritesOpen(false)}>Yopish ❌</button>
        </div>
      )}
    </div>
  );
}

export default Home;
