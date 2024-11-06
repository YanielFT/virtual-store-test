import { Outlet } from "react-router-dom";

const SimpleLayout = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-10">
        <Outlet />
      </div>
    </main>
  );
};

export default SimpleLayout;
