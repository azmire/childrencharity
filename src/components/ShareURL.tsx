"use client";
export default function ShareURL({ id }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(`https://www.every.org/${id}/donate`);
      }}
    >
      Copy donate link
    </button>
  );
}
