import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import NavRoutes from "./routes/NavRoutes";
import MessageModal from "./components/MessageModal/MessageModal";
import { useSelector } from "react-redux";

function App() {
  const message = useSelector((state) => state.message);
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <NavRoutes />
      </div>

      {message.message && <MessageModal />}
      <Footer />
    </div>
  );
}

export default App;
