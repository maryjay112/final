import { useState } from "react";

export default function AddManagementForm() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    bio: "",
    email: "",
    linkedin: "",
    image: "/default.jpg",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      socialLinks: {
        email: formData.email,
        linkedin: formData.linkedin,
      },
    };

    const res = await fetch("/api/management", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        position: "",
        bio: "",
        email: "",
        linkedin: "",
        image: "/default.jpg",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Management Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="bio"
          placeholder="Biography"
          value={formData.bio}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded h-24"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image path (e.g. /rector.jpg)"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button type="submit" className="bg-poly-blue-600 text-white px-4 py-2 rounded hover:bg-poly-blue-500">
          Add Member
        </button>
      </form>
      {success && <p className="text-green-600 mt-4">🎉 Member added successfully!</p>}
    </div>
  );
}
