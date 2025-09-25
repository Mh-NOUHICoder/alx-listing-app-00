# ALX Listing App 00

**ALX Listing App 00** – a responsive property listing page built as an Airbnb-style demo using **Next.js, TypeScript, and Tailwind CSS**.

---

## Project Overview

This project demonstrates building a **fully responsive listing page** that:

- Displays property cards from a sample dataset.
- Includes a **hero section** with background image and call-to-action.
- Features a **filter section** with clickable pills.
- Uses **reusable layout components** (Header, Footer, Layout).
- Implements **TypeScript interfaces** for proper type-checking.
- Uses **Tailwind CSS** for all styling.

---

## Learning Objectives

By completing this project, you will:

- Implement responsive web design principles.
- Break down UI mockups into reusable components.
- Render dynamic data from arrays.
- Create functional layout components.
- Work with TypeScript interfaces and props.
- Implement filter functionality for property listings.
- Follow best practices in component composition and styling.

---

## Project Structure

- components/ # React components
- common/
- Card.tsx # Property card component
- Button.tsx # Reusable button component
- layout/
- Header.tsx # Site header with nav, search, and logo
- Footer.tsx # Footer content
- Layout.tsx # Layout wrapper for consistent structure
- interfaces/ # TypeScript interfaces (PropertyProps, etc.)
- constants/ # Constants (PROPERTYLISTINGSAMPLE, UI_TEXT, etc.)
- pages/ # Next.js pages (_app.tsx, index.tsx)
- public/assets/ # Static images, icons, SVGs
- styles/ # Global CSS & Tailwind


---

## Property Data

- Sample property data is exported as `PROPERTYLISTINGSAMPLE` in `constants/index.ts`.
- Each property includes:
  - `name`, `address` (city/state/country), `rating`
  - `category`, `price`, `offers` (bed, shower, occupants)
  - `image` URL, `discount` if any.

**Example:**
```ts
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  ...
];
