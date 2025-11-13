import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";

// AddProperty.jsx
// Default-exported React component. Uses Tailwind CSS classes (assumes Tailwind already set up).
// Props:
//  - user: { name, email }  (optional; falls back to demo values)
//  - onSubmit: async function(data) => void  (optional; if provided, called with form data)

export default function AddProperty(  ) {
  const {user} = useAuth();
  const [form, setForm] = useState({
    PropertyName: "",
    Description: "",
    Category: "Sale",
    Price: "",
    Location: "",
    ImageLink: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Simple image preview update with a short debounce
    // const id = setTimeout(() => setPreviewSrc(form.ImageLink || ""), 300);
    // return () => clearTimeout(id);
  }, [form.ImageLink]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.PropertyName.trim()) e.PropertyName = "Property name is required.";
    if (!form.Description.trim()) e.Description = "Description is required.";
    if (!form.Location.trim()) e.Location = "Location is required.";
    if (!form.Price || Number(form.Price) <= 0) e.Price = "Enter a valid Price.";
    if (!form.ImageLink && !isValidUrl(form.ImageLink)) e.ImageLink = "Enter a valid image URL.";
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
      UserName: user.displayName,
      UserEmail: user.email,
      Date: new Date().toISOString().split("T")[0],
    };

    setSubmitting(true);
    try {
      const response = await fetch('https://back-end-henna-six.vercel.app/add-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add property");
      setSuccess("Property added successfully.");
      toast.success("Property added successfully.");
      setForm({ PropertyName: "", Description: "", Category: "Sale", Price: "", Location: "", ImageLink: "" });
      // setPreviewSrc("");
    } catch (err) {
      setErrors({ submit: err?.message || "Failed to submit" });
      toast.error(err?.message || "Failed to add property.");
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
                name="PropertyName"
                value={form.PropertyName}
                onChange={handleChange}
                placeholder="e.g., Sunnyvale Modern Apartment"
                className={`form-input w-full rounded-lg border ${errors.PropertyName ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-300 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 px-4 text-base`}
                type="text"
              />
              {errors.PropertyName && <span className="mt-1 text-sm text-red-500">{errors.PropertyName}</span>}
            </label>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Description</p>
              <textarea
                name="Description"
                value={form.Description}
                onChange={handleChange}
                placeholder="Describe the key features of your property..."
                className={`form-input w-full rounded-lg border ${errors.Description ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary min-h-36 p-4 text-base`}
              />
              {errors.Description && <span className="mt-1 text-sm text-red-500">{errors.Description}</span>}
            </label>
          </div>

          {/* Category */}
          <div>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Category</p>
              <select
                name="Category"
                value={form.Category}
                onChange={handleChange}
                className="form-select w-full rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black focus:border-primary focus:ring-primary h-12 px-4 text-base"
              >
                <option value="Sale">Sale</option>
                <option vlaue="Rent">Rent</option>
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
                  name="Price"
                  value={form.Price}
                  onChange={handleChange}
                  placeholder="250000"
                  type="number"
                  className={`form-input block w-full rounded-lg border ${errors.Price ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 pl-7 pr-4 text-base`}
                />
              </div>
              {errors.Price && <span className="mt-1 text-sm text-red-500">{errors.Price}</span>}
            </label>
          </div>

          {/* Location */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Location</p>
              <input
                name="Location"
                value={form.Location}
                onChange={handleChange}
                placeholder="e.g., 123 Main St, Anytown, USA"
                type="text"
                className={`form-input w-full rounded-lg border ${errors.Location ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 px-4 text-base`}
              />
              {errors.Location && <span className="mt-1 text-sm text-red-500">{errors.Location}</span>}
            </label>
          </div>

          {/* Image URL */}
          <div className="sm:col-span-2">
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-6 text-gray-900 dark:text-black pb-2">Image URL</p>
              <input
                name="ImageLink"
                value={form.ImageLink}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                type="url"
                className={`form-input w-full rounded-lg border ${errors.ImageLink ? "border-red-500" : "border-gray-300"} dark:border-gray-300 bg-white dark:bg-white text-gray-900 dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary h-12 px-4 text-base`}
              />
              {errors.ImageLink && <span className="mt-1 text-sm text-red-500">{errors.ImageLink}</span>}
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
              <input className="form-input w-full rounded-lg border bg-gray-100 border-gray-300 dark:border-gray-300 dark:bg-gray-100 text-gray-500 dark:text-gray-400  cursor-not-allowed h-12 px-4 text-base" readOnly type="text" value={user.displayName} />
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
            <button type="button" onClick={() => { setForm({ PropertyName: "", Description: "", Category: "For Sale", Price: "", Location: "", ImageLink: "" }); setPreviewSrc(""); setErrors({}); }} className="rounded-lg px-4 h-12 border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-200 text-base font-medium hover:cursor-pointer">Reset</button>

            <button type="submit" disabled={submitting} className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 md:px-6 bg-primary text-white text-md  md:text-base font-bold leading-normal tracking-wide hover:bg-blue-400 bg-blue-400 transition-colors">
              {submitting ? "Adding..." : "Add Property"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
