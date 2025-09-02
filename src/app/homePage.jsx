"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">School Management</h1>

      <div className="flex gap-4">
        <Link
          href="/addSchool"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
        >
          ➕ Add School
        </Link>

        <Link
          href="/showSchool"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600"
        >
          📚 Show Schools
        </Link>
      </div>
    </main>
  );
}
