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
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name", { required: true })} placeholder="School Name" className="border p-2 w-full" />
        <input {...register("address", { required: true })} placeholder="Address" className="border p-2 w-full" />
        <input {...register("city", { required: true })} placeholder="City" className="border p-2 w-full" />
        <input {...register("state", { required: true })} placeholder="State" className="border p-2 w-full" />
        <input {...register("contact", { required: true })} placeholder="Contact" className="border p-2 w-full" />
        <input {...register("email", { required: true })} placeholder="Email" className="border p-2 w-full" />
        <input {...register("image")} placeholder="Image URL" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
