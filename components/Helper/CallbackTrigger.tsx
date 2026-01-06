"use client";

export default function CallbackTrigger() {
  return (
    <button
      onClick={() => {
        document.dispatchEvent(new Event("open-callback"));
      }}
      className="mt-4 text-sm text-gray-400 underline hover:text-white transition"
    >
      Prefer a call? Request a callback
    </button>
  );
}
