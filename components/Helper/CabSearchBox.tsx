"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExchangeAlt,
} from "react-icons/fa";

type MainTab = "Outstation" | "Local" | "Airport" | "Tour";
type TripType = "oneway" | "round";
type AirportType = "to" | "from";

const CabSearchBox = () => {
  const [tab, setTab] = useState<MainTab>("Outstation");
  const [tripType, setTripType] = useState<TripType>("oneway");
  const [airportType, setAirportType] = useState<AirportType>("to");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-[95%] sm:w-[85%] mt-10">

      {/* 🔹 MAIN TABS */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-6">
        {["Outstation", "Local", "Airport", "Tour"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as MainTab)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition
              ${
                tab === t
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-500"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 🔹 SUB OPTIONS */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">

        {/* One Way / Round Trip (Outstation & Tour) */}
        {(tab === "Outstation" || tab === "Tour") && (
          <Toggle
            left="One Way"
            right="Round Trip"
            value={tripType}
            onChange={(v) => setTripType(v as TripType)}
          />
        )}

        {/* Airport To / From */}
        {tab === "Airport" && (
          <Toggle
            left="To Airport"
            right="From Airport"
            value={airportType}
            onChange={(v) => setAirportType(v as AirportType)}
          />
        )}
      </div>

      {/* 🔹 FORM FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Field label="Pickup location" placeholder="Visakhapatnam" />

        {/* Conditional second field */}
        {tab !== "Local" && (
          <Field
            label={tab === "Airport" ? "Airport" : "Drop location"}
            placeholder={
              tab === "Airport"
                ? "Visakhapatnam International Airport"
                : "Enter destination"
            }
          />
        )}

        {/* Date */}
        <DateField label="Journey date" />

        {/* Return date */}
        {tripType === "round" && (
          <DateField label="Return date" />
        )}

      </div>
    </div>
  );
};

export default CabSearchBox;


const Field = ({
    label,
    placeholder,
  }: {
    label: string;
    placeholder: string;
  }) => (
    <div className="border rounded-xl p-4 flex gap-4">
      <FaMapMarkerAlt className="text-blue-600 mt-1" />
      <div className="w-full">
        <p className="text-sm text-blue-600 font-semibold mb-1">{label}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-none text-base font-medium"
        />
      </div>
    </div>
  );
  
  const DateField = ({ label }: { label: string }) => (
    <div className="border rounded-xl p-4 flex gap-4">
      <FaCalendarAlt className="text-blue-600 mt-1" />
      <div className="w-full">
        <p className="text-sm text-blue-600 font-semibold mb-1">{label}</p>
        <input
          type="date"
          className="w-full outline-none text-base font-medium"
        />
      </div>
    </div>
  );
  
  const Toggle = ({
    left,
    right,
    value,
    onChange,
  }: {
    left: string;
    right: string;
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div className="flex items-center gap-2 border rounded-full p-1">
      {[left, right].map((label, i) => {
        const v = i === 0 ? "oneway" : "round";
        return (
          <button
            key={label}
            onClick={() => onChange(v)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition
              ${
                value === v
                  ? "bg-blue-600 text-white"
                  : "text-gray-500"
              }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
  