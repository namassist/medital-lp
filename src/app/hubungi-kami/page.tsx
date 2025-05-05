"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layouts/main";

export default function TentangKami() {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://zzxtioeyooyyrssqubhr.supabase.co/functions/v1/resend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        alert("Pesan berhasil dikirim!");
        setForm({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        alert("Gagal mengirim pesan.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim pesan.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-20">
        <div className="px-8 space-y-6">
          <h1 className="text-[#3a3a3a] capitalize text-3xl font-semibold">
            Contact Form
          </h1>

          <p className="text-[#4b4f58]">
            Hello, please use the form below in order to get in touch with our
            team.
          </p>

          <div className="flex flex-col lg:flex-row w-full items-center gap-[32px]">
            <div className="w-full lg:w-6/12">
              <label
                htmlFor="firstname"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First Name *
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={form.firstname}
                    onChange={handleChange}
                    className="block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12">
              <label
                htmlFor="lastname"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last Name *
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    className="block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email *
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Message *
            </label>
            <div className="mt-2">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              ></textarea>
            </div>
          </div>

          <button
            className="px-6 py-3 bg-[#0170B9] text-white disabled:opacity-60"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
