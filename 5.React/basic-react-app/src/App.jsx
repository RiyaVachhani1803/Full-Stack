import "./App.css";
//import
import Title from "./Title.jsx";
import Product from "./product.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

function App() {
  let name = "Riya";
  return (
  <>
    <Title />
    <Title />
    <p>2 * 2 = {2 * 2} </p> 
    <p>Hi, {name}!</p>
    <ProductTab />
    <MsgBox username="Riya" textColor="blue" />
    <Button />
    <Form />
  </>
  );
}

export default App;
