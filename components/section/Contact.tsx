'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setAlertMessage('Please enter valid details');
      setAlertType('error');
      return;
    }
    console.log('Form submitted:', formData);
    setAlertMessage('Form submitted successfully!');
    setAlertType('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="Contact" className="max-w-6xl mx-auto p-6">
      {alertMessage && (
        <div className={`mb-4 p-3 rounded text-white ${alertType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {alertMessage}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-green-600" size={20} />
                <div>
                  <p className="text-gray-600">Phone:</p>
                  <p className="font-medium">95953 57070 / 99223 84447</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-600" size={20} />
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-medium">npw24jobfair@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-green-600" size={20} />
                <div>
                  <p className="text-gray-600">Address:</p>
                  <p className="font-medium">Mahalaxmi Lawns, 100 ft DP Road,</p>
                  <p className="font-medium">Next to Rajaram Bridge,</p>
                  <p className="font-medium">Karvenagar, Pune - 411052</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.847561481414!2d73.81699!3d18.491599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f2f8b11b7%3A0x84a2913d3e6bee23!2sMahalaxmi%20Lawns!5e0!3m2!1sen!2sin!4v1708308000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
