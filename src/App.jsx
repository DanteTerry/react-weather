import { useState } from "react";
import NavBar from "./components/NavBar";
import WeatherDetailBox from "./components/WeatherDetailBox";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [city, setCity] = useState("prague");

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="h-screen w-full bg-primary">
          <div className="mx-auto flex flex-col gap-1  px-4 sm:w-[80%] lg:w-[90%]">
            <NavBar city={city} setCity={setCity} />
            <WeatherDetailBox city={city} />
          </div>
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
