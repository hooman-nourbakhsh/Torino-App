# Torino - Tour Booking Platform

Torino is a modern tour booking web application built with **Next.js 14**. It provides a seamless experience for users to explore and book travel tours with secure authentication, a user-friendly UI, and a smooth checkout process.

## 🚀 Features

- **Next.js 14** for server-side rendering and performance optimization.
- **React Query** for efficient data fetching and state management.
- **Axios** for API communication with authentication handling.
- **React Hook Form & Yup** for form validation and user data handling.
- **Tailored Authentication** with OTP-based login system.
- **Secure User Management** with JWT authentication and token refresh.
- **Dynamic Profile Management** (Personal Info, Bank Details, and Transactions).
- **Basket & Checkout System** for booking tours and processing payments.
- **Pagination & Filtering** for optimized user navigation.
- **Multi-step Booking Flow** ensuring a smooth checkout experience.
- **Custom UI Components** (Profile Dropdown, Swiper Slider, Modals, etc.).
- **Error Handling & Loading States** for better user experience.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, CSS Modules
- **State Management:** React Query
- **Forms & Validation:** React Hook Form, Yup
- **API Communication:** Axios
- **Authentication:** JWT-based login with OTP verification
- **UI Libraries:** Swiper.js for carousels, React-Spinners for loaders, React-Toastify for notifications

## 📂 Project Structure

```
📂 src
 ├── 📁 app               # Next.js App Router structure
 │    ├── 📁 profile      # User profile pages (transactions, my-tours)
 │    ├── 📁 checkout     # Checkout page for tour bookings
 │    ├── 📁 login        # Standalone login page
 │    ├── 📁 payment      # Payment status confirmation page
 │    ├── 📁 tours        # Tour details pages
 │    │    ├── 📁 [id]    # Dynamic tour details page
 │    ├── 📁 not-found.js # Custom 404 page
 │    ├── 📁 error.js     # Global error handling page
 ├── 📁 components        # UI components and templates
 │    ├── 📁 layout       # Header, Footer, Layout wrapper
 │    ├── 📁 module       # Feature-based UI components (CTA, Slider, etc.)
 │    ├── 📁 element      # Reusable elements (Buttons, ProfileDropdown, etc.)
 │    ├── 📁 template     # Page-specific components (AuthForm, CheckoutPage, etc.)
 ├── 📁 configs           # API configurations, React Query setup
 ├── 📁 constants         # Static data (slider images, tour types, etc.)
 ├── 📁 hooks             # Custom React hooks for URL query handling
 ├── 📁 providers         # Context providers (React Query)
 ├── 📁 schema            # Yup validation schemas
 ├── 📁 services          # API Services (mutations & queries)
 ├── 📁 utils             # Helper functions (date formatting, number conversion, etc.)
```

## 🏗️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/matador7495/Torino-App.git
   cd Torino-App
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:6500
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## 🎯 How to Use

- **Login/Register:** Users can log in via OTP authentication.
- **Booking & Checkout:** Add tours to the basket and proceed to checkout.
- **Profile Management:** Update user details, track transactions, and view booked tours.
- **Payment Processing:** Handle payment confirmation and success/failure status.

## 🔗 API Integration

This project requires a backend server running at http://localhost:6500. Ensure the backend is properly set up and running before using the application.

Torino interacts with a backend API based on Swagger documentation, handling authentication, tour bookings, and payments.

## 📜 License

This project is licensed under the Apache License 2.0.

You are free to use, modify, and distribute this software, but you must provide proper attribution to the original authors. For more details, see the [`Apache License`](./LICENSE) file.

## Acknowledgments

I would like to thank the open-source community and contributors who provide the tools and libraries that make projects like this possible. Special thanks to the teams behind Next.js, react-hook-form, yup, tanstack/react-query, jalali-moment, Zaman, axios, and Vercel for their incredible work and support in making development faster and more efficient.

## **Enjoy exploring Torino !**

Developed with ❤️ by **HooMaN** 🚀



