import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={handleAddUser}
        />
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default UsersPage;
