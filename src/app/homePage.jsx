"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-[81vh] flex-col items-center justify-center p-4 sm:p-6 bg-amber-50">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
        School Management
      </h1>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Link
          href="/addSchool"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Navigate to Add School page"
        >
          ➕ Add School
        </Link>
        <Link
          href="/showSchool"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Navigate to Show Schools page"
        >
          📚 Show Schools
        </Link>
      </div>
    </main>
  );
}