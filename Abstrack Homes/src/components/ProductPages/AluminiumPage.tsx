import AluminiumContent from "../AlumiuniumP";
import Header from "../Header";
import Footer from "../Footer";

const AluminiumPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {/* Add responsive horizontal padding for consistent spacing */}
      <main className="flex-grow pt-20">
        <AluminiumContent 
          showViewAll={true}
          viewAllRoute="/category-layout?category=aluminium"
          viewAllLabel="View All Products"
        />
      </main>
      <Footer />
    </div>
  );
};

export default AluminiumPage;
