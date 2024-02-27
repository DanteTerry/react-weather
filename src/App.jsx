import NavBar from "./components/NavBar";
import WeatherAppContainer from "./components/WeatherAppContainer";

function App() {
  return (
    <>
      <WeatherAppContainer>
        <div className="mx-auto w-[80%] bg-red-200">
          <NavBar />
        </div>
      </WeatherAppContainer>
    </>
  );
}

export default App;
