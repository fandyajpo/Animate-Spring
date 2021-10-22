import DropUp from "../components/DropUp";
import FadeIn from "../components/FadeIn";
import Dropdown from "../components/Dropdown";
import Menu from "../components/Menu";
import Parallax from "../components/Parallax";
import RelaxNavbar from "../components/RelaxNavbar";
import Melayang from "../components/Melayang";
import TransitionUP from "../components/TransitionUp";
import DefaultNavbar from "../components/DefaultNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Pages/Header";
import Body from "../components/Pages/Body";

function Index() {
  return (
    <div>
      <div>
        <DropUp />
      </div>
      <div>
        <FadeIn />
      </div>
      <div>
        <Dropdown />
      </div>
      <div>
        <Parallax />
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <RelaxNavbar />
      </div>
      <div>
        <Melayang />
      </div>
      <div>
        <DefaultNavbar />
      </div>
      <div>
        <TransitionUP />
      </div>
      <div>
        <Header />
      </div>{" "}
      <div>
        <Body />
      </div>
      <div>
        <BottomNavbar />
      </div>
    </div>
  );
}

export default Index;
