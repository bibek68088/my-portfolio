import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import { ConfigProvider, Form, Input, theme } from "antd";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = ({ isDark }: { isDark: boolean }) => {
  const [form] = Form.useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onFinish = (values: FormValues): void => {
    setIsSubmitting(true);
    console.log("Form values:", values);
    setTimeout(() => {
      alert("Message sent successfully!");
      form.resetFields();
      setIsSubmitting(false);
    }, 1000);
  };

  const onFinishFailed = (): void => {
    console.log("Form validation failed");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-yellow-400 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container px-5 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-2 text-gray-900 dark:text-white">
              Contact
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <MapPinIcon className="w-6 h-6 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Location
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    New Baneshwor-10, Kathmandu, Nepal
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <PhoneIcon className="w-6 h-6 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Phone
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    +977 980-867 2095
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <EnvelopeIcon className="w-6 h-6 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Email
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    bibek.tamang@example.com
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h2>

            <ConfigProvider
              theme={{
                algorithm: isDark
                  ? theme.darkAlgorithm
                  : theme.defaultAlgorithm,
                token: {
                  colorPrimary: "#facc15",
                  borderRadius: 8,
                },
              }}
            >
              <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="space-y-4"
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Name is required" },
                    {
                      pattern: /^[a-zA-Z\s]{2,50}$/,
                      message: "Please enter a valid name",
                    },
                  ]}
                  className="mb-6"
                >
                  <Input
                    placeholder="Full Name"
                    prefix={<UserIcon className="w-4 h-4 text-gray-400" />}
                    size="large"
                    className="contact-input"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                  className="mb-6"
                >
                  <Input
                    type="email"
                    placeholder="Email Address"
                    prefix={<EnvelopeIcon className="w-4 h-4 text-gray-400" />}
                    size="large"
                    className="contact-input"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  rules={[{ required: true, message: "Message is required" }]}
                  className="mb-6"
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="contact-textarea resize-none"
                  />
                </Form.Item>

                <Form.Item className="mb-0">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Base input styles */
        .contact-input input,
        .contact-textarea textarea {
          transition: all 0.3s ease !important;
        }

        /* Light mode styles */
        .contact-input input {
          background-color: #ffffff !important;
          border-color: #d1d5db !important;
          color: #111827 !important;
        }
        
        .contact-textarea textarea {
          background-color: #ffffff !important;
          border-color: #d1d5db !important;
          color: #111827 !important;
        }

        .contact-input input::placeholder,
        .contact-textarea textarea::placeholder {
          color: #9ca3af !important;
        }

        /* Dark mode styles - when parent has dark class */
        .dark .contact-input input {
          background-color: #374151 !important;
          border-color: #4b5563 !important;
          color: #f9fafb !important;
        }
        
        .dark .contact-textarea textarea {
          background-color: #374151 !important;
          border-color: #4b5563 !important;
          color: #f9fafb !important;
        }
        
        .dark .contact-input input::placeholder,
        .dark .contact-textarea textarea::placeholder {
          color: #9ca3af !important;
        }

        /* Hover states */
        .contact-input input:hover,
        .contact-textarea textarea:hover {
          border-color: #facc15 !important;
        }

        .dark .contact-input input:hover,
        .dark .contact-textarea textarea:hover {
          border-color: #facc15 !important;
          background-color: #4b5563 !important;
        }
        
        /* Focus states */
        .contact-input input:focus,
        .contact-textarea textarea:focus {
          border-color: #facc15 !important;
          box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.2) !important;
        }

        .dark .contact-input input:focus,
        .dark .contact-textarea textarea:focus {
          background-color: #4b5563 !important;
        }

        /* Prefix icon color in dark mode */
        .dark .contact-input .ant-input-prefix {
          color: #9ca3af !important;
        }

        /* Error states */
        .ant-form-item-has-error .contact-input input,
        .ant-form-item-has-error .contact-input input:hover,
        .ant-form-item-has-error .contact-input input:focus,
        .ant-form-item-has-error .contact-textarea textarea,
        .ant-form-item-has-error .contact-textarea textarea:hover,
        .ant-form-item-has-error .contact-textarea textarea:focus {
          border-color: #ef4444 !important;
        }

        /* Error message styling */
        .ant-form-item-explain-error {
          color: #ef4444 !important;
        }

        /* Remove any Ant Design default dark theme overrides */
        .ant-input-affix-wrapper {
          background: transparent !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
