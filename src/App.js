import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


// test text for git commit revert