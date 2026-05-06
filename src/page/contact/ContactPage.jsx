import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) {
      alert("សូមបំពេញព័ត៌មានទាំងអស់!");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", contact: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen px-4 py-12 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-blue-900 dark:text-blue-400 sm:text-4xl">
            ទំនាក់ទំនងមកកាន់យើង
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            សម្រាប់ព័ត៌មានបន្ថែមអំពីការចុះឈ្មោះ ឬសាកសួរផ្សេងៗ សូមទាក់ទងមកយើង។
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* CONTACT INFO */}
          <div className="p-8 bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-2xl dark:border-gray-700">
            <h2 className="pb-2 mb-6 text-2xl font-semibold text-gray-800 border-b dark:text-white dark:border-gray-700">
              ព័ត៌មានសាលា
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-blue-700 dark:text-blue-400" size={26} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">អាសយដ្ឋាន</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ផ្លូវជាតិលេខ ៥, កំពង់ឆ្នាំង
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-blue-700 dark:text-blue-400" size={26} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">លេខទូរស័ព្ទ</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    023 123 456 / 012 345 678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-blue-700 dark:text-blue-400" size={26} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">អ៊ីមែល</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    manveasna1994@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-blue-700 dark:text-blue-400" size={26} />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">ម៉ោងធ្វើការ</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ចន្ទ - សុក្រ: 7:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="p-8 bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-2xl dark:border-gray-700">
            <h2 className="pb-2 mb-6 text-2xl font-semibold text-gray-800 border-b dark:text-white dark:border-gray-700">
              ផ្ញើសារ
            </h2>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full dark:bg-green-900">
                  <Send className="text-green-600 dark:text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  សាររបស់អ្នកត្រូវបានផ្ញើ រួចរាល់!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  យើងនឹងទាក់ទងទៅអ្នកឆាប់ៗនេះ។
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    ឈ្មោះ *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    អ៊ីមែល ឬ លេខទូរស័ព្ទ *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    សារ *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg resize-y focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 font-bold text-white bg-blue-900 rounded-xl hover:bg-blue-800 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                >
                  {isSubmitting ? (
                    <>កំពុងផ្ញើ...</>
                  ) : (
                    <>
                      ផ្ញើសារ <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-12">
          <div className="w-full overflow-hidden bg-gray-300 shadow-inner rounded-2xl dark:bg-gray-700 h-80 md:h-96">
            <iframe
              title="Google Map - Preah Bat Samdach Preah Baramneath Norodom Sihamoni"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499644.2741533576!2d104.39773468844629!3d11.941864769151222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310eb92ff842b753%3A0x6948eac0f2c6b09c!2sPreah%20Bat%20Samdach%20Preah%20Baramneath%20Norodom%20Sihamoni!5e0!3m2!1sen!2skh!4v1778056116449!5m2!1sen!2skh"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          {/* Open in Google Maps Button */}
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/PRbp79pqwqnYDt8d6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-blue-700 transition-colors bg-white border border-blue-200 rounded-full hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-gray-700"
            >
              <MapPin size={18} />
              បើកក្នុង Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;