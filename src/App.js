import "./App.css";
import Payment from "./pages/payment/Payment";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {isOpen ? (
        <Payment handleOpen={() => setIsOpen(false)} />
      ) : (
        <button className={"btn"} onClick={() => setIsOpen(true)}>
          Retry Payment
        </button>
      )}
    </div>
  );
}

export default App;
