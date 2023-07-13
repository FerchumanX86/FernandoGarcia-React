import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";

import { useParams } from "react-router";
import { PacmanLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
//  import AgregarDocs from "../../../AgregarDocs";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      // los filtrados
      consulta = query(itemCollection, where("category", "==", categoryName))
    } else {
      // todos
      consulta = itemCollection
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));

  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PacmanLoader color="steelblue" width={40} height={111} />
      </div>
    );
  }

  return (
    <div>
      
      <ProductsListPresentacional items={items} />
      {/* <AgregarDocs/> */}
      
    </div>
  );
};

export default ProductsListContainer;
