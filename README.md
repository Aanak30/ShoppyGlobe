# 🛍️ ShoppyGlobe - E-Commerce Web App

ShoppyGlobe is a modern and responsive e-commerce web application built using **React (Vite)** and **Redux Toolkit**. It allows users to browse products, view details, add items to the cart, and simulate a checkout process.

---

## 🚀 Features

### 🏠 Landing Page

* Beautiful and modern homepage
* Call-to-action buttons for better UX

### 📦 Product Listing

* Fetch products from API: https://dummyjson.com/products
* Search functionality using Redux
* Responsive product grid

### 🔍 Product Details

* Dynamic routing using product ID
* Detailed product view with image, price, and description

### 🛒 Cart System

* Add to cart
* Remove items
* Increase / decrease quantity
* Prevent quantity from going below 1
* Display total items and total price

### 💳 Checkout

* Dummy checkout form
* "Place Order" functionality
* Clears cart after order
* Redirects to Home page

### ❌ 404 Page

* Handles unknown routes
* Displays user-friendly error message

---

## ⚙️ Tech Stack

* ⚛️ React (Vite)
* 🧠 Redux Toolkit
* 🌐 React Router (createBrowserRouter)
* 🎨 CSS (Responsive + Animations)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── ProductItem.jsx
│   ├── CartItem.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── NotFound.jsx
│
├── features/
│   ├── cart/
│   │   └── cartSlice.js
│   ├── store.js
│
├── hooks/
│   └── useFetchProducts.js
│
├── routes/
│   └── router.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Key Concepts Used

* React Hooks (useState, useEffect)
* Custom Hooks
* Redux (state management)
* React Router (dynamic routing)
* Lazy Loading & Code Splitting
* Responsive Design

---

## ▶️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/annak30/shoppyglobe.git
```

2. Navigate to project folder:

```bash
cd shoppyglobe
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm run dev
```

5. Open in browser:

```
http://localhost:5173
```

---

