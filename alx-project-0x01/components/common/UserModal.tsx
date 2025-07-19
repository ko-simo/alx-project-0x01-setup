import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [user, setUser] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onAddUser(user);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px]">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <input
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        {/* يمكنك إضافة المزيد من الحقول حسب الحاجة */}

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
