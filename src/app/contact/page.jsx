"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const text = "Say Hello";

  const form = useRef();

  const validateForm = () => {
    const formData = new FormData(form.current);
    const email = formData.get("email");
    const message = formData.get("message");

    // Check if fields are empty
    if (!email || !message) {
      setValidationError("Please fill in all fields");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError("Please enter a valid email address");
      return false;
    }

    // Check message length
    if (message.trim().length < 10) {
      setValidationError("Message must be at least 10 characters long");
      return false;
    }

    setValidationError("");
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Reset states
    setError(false);
    setSuccess(false);
    setValidationError("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check if environment variables are configured
    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      setError(true);
      setValidationError(
        "Email service is not configured. Please contact the administrator."
      );
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();

          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.error("EmailJS Error:", error);
          setValidationError(
            "Failed to send message. Please try again or contact me directly."
          );
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 lg:py-0">
        {/* TEXT CONTAINER */}
        <div className="min-h-[30vh] lg:h-full lg:w-1/2 flex items-center justify-center text-6xl flex-shrink-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="min-h-[50vh] lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 md:p-12 lg:p-24 overflow-y-auto"
        >
          {/* <input type="hidden" name="name" value="Portfolio Visitor" /> */}
          <span>Dear Songtao Dev,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none focus:border-b-purple-400 transition-colors"
            name="message"
            disabled={loading}
            required
          />
          <span>My mail address is:</span>
          <input
            name="email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none focus:border-b-purple-400 transition-colors"
            disabled={loading}
            required
          />
          <span>Regards</span>

          <button
            type="submit"
            disabled={loading}
            className={`rounded font-semibold text-gray-600 p-4 transition-all ${loading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-200 hover:bg-purple-300 hover:scale-105"
              }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send"
            )}
          </button>

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-sm md:text-base">
                Your message has been sent successfully! I&apos;ll get back to you
                soon.
              </span>
            </motion.div>
          )}

          {/* Error Message */}
          {(error || validationError) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-start gap-2"
            >
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <span className="font-semibold text-sm md:text-base block mb-1">
                  {validationError || "Something went wrong!"}
                </span>
                {error && !validationError && (
                  <span className="text-xs md:text-sm">
                    Please check the EMAILJS_SETUP_GUIDE.md file for
                    configuration instructions.
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
