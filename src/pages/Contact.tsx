import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FORM_ENDPOINT = "https://formspree.io/f/xrbaygdo";

const ContactSchema = z.object({
  subject: z
    .string()
    .min(3, "Rubriken måste vara minst 3 tecken")
    .max(120, "Rubriken får vara max 120 tecken"),
  message: z
    .string()
    .min(10, "Meddelandet måste vara minst 3 tecken")
    .max(5000, "Meddelandet är för långt (max 5000 tecken)"),
  email: z.email("Ange en giltig e‑post").max(120, "E‑posten är för lång"),
  company: z.string().optional(),
});

type ContactInputs = z.infer<typeof ContactSchema>;
const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInputs>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactInputs) => {
    if ((data.company ?? "").trim() !== "") return;

    setStatus("loading");
    setErrorMsg(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `[Portfolio] ${data.subject}`,
          message: data.message,
          reply_to: data.email,
        }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.message || "Kunde inte skicka meddelandet");
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg(err?.message || "Något gick fel");
    }
  };

  return (
    <section className="mx-auto max-w-xl p-6">
      <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <article className="hidden">
          <label htmlFor="company">Företag</label>
          <input id="company" type="text" {...register("company")} />
        </article>
        <article>
          {/*        <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Ämne
          </label> */}
          <input
            id="subject"
            type="text"
            className="w-full rounded-2xl border p-3 focus:outline-none focus:ring"
            placeholder="Ämne"
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </article>
        <article>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Din e‑post
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-2xl border p-3 focus:outline-none focus:ring"
            placeholder="namn@exempel.se"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </article>
        <article>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Meddelande
          </label>
          <textarea
            id="message"
            rows={8}
            className="w-full rounded-2xl border p-3 focus:outline-none focus:ring"
            placeholder="Skriv ditt meddelande här..."
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </article>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl px-5 py-3 font-medium shadow hover:shadow-md border bg-black text-white disabled:opacity-60"
        >
          {status === "loading" ? "Skickar…" : "Skicka meddelande"}
        </button>
        {status === "success" && (
          <p className="text-green-700">Tack! Meddelandet är skickat.</p>
        )}
        {status === "error" && (
          <p className="text-red-700">
            {errorMsg ?? "Kunde inte skicka just nu."}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
