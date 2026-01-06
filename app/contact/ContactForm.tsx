"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, location, service }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setName("");
        setPhone("");
        setLocation("");
        setService("");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg">
      {success ? (
        <div className="text-center py-12">
          <p className="text-2xl font-bold text-green-500 mb-4">✅ Request Sent!</p>
          <p className="text-gray-300">Our team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-white/20 p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-white/20 p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition"
            required
          />

          <input
            type="text"
            placeholder="Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-white/20 p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition"
          />

          <input
            type="text"
            placeholder="Service / Event Details"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border border-white/20 p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition"
          />

          {error && (
            <p className="text-red-500 font-medium text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 
              ${loading
                ? "bg-gray-600 text-gray-200 cursor-not-allowed"
                : "bg-[var(--brand)] text-black hover:bg-white hover:text-[var(--brand)]"
              }`}
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
