import "./App.scss";



import IndexEarbuds from "./components/index-earbuds/IndexEarbuds";
import WatchIndex from "./components/indexWatch/IndexWatch";
import { CartPage } from "./components/cart-page/CartPage";

function App() {
  return (
    <>
      <WatchIndex/>
      <IndexEarbuds/>
      <CartPage/>
    </>
  );
}

export default App;
