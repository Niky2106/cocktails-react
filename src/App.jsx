// import cocktailLogo from "./assets/cocktail.svg";
import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <div className="App">
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList name="rum" setProductSection={setProductSection} />
          <ProductList name="vodka" setProductSection={setProductSection} />
          <ProductList name="gin" setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;