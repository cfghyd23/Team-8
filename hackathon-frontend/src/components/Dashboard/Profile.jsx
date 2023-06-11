import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name:</label>
          <p className="text-gray-900 leading-relaxed" id="name">John Doe</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email:</label>
          <p className="text-gray-900 leading-relaxed" id="email">johndoe@example.com</p>
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="goal">Goal:</label>
          <p className="text-gray-900 leading-relaxed" id="goal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed sapien malesuada vestibulum.</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
