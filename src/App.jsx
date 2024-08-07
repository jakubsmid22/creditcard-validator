import validator, { isCreditCard } from "validator";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const App = () => {

  const [cardNum, setCardNum] = useState("");

  const validate = () => {

    if (!cardNum) {
      toast.error("Enter a card number please.");
      return;
    }

   isCreditCard(cardNum) ? toast.success(`${cardNum} is valid card number.`) : toast.error(`${cardNum} is not valid card number.`);
  }

  return (
    <main>
      <ToastContainer position="top-center" />
      <h1>CREDIT CARD VALIDATOR</h1>
      <div className="input">
        <label htmlFor="cardNum">Enter credit card number:</label>
        <input onChange={e => setCardNum(e.target.value)} value={cardNum} type="number" id="cardNum" name="card-number" />
      </div>
      <button onClick={validate} >VALIDATE</button>
    </main>
  )
}

export default App