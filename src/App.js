import { Container } from "./common/container/index";
import { AboutUs } from "./features/aboutUs/AboutUs";
import { Activity } from "./features/activity/Activity";
import { Header } from "./features/header/Header";
import { Slider } from "./features/slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Slider />
        <Activity />
        <AboutUs />
      </Container>
    </div>
  );
}

export default App;
