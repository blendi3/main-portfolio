/* eslint-disable react/no-unescaped-entities */
"use client"; // This tells Next.js that this component is client-side

import React, {
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from "react";
// import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import {
  contactFormSchema,
  ValidationError,
} from "@/lib/validation/contactSchema";
// import * as yup from "yup";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
    // Optional: clear error on input change
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate single field on blur
  const handleBlur = async (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    try {
      // Use Yup's .reach to get field schema
      await contactFormSchema.validateAt(name, { ...form, [name]: value });
      // Clear error for this field if valid
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err) {
      if (err instanceof ValidationError) {
        setFormErrors((prev) => ({ ...prev, [name]: err.message }));
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await contactFormSchema.validate(form, { abortEarly: false });
      setFormErrors({});
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        const errors: { [key: string]: string } = {};
        validationError.inner.forEach((err) => {
          if (err.path && err.message) {
            errors[err.path] = err.message;
          }
        });
        setFormErrors(errors);
        return; // stop submission
      }
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setLoading(false);
      toast.success("Message successfully sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Error sending message.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section id="contact" className="my-20">
        <div className="relative flex items-center justify-center flex-col space-y-8 px-6 sm:px-12 py-16 bg-[#10152e] rounded-xl shadow-lg">
          <div className="flex flex-col text-start gap-5">
            <h3 className="text-3xl font-semibold text-white">
              Let's work together
            </h3>
            <p className="text-lg text-gray-300 max-w-xl">
              I'm excited to connect with you! Whether you have a project in
              mind, a question, or just want to say hi, feel free to drop me a
              message. I'll get back to you as soon as possible.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-xl space-y-6"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-lg text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                className="w-full p-4 bg-[#1a1f38] text-white border border-[#3c4451] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] transition duration-300"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
                className="w-full p-4 bg-[#1a1f38] text-white border border-[#3c4451] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] transition duration-300"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg text-white mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                placeholder="Your message"
                className="w-full p-4 bg-[#1a1f38] text-white border border-[#3c4451] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667eea] transition duration-300"
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>

            <MagicButton
              title={loading ? "Sending..." : "Send Message"}
              icon={<FaLocationArrow />}
              position="right"
              disabled={loading}
            />
          </form>
        </div>
      </section>
    </>
  );
};
