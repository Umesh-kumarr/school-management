"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchoolPage() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage("School added successfully!");
        reset();
      } else {
        setMessage("Error adding school.");
      }
    } catch (err) {
      setMessage("Server error.");
    }
  };

  return (
    <div className="flex min-h-[calc(81vh)] items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Add School
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("name", { required: true })}
              placeholder="School Name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
          <div>
            <input
              {...register("address", { required: true })}
              placeholder="Address"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
          <div>
            <input
              {...register("city", { required: true })}
              placeholder="City"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
          <div>
            <input
              {...register("state", { required: true })}
              placeholder="State"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
          <div>
            <input
              {...register("contact", { required: true })}
              placeholder="Contact"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
          <div>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
          <div>
            <input
              {...register("image")}
              placeholder="Image URL (optional)"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}