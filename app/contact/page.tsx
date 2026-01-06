// app/contact/page.tsx  (Server Component)
import { Metadata } from "next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm"; // client component
import FAQSection from "@/app/components/FAQSection";


export const metadata: Metadata = {
  title: "Contact KKR Events | Book Event Services",
  description:
    "Contact KKR Events to book DJ, Chenda Melam, Sannayi Melam and wedding entertainment services.",
};

const faqs = [
  {
    question: "How can I book KKR Events services?",
    answer:
      "You can book our services by filling out the contact form or reaching out via WhatsApp/phone. Our team will respond instantly.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "We provide services across Andhra Pradesh and Telangana including major cities, towns, and surrounding villages.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We offer DJ services, Chenda Melam, Sannayi Melam, Teenmaar Bands, Saxophone players, and customized entertainment for weddings, corporate events, and festivals.",
  },
  {
    question: "Do you provide customized performance durations?",
    answer:
      "Yes! We tailor our performances based on the event type, duration, and your preferences.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact KKR Events
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12">
            Get in touch to book professional DJ, Chenda Melam, Sannayi Melam, and other wedding & event entertainment services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[var(--brand)]">Get In Touch</h2>
            <div className="flex items-start gap-4">
              <FaPhone className="w-6 h-6 text-[var(--brand)] mt-1" />
              <div>
                <p className="text-gray-300">Phone</p>
                <p className="font-semibold">+91 7288945110</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="w-6 h-6 text-[var(--brand)] mt-1" />
              <div>
                <p className="text-gray-300">Email</p>
                <p className="font-semibold">info@kkrevents.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-[var(--brand)] mt-1" />
              <div>
                <p className="text-gray-300">Location</p>
                <p className="font-semibold">Andhra Pradesh & Telangana, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Client Component) */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection faqs={faqs} />
    </main>
  );
}
