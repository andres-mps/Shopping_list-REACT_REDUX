import CartItem from "../components/CartItem";
import "./CartList.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add_item, empty_list } from "../redux/listsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

function CartList() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState([]);
  const list = useSelector((state) => state.lists.find((list) => list.id === params.listId));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      newItem &&
        add_item({
          id: nanoid(),
          name: newItem,
          isBought: false,
          listId: params.listId,
        }),
    );
    setNewItem("");
  };

  const handleClick = () => {
    dispatch(empty_list(params.listId));
    navigate("/");
  };

  return (
    <div className="container  mt-5 p-1 list-group cart d-flex justify-content-center flex-column ">
      <div className="sticky-top bg-white">
        <div className="p-3 d-flex flex-row justify-content-between align-item-center">
          <h1 className="d-inline">{list.newList.name}</h1>
          <i
            type="button"
            className="bi bi-trash-fill fs-5 align-self-center"
            onClick={() => dispatch(handleClick)}
          ></i>
        </div>
        <div className="mb-3">
          <form action="" className="mt-3" onSubmit={handleSubmit}>
            <div className="d-flex flex-row">
              <input
                className="form-control mx-2"
                type="text"
                name="item"
                id="item"
                value={newItem}
                placeholder="Agregar nuevo item"
                onChange={(event) => setNewItem(event.target.value)}
              />

              <button className="btn btn-outline-success me-2">Agregar</button>
            </div>
          </form>
        </div>
      </div>
      {list.products.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
      <Link to="/">
        <i className="mt-2 bi bi-arrow-left"></i> Volver a la home
      </Link>
    </div>
  );
}

export default CartList;
