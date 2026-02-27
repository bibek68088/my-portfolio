import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconUser,
  IconMessage,
  IconSend,
  IconLoader2,
  IconCircleCheck,
  IconCircleX,
} from "@tabler/icons-react";
import SectionHeader from "./SectionHeader";

// ─── EmailJS credentials ───────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template with these variables:
//      {{from_name}}  {{from_email}}  {{message}}
//    Set "To Email" to your own address → copy the Template ID
// 4. Go to Account → Public Key → copy it
// 5. Replace the three strings below (or put them in a .env file)
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

// ─── Types ─────────────────────────────────────────────────────────────────
interface FormValues {
  name: string; // {{name}}
  email: string; // {{email}}
  message: string; // {{message}}
  // {{time}} is injected automatically on submit — not a visible field
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "sending" | "success" | "error";

// ─── Static data ───────────────────────────────────────────────────────────
const contactInfo = [
  { Icon: IconMapPin, label: "Location", value: "New Baneshwor-10, Kathmandu" },
  { Icon: IconPhone, label: "Phone", value: "+977 980-867 2095" },
  { Icon: IconMail, label: "Email", value: "bibeks337@gmail.com" },
];

// ─── Component ─────────────────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  // ── Validation ─────────────────────────────────────────────────────────
  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name || !/^[a-zA-Z\s]{2,50}$/.test(form.name))
      e.name = "Please enter a valid name (letters only, 2–50 chars)";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  // ── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = async (ev: FormEvent): Promise<void> => {
    ev.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setErrors({});

    // Inject {{time}} into the hidden input before sending
    const timeInput =
      formRef.current?.querySelector<HTMLInputElement>('input[name="time"]');
    if (timeInput) {
      timeInput.value = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const updateField =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Together"
          desc="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether you have a big idea or a small project, I'm always open to
              discussing new opportunities. Let's create something remarkable
              together.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 glass-card p-4 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                >
                  <div className="w-10 h-10 rounded-xl glass-tag flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            className="glass-card p-8 rounded-3xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Success state */}
            {status === "success" ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full py-12 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="w-16 h-16 rounded-full glass-tag flex items-center justify-center mx-auto mb-4">
                  <IconCircleCheck size={36} className="text-amber-400" />
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out — I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-amber-400 underline text-sm hover:text-amber-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Send a Message
                </h3>

                {/* Global error banner */}
                {status === "error" && (
                  <motion.div
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.3)",
                    }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <IconCircleX
                      size={18}
                      className="text-red-400 flex-shrink-0"
                    />
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or email me
                      directly at{" "}
                      <a
                        href="mailto:bibeks337@gmail.com"
                        className="underline"
                      >
                        bibeks337@gmail.com
                      </a>
                    </p>
                  </motion.div>
                )}

                {/* Name — matches {{name}} in template */}
                <div>
                  <div className="relative">
                    <IconUser
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: "var(--text-muted)" }}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={updateField("name")}
                      className={`form-input form-input-icon${errors.name ? " border-red-500" : ""}`}
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email — matches {{email}} in template */}
                <div>
                  <div className="relative">
                    <IconMail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ color: "var(--text-muted)" }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={updateField("email")}
                      className={`form-input form-input-icon${errors.email ? " border-red-500" : ""}`}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Hidden time field — injected on submit, matches {{time}} in template */}
                <input type="hidden" name="time" />

                {/* Message */}
                <div>
                  <div className="relative">
                    <IconMessage
                      size={16}
                      className="absolute left-4 top-4 pointer-events-none"
                      style={{ color: "var(--text-muted)" }}
                    />
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={form.message}
                      onChange={updateField("message")}
                      className={`form-input form-input-icon resize-none${errors.message ? " border-red-500" : ""}`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="cta-btn w-full py-4 font-bold text-base disabled:opacity-60"
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="flex"
                      >
                        <IconLoader2 size={18} />
                      </motion.span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message <IconSend size={16} />
                    </span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
