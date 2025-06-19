// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 space-y-3">
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
