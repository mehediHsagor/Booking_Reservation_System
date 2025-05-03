import { useState } from "react";

const Addcategory = () => {
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);

  const handleAddCategory = async (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const image = form.image.value;
    const description = form.description.value;

    const newCategory = { name, type, image, description };

    try {
      const response = await fetch('http://localhost:5000/category', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      const data = await response.json();
      setCategories((prev) => [...prev, data]);
      setMessage("✅ Category added successfully!");
      form.reset();
    } catch (error) {
      console.error("Error adding category:", error);
      setMessage("❌ Failed to add category.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Hotel Category</h2>

        {message && (
          <p
            className={`text-center font-medium mb-4 ${
              message.includes("successfully") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleAddCategory} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Hotel Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter hotel name"
              className="mt-1 block w-full input input-bordered border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hotel Type</label>
            <select
              name="type"
              className="mt-1 block w-full input input-bordered border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select hotel type</option>
              <option value="Resort">Resort</option>
              <option value="Boutique">Boutique</option>
              <option value="Budget">Budget</option>
              <option value="Luxury">Luxury</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hotel Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="mt-1 block w-full input input-bordered border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hotel Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              rows={3}
              className="mt-1 block w-full input input-bordered border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="pt-4">
            <button type="submit" className="btn btn-primary w-full text-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcategory;
