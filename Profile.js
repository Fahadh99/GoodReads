import React from 'react';

const Profile = () => {
  // Retrieve user information from localStorage or context
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: 'https://example.com/profile.jpg'
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <img src={user.profilePicture} alt="Profile" />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Add more user information */}
      </div>
    </div>
  );
}

export default Profile;
