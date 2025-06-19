// src/components/Layout.jsx
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
}
