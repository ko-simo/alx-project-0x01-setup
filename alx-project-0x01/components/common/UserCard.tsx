import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name} ({username})</h2>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">Website: {website}</p>
      <div className="mb-2">
        <h3 className="font-semibold text-gray-700">Address:</h3>
        <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">Company:</h3>
        <p>{company.name}</p>
        <p><em>{company.catchPhrase}</em></p>
        <p>{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
