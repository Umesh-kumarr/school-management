"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchoolPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "image") {
        if (data.image && data.image[0]) {
          formData.append("image", data.image[0]);
        }
      } else {
        formData.append(key, data[key]);
      }
    });

    const res = await fetch("/api", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setMessage("✅ School added successfully!");
      reset();
    } else {
      setMessage("❌ Failed to add school");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add School</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name", { required: true })} placeholder="School Name" className="border p-2 w-full" />
        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

        <input {...register("address", { required: true })} placeholder="Address" className="border p-2 w-full" />

        <input {...register("city", { required: true })} placeholder="City" className="border p-2 w-full" />

        <input {...register("state", { required: true })} placeholder="State" className="border p-2 w-full" />

        <input {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Contact Number" className="border p-2 w-full" />
        {errors.contact && <p className="text-red-500 text-sm">Enter valid 10-digit number</p>}

        <input {...register("email_id", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" className="border p-2 w-full" />
        {errors.email_id && <p className="text-red-500 text-sm">Enter valid email</p>}

        <input type="file" {...register("image")} className="border p-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add School</button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
