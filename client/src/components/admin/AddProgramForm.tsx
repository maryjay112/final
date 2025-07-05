import { useState } from "react";

interface FormData {
  title: string;
  description: string;
  duration: string;
  category: string;
  icon: string;
  image: string;
  color: string;
  featured: boolean;
}

export default function AddProgramForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    duration: "",
    category: "",
    icon: "🎓",
    image: "/default-program.jpg",
    color: "#1D4ED8",
    featured: false,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          title: "",
          description: "",
          duration: "",
          category: "",
          icon: "🎓",
          image: "/default-program.jpg",
          color: "#1D4ED8",
          featured: false,
        });
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Program</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Program Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration (e.g. 2 years)"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g. Engineering)"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          placeholder="Icon (e.g. 🎓)"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image path or URL"
          className="w-full p-2 border rounded"
        />
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="w-full p-2 rounded border"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
          <span>Featured</span>
        </label>
        <button
          type="submit"
          className="bg-poly-blue-600 text-white px-4 py-2 rounded hover:bg-poly-blue-500"
        >
          Save Program
        </button>
        {success && (
          <p className="text-green-600 text-sm mt-3">
            🎉 Program added successfully!
          </p>
        )}
      </form>
    </div>
  );
}
