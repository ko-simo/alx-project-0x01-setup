import React from "react";
import Header from "@/components/layout/Header";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UsersProps {
  posts: UserProps[];  // نعم الاسم posts كما في API (سوف نصحح لاحقاً)
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <h1 className="text-2xl font-semibold mb-4">User List</h1>
        <div>
          {posts?.map((user) => (
            <div key={user.id} className="border rounded p-4 mb-2 shadow hover:shadow-md">
              <h2 className="font-bold text-lg">{user.name} ({user.username})</h2>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
              <p>Company: {user.company.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
