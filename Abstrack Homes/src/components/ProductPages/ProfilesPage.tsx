import ProfilesContent from "../ProfileP";
import Header from "../Header";
import Footer from "../Footer";

const ProfilesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-12">
        <ProfilesContent 
          showViewAll={true}
          viewAllRoute="/category-layout?category=profiles"
          viewAllLabel="View All Products"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilesPage;
