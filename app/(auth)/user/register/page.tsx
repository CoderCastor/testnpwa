"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    institution: "",
    passingYear: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsRegistered(true);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
          Sign Up
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow-xl rounded-lg sm:px-6">
          {isRegistered ? (
            <div className="text-center text-green-600 font-bold">
              Registration Successful!
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded-md"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border rounded-md"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded-md"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
              />
              <select
                className="w-full p-2 border rounded-md"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData({ ...formData, qualification: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select Qualification
                </option>
                <option value="Dpharm">Dpharm</option>
                <option value="Bpharm">Bpharm</option>
                <option value="Mpharm">Mpharm</option>
                <option value="other">Other</option>
              </select>
              <input
                type="text"
                placeholder="Institution Name"
                className="w-full p-2 border rounded-md"
                value={formData.institution}
                onChange={(e) =>
                  setFormData({ ...formData, institution: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Year of Passing"
                className="w-full p-2 border rounded-md"
                value={formData.passingYear}
                onChange={(e) =>
                  setFormData({ ...formData, passingYear: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Work Experience (if any)"
                className="w-full p-2 border rounded-md"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded-md"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full p-2 text-white rounded-md ${
                  loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Registering..." : "Register"}
              </button>
              <div className="text-center">
                <Link
                  href="/member/login"
                  className="text-blue-600 hover:text-blue-500 text-sm"
                >
                  Already have an account? Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
