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
    return <p className="p-6 text-gray-600">Loading schools...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">Error: {error}</p>;
  }

  if (schools.length === 0) {
    return <p className="p-6 text-gray-500">No schools found.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Schools List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div
            key={school.id}
            className="border rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            {school.image && (
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <h3 className="text-xl font-bold">{school.name}</h3>
            <p className="text-gray-700">
              {school.address}, {school.city}, {school.state}
            </p>
            <p>📞 {school.contact}</p>
            <p>📧 {school.email_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
