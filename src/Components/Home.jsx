import Banner from "./Banner";
import Daily from "./daily";
import Feedbacks from "./Feedbacks";
import Good from "./Good";
import Popular from "./Popular";
import Trending from "./Trending";

const Home = () => {
    return <div>
        <Banner></Banner>
        <Good></Good>
        <Trending></Trending>
        <Daily></Daily>
        <Popular></Popular>
        <Feedbacks></Feedbacks>
    </div>;
};
export default Home;