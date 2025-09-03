import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="mx-auto text-center">
        &copy; {new Date().getFullYear()} School Management System. All rights reserved.
      </div>
    </footer>
  );
}