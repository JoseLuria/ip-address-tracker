import {
  MainLayout,
  BlueBackground,
  BlueImage,
  LayoutContainer,
  MainTitle,
  MapWrap,
} from "./Layout.styled";
import MapComponent from "../components/MapComponent/MapComponent";
import Loader from "../components/Loader/Loader";
import Div100vh from "react-div-100vh";
import BackgroundPattern from "../assets/pattern-bg.png";

const Layout = ({ children, loader, lat, long }) => {
  return (
    <Div100vh>
      <MainLayout>
        <BlueBackground>
          <BlueImage src={BackgroundPattern} alt="Background Image" />
        </BlueBackground>
        <MapWrap lat={lat} long={long}>
          {loader && <Loader />}
          {lat && long && <MapComponent lat={lat} long={long} />}
        </MapWrap>
        <LayoutContainer>
          <MainTitle>IP Address Tracker</MainTitle>
          {children}
        </LayoutContainer>
      </MainLayout>
    </Div100vh>
  );
};

export default Layout;
