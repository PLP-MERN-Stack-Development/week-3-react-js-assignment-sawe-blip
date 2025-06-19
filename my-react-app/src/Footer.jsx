export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center p-4 text-sm text-gray-600 dark:text-gray-300 mt-10">
      © {new Date().getFullYear()} TaskApp. All rights reserved.
    </footer>
  );
}
