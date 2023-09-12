import NavBar from "../components/NavBar";
import Video from "../components/Video";
import News from "../components/News";
import AboutUs from "../components/AboutUs";
import Productions from "../components/Producctions";
import SupportUs from "../components/SupportUs";
import "./App.css";

export default function App() {
  return (
    <>
      {/* <header className="App-header">
        <NavBar />
      </header> */}
      <Video />
      <News />
      <AboutUs />
      <Productions />
      <SupportUs />
    </>
  );
}
