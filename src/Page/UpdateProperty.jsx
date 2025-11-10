import React, { useState } from 'react';

function UpdateProperty() {
  const [form, setForm] = useState({
    propertyName: 'Modern Downtown Loft',
    description:
      'A beautiful and spacious loft in the heart of the city, perfect for professionals. Comes fully furnished with modern amenities and a stunning city view.',
    category: 'For Rent',
    price: 2500,
    location: '123 Main Street, Anytown, USA',
    imageUrl: 'https://images.unsplash.com/photo-1593696140826-c58b02198d4a',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      
      {/* Main Content */}
      <main className="flex-1 mx-3 md:mx-10 lg:mx-20 xl:mx-40 px-6 py-12">
        <h1 className="text-4xl font-black mb-2 text-gray-900 dark:text-black">Update Your Property</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Edit the details for 'Modern Downtown Loft' below.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-gray-300 dark:border-gray-300 space-y-8">
          {/* Owner Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Owner Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">User Name</p>
                <input disabled value="John Doe" className="rounded-lg border-none bg-background-light dark:bg-background-dark h-12 p-3 text-gray-600 cursor-not-allowed" />
              </label>
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">User Email</p>
                <input disabled value="john.doe@email.com" className="rounded-lg border-none bg-background-light dark:bg-background-dark h-12 p-3 text-gray-600 cursor-not-allowed" />
              </label>
            </div>
          </div>

          {/* Property Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex flex-col md:col-span-2">
                <p className="pb-2 text-sm font-medium">Property Name</p>
                <input
                  name="propertyName"
                  value={form.propertyName}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <p className="pb-2 text-sm font-medium">Description</p>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 p-3 min-h-36"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Category</p>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                >
                  <option>For Sale</option>
                  <option>For Rent</option>
                  <option>Sold</option>
                </select>
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Price</p>
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Location</p>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Image URL</p>
                <input
                  name="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 border-t border-gray-300 dark:border-gray-300 pt-6">
            <button type="button" className="text-gray-600 dark:text-gray-600 hover:text-primary px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 hover:cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="bg-primary text-white px-6 py-3 bg-blue-500 rounded-lg font-bold hover:bg-blue-600 hover:cursor-pointer">
              Update Property
            </button>
          </div>
        </form>
      </main>

    </div>
  );
}

export default UpdateProperty;