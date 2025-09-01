"use client";

import { useEffect, useState } from "react";

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Schools List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div key={school.id} className="border rounded-lg shadow p-4">
            {school.image && (
              <img
                src={`/schoolImages/${school.image}`}
                alt={school.name}
                className="w-full h-40 object-cover rounded"
              />
            )}
            <h2 className="text-lg font-semibold mt-2">{school.name}</h2>
            <p className="text-sm text-gray-600">{school.address}, {school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
