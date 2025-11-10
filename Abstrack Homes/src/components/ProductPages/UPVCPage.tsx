import UPVCContent from "../UPVCp";
import Header from "../Header";
import Footer from "../Footer";

const UPVC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Render UPVCContent with dynamic View All Products button */}
      <main className="flex-grow pt-20">
        <UPVCContent
          showViewAll={true}              // Show the button
          viewAllRoute="/category-layout?category=upvc" // Route where the button navigates
          viewAllLabel="View All Products"// Button text
        />
      </main>
      <Footer />
    </div>
  );
};

export default UPVC;
