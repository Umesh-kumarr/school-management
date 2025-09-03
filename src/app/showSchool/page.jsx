"use client";

import { useEffect, useState } from "react";

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSchools() {
      try {
        const res = await fetch("/api/schools");

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        setSchools(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSchools();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading schools...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <p className="text-lg font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <p className="text-lg font-medium text-gray-500">No schools found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full  p-4 sm:p-6 bg-amber-50">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
        Schools List
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((school) => (
          <div
            key={school.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            role="article"
            aria-labelledby={`school-${school.id}-title`}
          >
            {school.image ? (
              <img
                src={school.image}
                alt={`${school.name} image`}
                className="mb-3 h-48 w-full rounded-md object-cover"
              />
            ) : (
              <div className="mb-3 flex h-48 w-full items-center justify-center rounded-md bg-gray-100">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            <h3
              id={`school-${school.id}-title`}
              className="text-xl font-semibold text-gray-900"
            >
              {school.name}
            </h3>
            <p className="mt-1 text-gray-600">
              {school.address}, {school.city}, {school.state}
            </p>
            <p className="mt-1 text-gray-600">📞 {school.contact}</p>
            <p className="mt-1 text-gray-600">📧 {school.email_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}