import { useRef } from "react";
import Banner from "./Banner";
import ContentsList from "./ContentsList";
import Followbanner from "./Followbanner";
import Footer from "./Footer";
import Header from "./Header";

const MainPage = () => {
  const scrollRefs = useRef([]);
  return (
    <div>
      <Header />
      <Followbanner />
      <Banner />
      <ContentsList scrollRefs={scrollRefs} />
      <Footer />
    </div>
  );
};

export default MainPage;
