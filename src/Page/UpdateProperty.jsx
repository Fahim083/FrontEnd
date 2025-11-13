import React, { useState , useEffect} from 'react';
import { useParams,Link } from 'react-router';
import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-hot-toast';

function UpdateProperty() {
  const {user} = useAuth();
  const {id} = useParams();
useEffect(() => {
  // Fetch property details from API or data source using the id
  const fetchPropertyDetails = async () => {
    // Simulate an API call
    const response = await fetch(`https://back-end-henna-six.vercel.app/property-details/${id}`); // Replace with actual property ID
    const data = await response.json();
    // Populate form with fetched data
    console.log(data);
    setForm({
      PropertyName: data.PropertyName,
      Description: data.Description,
      Category: data.Category,
      Price: data.Price,
      Location: data.Location,
      ImageLink: data.ImageLink,
    });
  };
  fetchPropertyDetails();
}, [id]);
  
  const [form, setForm] = useState({});
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`https://back-end-henna-six.vercel.app/update-property/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      // console.log('Property updated:', result);
      toast.success("Property updated successfully");

      // Optionally, redirect or show a success message here
      // For example, you could use React Router's useHistory hook to redirect
    } catch (error) {
      toast.error("Failed to update property");
      console.error('Error updating property:', error);
    }
    // console.log('Form submitted:', form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
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
                <input disabled value={user.displayName} className="rounded-lg border-none bg-background-light dark:bg-background-dark h-12 p-3 text-gray-600 cursor-not-allowed" />
              </label>
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">User Email</p>
                <input disabled value={user.email} className="rounded-lg border-none bg-background-light dark:bg-background-dark h-12 p-3 text-gray-600 cursor-not-allowed" />
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
                  name="PropertyName"
                  defaultValue={form?.PropertyName}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <p className="pb-2 text-sm font-medium">Description</p>
                <textarea
                  name="Description"
                  value={form.Description}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 p-3 min-h-36"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Category</p>
                <select
                  name="Category"
                  value={form.Category}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                >
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                  <option value="Sold">Sold</option>
                </select>
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Price</p>
                <input
                  name="Price"
                  type="number"
                  value={form.Price}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Location</p>
                <input
                  name="Location"
                  value={form.Location}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium">Image URL</p>
                <input
                  name="ImageLink"
                  type="url"
                  value={form.ImageLink}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-300 dark:border-gray-300 bg-white dark:bg-gray-50 h-12 p-3"
                />
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 border-t border-gray-300 dark:border-gray-300 pt-6">
            <Link to='/my-property' type="button" className="text-gray-600 dark:text-gray-600 hover:text-primary px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100 hover:cursor-pointer">
              Cancel
            </Link>
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