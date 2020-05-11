import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAdding } from "./actions/isAdding";
import { addProduct } from "./actions/addProduct";
import { Istate } from "./reducers/combined";
import * as _ from "lodash";
import { ImageToChoose } from "./imageToChoose";

export const AddProduct: React.FC = () => {
  const dispatch = useDispatch();
  const length = useSelector((state: Istate) => state.products.length);
  const [name, changeName] = useState(``);
  const [price, changePrice] = useState(null);
  const [state, changeState] = useState(``);
  const [imgAdress, changeimgAdress] = useState(``);
  const [seller, updateSeller] = useState(``);
  const [type, changeType] = useState(``);
  const [desc, updateDesc] = useState(``);
  const [images, updateImages] = useState([
    "https://placeimg.com/1000/1000/any",
    "https://placeimg.com/1000/1000/animals",
    "https://placeimg.com/1000/1000/nature",
    "https://placeimg.com/1000/1000/people",
    "https://placeimg.com/300/300/people",
    "https://placeimg.com/300/300/any",
    "https://placeimg.com/300/300/animals",
    "https://placeimg.com/300/300/nature",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1132&q=80",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1562414962-a6b4f966070d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1526510096283-b0b3b6cac327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1533702165324-66678e2069b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    "https://images.unsplash.com/photo-1554474054-1258273559a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1554046862-054dbd07c8c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80",
    
  ]);
  const [startImageIndex, updateStartImageIndex] = useState(0);
  const [endImageIndex, updateEndImageIndex] = useState(3);

  const createProduct = () => {
    if (
      name.length > 0 &&
      state.length > 0 &&
      imgAdress.length > 0 &&
      type.length > 0 &&
      seller.length > 0 &&
      desc.length > 0
    ) {
      dispatch(
        addProduct({
          id: length + 1,
          name,
          price,
          state,
          imgAdress,
          type,
          seller,
          desc,
        })
      );
      changeName("");
      changePrice(null);
      changeState("");
      updateSeller("");
      changeType("");
      updateDesc("");
      dispatch(isAdding());
    } else {
      alert(`Nie wypełniłeś danych`);
    }
  };

  const hancleClick = (event: any, address: string) => {
    [...document.querySelectorAll("img")].map((o) => {
      o.style.border = "none";
    });
    event.target.style = "border: 3px solid #20F298";
    changeimgAdress(address);
  };

  return (
    <div className="wrapper">
      <article className="box">
        <h1>Dodaj Produkt</h1>
        <div>
          <input
            onChange={(e) => changePrice(parseFloat(e.target.value))}
            placeholder="Cena"
            value={price}
            type="number"
          />
          <input
            onChange={(e) => changeState(e.target.value)}
            className="stateInput"
            placeholder="Stan"
            value={state}
            type="text"
          />
        </div>
        <div>
          <input
            onChange={(e) => changeName(e.target.value)}
            className="nameInput"
            placeholder="Nazwa"
            value={name}
            type="text"
          />
        </div>
        <div>
          <input
            onChange={(e) => updateSeller(e.target.value)}
            placeholder="Sprzedawca"
            value={seller}
            type="text"
          />
          <input
            onChange={(e) => changeType(e.target.value)}
            className="stateInput"
            placeholder="Typ"
            value={type}
            type="text"
          />
        </div>
        <div>
          <textarea
            onChange={(e) => updateDesc(e.target.value)}
            className="description"
            placeholder="Description"
            value={desc}
          ></textarea>
        </div>
        <div>
          <p>Choose Image</p>
        </div>
        <div className="imageHolder">
          <p
            className="material-icons"
            onClick={() => {
              if (startImageIndex >= 1) {
                updateStartImageIndex((o) => o - 1);
                updateEndImageIndex((o) => o - 1);
              }
            }}
          >
            arrow_back_ios
          </p>
          {_.filter(images, (o, i) => {
            if (i >= startImageIndex && i <= endImageIndex) return o;
          }).map((o) => {
            return (
              <ImageToChoose
                key={`${o}`}
                hancleClick={hancleClick}
                src={`${o}`}
              />
            );
          })}
          <p
            className="material-icons"
            onClick={() => {
              if (endImageIndex <= images.length - 2) {
                updateStartImageIndex((o) => o + 1);
                updateEndImageIndex((o) => o + 1);
              }
            }}
          >
            arrow_forward_ios
          </p>
        </div>
        <div>
          <button onClick={() => dispatch(isAdding())}>Anuluj</button>
          <button onClick={() => createProduct()} className="addButton">
            Dodaj
          </button>
        </div>
      </article>
    </div>
  );
};

