````md
# E-Commerce Assignment Roadmap

Goal: Build **one e-commerce app** and implement all practicals step by step.

**Important Rule:**  
Do **not** start all features together. Build layer by layer.

---

# Phase 1 — Base Project Setup

## Goal

Create a working dummy e-commerce app.

## Setup

Install:

```bash
npm create vite@latest
npm install
npm install react-router-dom
npm install @tanstack/react-query
npm install react-error-boundary
```
````

Setup Tailwind.

---

# Practical-06

## Create Dummy E-Commerce App + Deploy

### Features to Build

### Navbar

- Logo
- Home
- Products
- Cart

### Home Page

- Hero section
- Featured products

### Products Page

- Product cards

### Product Card Contains

- Image
- Title
- Price
- Add to Cart button

### Product Details Page

- Single product data

### Cart Page

- Added products

### State Management

Use:

- `useContext`
- `useReducer`

### Reducer Actions

```js
ADD_TO_CART;
REMOVE_FROM_CART;
INCREMENT_QTY;
DECREMENT_QTY;
```

### Folder Structure

```txt
src
│── components
│── pages
│── context
│── reducer
│── data
│── routes
```

### Deploy

Deploy on:

- Vercel
  OR
- Netlify

---

# Phase 2 — Routing

# Practical-16

## Add Routing

### Goal

Move app from single page → multi page.

### Routes

```txt
/
├── Home
├── /products
├── /product/:id
├── /cart
└── *
```

### Step-by-Step

### Step 1

Create pages folder

```txt
pages/
├── Home
├── Products
├── ProductDetails
├── Cart
├── Login
└── NotFound
```

### Step 2

Setup Routes

```jsx
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/cart" element={<Cart />} />
<Route path="*" element={<NotFound />} />
```

### Step 3

Use Link / NavLink

Replace:

```jsx
<a>
```

with

```jsx
<Link>
```

---

# Phase 3 — Protected Routes

# Practical-17

## Protect Routes

### Goal

Only logged-in users access:

```txt
/cart
/product/:id
```

### Create Auth State

Inside Context:

```js
{
  isLoggedIn: false;
}
```

### Actions

```js
LOGIN;
LOGOUT;
```

### Create Protected Route

```txt
components/
└── ProtectedRoute.jsx
```

Logic:

```jsx
if (!isLoggedIn) {
  return <Navigate to="/login" />;
}
```

Wrap routes:

```jsx
<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>
```

### Flow

```txt
User
 ↓
Login?
 ↓ YES
Cart Page

 ↓ NO
Redirect Login
```

---

# Phase 4 — Functional Filter Bar

# Practical-18

## Persist Query Params in URL

### Goal

Filters should remain in URL.

Example:

```txt
/products?category=electronics
```

OR

```txt
/products?search=shirt
```

### Use

```js
useSearchParams();
```

### Filters

- Category
- Search
- Price

### Example

User selects:

```txt
electronics
```

URL becomes:

```txt
/products?category=electronics
```

Search:

```txt
/products?search=shoes
```

### Benefits

- Shareable URL
- Refresh safe
- Better UX

### Flow

```txt
User Filter
    ↓
URL Updates
    ↓
Products Filtered
```

---

# Phase 5 — Footer Search Focus

# Practical-13

## Add "Focus on Search" Link

### Goal

When user clicks footer link:

```txt
Focus on Search
```

Automatically focus search input.

### Home/Footer

```txt
Footer
 └── Focus on Search
```

### Method

Use:

```js
useRef();
```

### Flow

```txt
Click Footer Link
        ↓
searchInputRef.current.focus()
```

### Example

Footer button click →

Cursor goes directly into search input.

---

# Phase 6 — Error Boundary

# Practical-11

## Add Error Boundary

### Goal

Prevent app crash.

If component crashes:

Show fallback UI.

Install:

```bash
npm install react-error-boundary
```

### Create

```txt
components/
└── ErrorFallback.jsx
```

### Wrap App

```jsx
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <App />
</ErrorBoundary>
```

### Example UI

```txt
Something went wrong
[Try Again]
```

### Test

Force error:

```js
throw new Error("App crashed");
```

---

# Phase 7 — Tanstack Query Refactor

# Practical-20

## Refactor to Tanstack Query

### Goal

Remove manual fetch logic.

Before:

```js
useEffect();
fetch();
loading;
error;
```

After:

```js
useQuery();
```

### Create API File

```txt
api/
└── productApi.js
```

### Fetch Products

Use:

```js
useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
});
```

### Benefits

- Auto caching
- Loading state
- Error handling
- Refetching

### Replace

❌ Old:

```js
useEffect;
useState;
```

✅ New:

```js
useQuery;
```

---

# Recommended Order

```txt
1. Practical-06 → Base App
2. Practical-16 → Routing
3. Practical-17 → Protected Routes
4. Practical-18 → Query Params Filter
5. Practical-13 → Focus Search
6. Practical-11 → Error Boundary
7. Practical-20 → Tanstack Query
8. Deploy Final App
```

---

# Final Architecture

```txt
App
│
├── Context
│   ├── Cart
│   └── Auth
│
├── Router
│   ├── Home
│   ├── Products
│   ├── ProductDetails
│   ├── Cart (Protected)
│   └── Login
│
├── Components
│   ├── Navbar
│   ├── ProductCard
│   ├── FilterBar
│   ├── Footer
│   ├── ProtectedRoute
│   └── ErrorBoundary
│
└── Tanstack Query
    └── API Fetching
```

This order keeps everything incremental and avoids refactoring the whole project repeatedly.

```

```
