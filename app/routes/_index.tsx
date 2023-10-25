import Features from "~/module/features";
import Footer from "~/module/footer";
import Navbar from "~/module/navbar";
import Product from "~/module/product";
import Social from "~/module/social";
import ArticleList from "~/module/story";
import MyTestimonial from "~/module/testimonial";

export default function Index() {
  return (
    <>
      <Navbar />
      <Features />
      <ArticleList />
      <Product />
      <Social />
      <MyTestimonial />
      <Footer />
    </>
  );
}
