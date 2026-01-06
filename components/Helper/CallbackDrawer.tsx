"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
// import emailjs from "@emailjs/browser"; // ❌ commented (not used now)

export default function CallbackDrawer() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("DJ Services");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔔 Listen for global open event
  useEffect(() => {
    const openDrawer = () => setOpen(true);
    document.addEventListener("open-callback", openDrawer);
    return () => document.removeEventListener("open-callback", openDrawer);
  }, []);

  // 📩 TELEGRAM SEND FUNCTION
  

  // 🧠 FORM SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service,
        }),
      });
  
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
      }
  
      setSubmitted(true);
    } catch (error) {
      console.error("Callback error:", error);
      alert("Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 left-6 z-[9998] bg-white text-black px-5 py-3 rounded-full shadow-lg font-medium hover:scale-105 transition"
      >
        Request Callback
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-[9999]"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[10000] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold">Request a Callback</h3>
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-20">
              <p className="text-lg font-semibold mb-2">
                ✅ Request Sent Successfully
              </p>
              <p className="text-sm text-gray-600">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>DJ Services</option>
                <option>Chenda Melam</option>
                <option>Sannayi Melam</option>
                <option>Saxophone Player</option>
                <option>Ladies Teenmar</option>
                <option>Others</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--brand)] text-black py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request Callback"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Instant notification. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
