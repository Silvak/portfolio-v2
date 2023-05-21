import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";
import ProyectCard from "./components/Card/ProyectCard";
import Layout from "./components/Layout";

//## Main Component ##
function App() {
  const navigation = useNavigation();

  //dark mode state & function
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {}, []);

  return (
    <div
      className={`relative w-full min-h-screen transition duration-200 ease-in-out
      ${darkMode ? "dark" : ""}`}
    >
      {/* Dinamic Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Dinamic Conetent */}
      <Layout>
        <ProyectCard />
      </Layout>
    </div>
  );
}

export default App;
