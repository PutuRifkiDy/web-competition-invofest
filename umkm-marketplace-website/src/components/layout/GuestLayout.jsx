import Navbar from './Partial/Navbar';
import Footer from './Partial/Footer';
export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
