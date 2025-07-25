import Banner from "./Banner";
import ContentsList from "./ContentsList";
import Followbanner from "./Followbanner";
import Footer from "./Footer";
import Header from "./Header";
import ItemPageFour from "./ItemPageFour";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Followbanner/>
            <Banner/>
            <ContentsList/>
            <Footer/>
        </div>
    );
};

export default MainPage;