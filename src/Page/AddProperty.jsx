import React, { useState, useEffect } from "react";

// AddProperty.jsx
// Default-exported React component. Uses Tailwind CSS classes (assumes Tailwind already set up).
// Props:
//  - user: { name, email }  (optional; falls back to demo values)
//  - onSubmit: async function(data) => void  (optional; if provided, called with form data)

export default function AddProperty({ user = { name: "John Doe", email: "john.doe@example.com" }, onSubmit } ) {
  const [form, setForm] = useState({
    propertyName: "",
    description: "",
    category: "For Sale",
    price: "",
    location: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Simple image preview update with a short debounce
    const id = setTimeout(() => setPreviewSrc(form.imageUrl || ""), 300);
    return () => clearTimeout(id);
  }, [form.imageUrl]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.propertyName.trim()) e.propertyName = "Property name is required.";
    if (!form.description.trim()) e.description = "Description is required.";
    if (!form.location.trim()) e.location = "Location is required.";
    if (!form.price || Number(form.price) <= 0) e.price = "Enter a valid price.";
    if (!form.imageUrl && !isValidUrl(form.imageUrl)) e.imageUrl = "Enter a valid image URL.";
    return e;
  }

  function isValidUrl(url) {
    try {
      // basic validation
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setSuccess(null);
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }

    const payload = {
      ...form,
      ownerName: user.name,
      ownerEmail: user.email,
      createdAt: new Date().toISOString(),
    };

    setSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // default behavior: log to console and simulate small delay
        await new Promise((r) => setTimeout(r, 600));
        // eslint-disable-next-line no-console
        console.log("AddProperty payload:", payload);
      }
      setSuccess("Property added successfully.");
      setForm({ propertyName: "", description: "", category: "For Sale", price: "", location: "", imageUrl: "" });
      setPreviewSrc("");
    } catch (err) {
      setErrors({ submit: err?.message || "Failed to submit" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-black">Create Your Listing</h1>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-500">Fill out the form below to publish your property on HomeNest.</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-8 rounded-xl border border-gray-200 dark:border-gray-200 bg-white dark:bg-background-dark/50 p-6 md:p-10 shadow-sm">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          {/* Property Name */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Property Name</p>
              <input
                name="propertyName"
                value={form.propertyName}
                onChange={handleChange}
                placeholder="e.g., Sunnyvale Modern Apartment"
                className={`form-input w-full rounded-lg border ${errors.propertyName ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-300 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 px-4 text-base`}
                type="text"
              />
              {errors.propertyName && <span className="mt-1 text-sm text-red-500">{errors.propertyName}</span>}
            </label>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Description</p>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the key features of your property..."
                className={`form-input w-full rounded-lg border ${errors.description ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary min-h-36 p-4 text-base`}
              />
              {errors.description && <span className="mt-1 text-sm text-red-500">{errors.description}</span>}
            </label>
          </div>

          {/* Category */}
          <div>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Category</p>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-select w-full rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black focus:border-primary focus:ring-primary h-12 px-4 text-base"
              >
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </label>
          </div>

          {/* Price */}
          <div>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Price</p>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
                </div>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="250000"
                  type="number"
                  className={`form-input block w-full rounded-lg border ${errors.price ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 pl-7 pr-4 text-base`}
                />
              </div>
              {errors.price && <span className="mt-1 text-sm text-red-500">{errors.price}</span>}
            </label>
          </div>

          {/* Location */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Location</p>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g., 123 Main St, Anytown, USA"
                type="text"
                className={`form-input w-full rounded-lg border ${errors.location ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 px-4 text-base`}
              />
              {errors.location && <span className="mt-1 text-sm text-red-500">{errors.location}</span>}
            </label>
          </div>

          {/* Image URL */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Image URL</p>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                type="url"
                className={`form-input w-full rounded-lg border ${errors.imageUrl ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 px-4 text-base`}
              />
              {errors.imageUrl && <span className="mt-1 text-sm text-red-500">{errors.imageUrl}</span>}
            </label>

          </div>
        </div>

        {/* Owner Information */}
        <div className="border-t border-gray-300 dark:border-gray-300 pt-8">
          <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-black">Owner Information</h3>
          <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">This information is auto-filled from your account.</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Your Name</p>
              <input className="form-input w-full rounded-lg border bg-gray-100 border-gray-300 dark:border-gray-300 dark:bg-gray-100 text-gray-500 dark:text-gray-400  cursor-not-allowed h-12 px-4 text-base" readOnly type="text" value={user.name} />
            </div>
            <div>
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Your Email</p>
              <input className="form-input w-full rounded-lg border border-gray-300 dark:border-gray-300 bg-gray-100 dark:bg-gray-100 text-gray-500 dark:text-gray-400  cursor-not-allowed h-12 px-4 text-base" readOnly type="email" value={user.email} />
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="border-t border-gray-300 dark:border-gray-300 pt-8 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}
            {success && <p className="text-sm text-green-600">{success}</p>}
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => { setForm({ propertyName: "", description: "", category: "For Sale", price: "", location: "", imageUrl: "" }); setPreviewSrc(""); setErrors({}); }} className="rounded-lg px-4 h-12 border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-200 text-base font-medium hover:cursor-pointer">Reset</button>

            <button type="submit" disabled={submitting} className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 md:px-6 bg-primary text-white text-md  md:text-base font-bold leading-normal tracking-wide hover:bg-blue-400 bg-blue-400 transition-colors">
              {submitting ? "Adding..." : "Add Property"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
