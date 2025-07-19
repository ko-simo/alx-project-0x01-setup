import React from "react";
import { UserProps } from "@/interfaces";

const UserCard = ({ name, email, address, company, phone, website }: UserProps) => {
  return (
    <div className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all bg-white">
      <h2 className="text-xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
      <p className="text-sm text-gray-500">Company: {company.name}</p>
      <p className="text-sm text-gray-500">Phone: {phone}</p>
      <a href={`http://${website}`} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
        {website}
      </a>
    </div>
  );
};

export default UserCard;
