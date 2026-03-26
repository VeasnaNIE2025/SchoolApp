import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ចំណងជើងធំ */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-4">
            ទំនាក់ទំនងមកកាន់យើង
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            សម្រាប់ព័ត៌មានបន្ថែមអំពីការចុះឈ្មោះចូលរៀន ឬសាកសួរព័ត៌មានផ្សេងៗ សូមទាក់ទងមកយើងខ្ញុំតាមរយៈទម្រង់ខាងក្រោម ឬព័ត៌មានទំនាក់ទំនងផ្ទាល់។
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ផ្នែកព័ត៌មានទំនាក់ទំនង */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">ព័ត៌មានសាលា</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-blue-700 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-gray-900">អាសយដ្ឋាន</h3>
                  <p className="text-gray-600">ផ្លូវជាតិលេខ ៥, ឃុំអូរឬស្សី, កំពង់ត្រឡាច, កំពង់ឆ្នាំង</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-blue-700 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-gray-900">លេខទូរស័ព្ទ</h3>
                  <p className="text-gray-600">023 123 456 / 012 345 678</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-blue-700 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-gray-900">អ៊ីមែល</h3>
                  <p className="text-gray-600">manveasna1994@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-blue-700 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-gray-900">ម៉ោងធ្វើការ</h3>
                  <p className="text-gray-600">ចន្ទ - សុក្រ: 7:00 ព្រឹក - 5:00 ល្ងាច</p>
                </div>
              </div>
            </div>
          </div>

          {/* ផ្នែកទម្រង់ផ្ញើសារ */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">ផ្ញើសារមកកាន់យើង</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ឈ្មោះពេញ</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="បញ្ចូលឈ្មោះរបស់អ្នក" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">អ៊ីមែល ឬលេខទូរស័ព្ទ</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">សាររបស់អ្នក</label>
                <textarea rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="តើលោកអ្នកចង់សាកសួរអំពីអ្វី?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">
                ផ្ញើសារចេញ
              </button>
            </form>
          </div>
        </div>

        {/* ផ្នែកផែនទី (Iframe Google Maps) */}
        <div className="mt-12">
          <div className="bg-gray-300 w-full h-80 rounded-lg overflow-hidden shadow-inner flex items-center justify-center">
             {/* ជំនួស src ខាងក្រោមជាមួយ link ផែនទីពិតប្រាកដរបស់សាលា */}
             <iframe 
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.69745749749!2d104.917445!3d11.573656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095144f6f46377%3A0x6a9404090757a31b!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1620000000000"
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy">
             </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;