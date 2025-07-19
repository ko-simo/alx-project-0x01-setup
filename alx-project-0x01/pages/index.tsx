import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-7xl font-thin">Welcome Page</h1>
      </div>
    </>
  );
};

export default Home;
