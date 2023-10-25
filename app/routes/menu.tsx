import MyProduct from "~/module/Inside/myproduct";
import Footer from "~/module/footer";
import Navbar from "~/module/navbar";

export default function Menu() {
  return (
    <>
      <Navbar />
      <MyProduct />
      <Footer />
    </>
  );
}
