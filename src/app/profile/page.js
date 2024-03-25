"use client";

import { userProfile as defaultUserProfile } from "@/data";
import { useState, useEffect } from "react";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userProfile, setUserProfile] = useState(defaultUserProfile);

  useEffect(() => {
    const storedUserProfile = localStorage.getItem("userProfile");
    if (storedUserProfile) {
      setUserProfile(JSON.parse(storedUserProfile));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userProfile.name ||
      !userProfile.email ||
      !/^\S+@\S+\.\S+$/.test(userProfile.email)
    ) {
      alert("Please enter a valid name and email.");
      return;
    }
    localStorage.setItem("userProfile", JSON.stringify(userProfile)); // Sauvegarder dans le localStorage
    setEditMode(false);
    alert("Profile updated!");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-8">
        {editMode ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={userProfile?.name}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={userProfile?.email}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              placeholder="Email"
            />
            <textarea
              name="bio"
              value={userProfile?.bio}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              placeholder="Bio"
            />
            <input
              type="text"
              name="profilePictureUrl"
              value={userProfile?.profilePictureUrl}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              placeholder="Profile Picture URL"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={userProfile?.profilePictureUrl} // Correction ici
                alt="Profile"
              />
              <h2 className="mt-4 font-bold text-xl text-center">
                {userProfile?.name}
              </h2>
              <p className="text-gray-600 text-center">{userProfile?.email}</p>
              <p className="mt-4 text-gray-800 text-center">
                {userProfile?.bio}
              </p>
              <button
                onClick={() => setEditMode(true)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
