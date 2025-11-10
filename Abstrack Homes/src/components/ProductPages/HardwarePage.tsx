import HardwareContent from "../HardwareP";
import Header from "../Header";
import Footer from "../Footer";

const HardwarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* Main content */}
      <main className="flex-grow pt-20">
        {/* Show the "View All Products" button */}
        <HardwareContent
          showViewAll={true}
          viewAllRoute="/category-layout?category=hardware"
          viewAllLabel="View All Products"
        />
      </main>
      <Footer />
    </div>
  );
};

export default HardwarePage;
