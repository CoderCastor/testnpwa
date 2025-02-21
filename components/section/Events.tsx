"use client";

import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "National Pharmacy Seminar",
    date: "March 10, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Mumbai Convention Center",
  },
  {
    id: 2,
    title: "Healthcare Innovations Expo",
    date: "April 5, 2025",
    time: "9:30 AM - 5:00 PM",
    location: "Delhi Trade Center",
  },
  {
    id: 3,
    title: "Pharmaceutical Research Conference",
    date: "May 20, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Bangalore Science Park",
  },
];

const Events = () => {
  return (
    <section id="Events" className="py-12 bg-gray-100 mt-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-2">
                📅 <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-600">
                ⏰ <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-600">
                📍 <strong>Location:</strong> {event.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;