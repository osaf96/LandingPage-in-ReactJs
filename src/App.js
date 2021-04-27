import logo from './logo.svg';
import './App.css';
import Banner from './screens/mainbanner/Banner';
import AboutUs from './screens/Section/AboutUs/AboutUs';
import Specs from './screens/Section/Specs/Specs';
import AppDownload from './screens/Section/AppDownload/AppDownload';

function App() {
  return (
    <>
      <Banner/>
      <AboutUs/>
      <Specs/>
      <AppDownload/>
    </>
  );
}

export default App;
