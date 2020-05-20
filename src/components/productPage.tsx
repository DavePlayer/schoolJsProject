import * as React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { useSelector, useDispatch } from "react-redux";
import { Iproducts } from "./reducers/products";
import { Istate } from "./reducers/combined";
import * as _ from "lodash";
import { useState, useEffect } from "react";
import { loadFromLocalStorage } from "./actions/loadFromLocalStorage";
import { loadTrolleyFromLocalStorage } from "./actions/loadTrolleyFromLocalStorage";
import { Product } from "./product";
import { moveToTrolley } from "./actions/moveToTrolley";
import { deleteProduct } from "./actions/deleteProduct";
import { Link, useHistory } from "react-router-dom";
import { ProductUnvaluedInfo } from "./ProductUnvaluedInfo";
import { ProductSlider } from "./ProductSlider";

export const ProductPage: React.FC = (props: any) => {
  const products: Array<Iproducts> = useSelector((o: Istate) => o.products);

  const [product]: any = _.filter<Array<Iproducts>>(
    products,
    (o: Iproducts) => {
      console.log(o);
      if (o.id == props.match.params.id) return o;
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadFromLocalStorage());
      dispatch(loadTrolleyFromLocalStorage());
  }, [])

  console.log(products, product);

  const trolley = () => {
    dispatch(
      moveToTrolley({
        id: product.id,
        name: product.name,
        price: product.price,
        state: product.state,
        imgAdress: product.imgAdress,
        seller: product.seller,
        type: product.type,
        desc: product.desc,
      })
    );
    dispatch(deleteProduct(product.id));
    props.history.push("/schoolJsProject/shop");
  };

  return (
    <div className="background-grey">
      {products.length > 0 ? (
        <>
          <Nav />
          <main className="productPage">
            <section className="mainSection">
              <figure>
                <img
                  src={products[props.match.params.id].imgAdress}
                  alt="img"
                />
              </figure>
              <article className="info">
                <h2>{product.name}</h2>
                <span className="mini">id: {product.id}</span>
                <span className="mini">Zobacz więcej</span>
                <div className="uselessInfo">
                  <p className="showOffs">
                    <span className="material-icons yellow">grade</span>
                    <span className="material-icons yellow">grade</span>
                    <span className="material-icons">grade</span>
                    <span className="material-icons">grade</span>
                    <span className="material-icons">grade</span>
                    <span>
                      kupiono {Math.floor(Math.random() * 144 + 3)} sztuk
                    </span>
                  </p>
                </div>
                <ul>
                  <li>stan: {product.state}</li>
                  <li>typ: {product.type}</li>
                </ul>
                <a href="#description">
                  <span>zobacz pełny opis</span>
                </a>
              </article>
            </section>
            <section className="payment">
              <h3>
                zamów w ciągu{" "}
                <span className="rounded">
                  {Math.floor(Math.random() * 14 + 17)} dni
                </span>
              </h3>
              <div className="rpices">
                <span className="grey">
                  dostępnych sztuk: {Math.floor(Math.random() * 144 + 3)}
                </span>
                <h4>{product.price}</h4>
              </div>
              <div className="cont">
                <select className="numberOf">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <button onClick={() => trolley()}>Do koszyka</button>
              </div>
            </section>
            <section id="description" className="description">
              <h3>opis</h3>
              <p>{product.desc}</p>
            </section>
            <ProductSlider productId={props.match.params.id} />
            <ProductUnvaluedInfo info="Gwarancja" detail="Gwarancja z tytułu rękojmi na okres 12 miesięcy"/>
            <ProductUnvaluedInfo info="Reklamacja" detail="Czas na reklamację z tytułu rękojmi trwa 1 rok na adres ul.Jakaś tam 21/2 44-107 w Gliwicach. Rękojmia wyłączona dla przedsiębiorców"/>
          </main>
          <Footer />
        </>
      ) : null}
    </div>
  );
};

