import Checkoutstepper from "./component/Stepper";
import './App.css';

function App() {
  const Checkout_step= [
    {
      name:"Customer Info",
      Component:()=><div>Provide your contact details.</div>
    }, 
    {
      name:"Shipping Info",
      Component:()=><div>Enter your shipping address.</div>
    },
    {
      name:"Payment",
      Component:()=><div>Comlete Payment for your order.</div>
    },
    {
      name:"Delivered",
      Component:()=><div>Your order has been delivered.</div>
    }
  ]
  return (
   <div className="mainClass">
    <h2>Checkout</h2>
    <Checkoutstepper stepsConfig={Checkout_step} />
   </div>
  );
}

export default App;
