import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-6 shadow">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-0">School Management System</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/students" className="hover:underline">Students</a>
          <a href="/teachers" className="hover:underline">Teachers</a>
          <a href="/about" className="hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
}