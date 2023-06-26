import Navigation from "@/components/Navigation";

const NavLayout = ({ children }) => {
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Navigation />
      <div className="bg-white flex-grow mt-2 mx-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default NavLayout;
