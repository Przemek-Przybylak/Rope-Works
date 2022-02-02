import { Container } from "./common/Container/index";
import { Header } from "./features/header/Header";
import { Slider } from "./features/slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Slider>Slider</Slider>
        App
      </Container>
    </div>
  );
}

export default App;
