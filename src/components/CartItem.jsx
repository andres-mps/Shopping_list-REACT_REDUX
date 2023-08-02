import React from "react";
import { delete_item, toggle_isbought } from "../redux/listsSlice";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const params = useParams();

  const handleClick = (event) => {
    dispatch(
      delete_item({
        id: item.id,
        listId: params.listId,
      }),
    );
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex flex-row input-group list-group-item justify-content-between align-items-center">
          <div className="d-flex gap-2 flex-row align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              name="item"
              checked={item.isBought ? true : false}
              onChange={() =>
                dispatch(
                  toggle_isbought({
                    id: item.id,
                    listId: params.listId,
                  }),
                )
              }
            />
            <p className={item.isBought ? "text-decoration-line-through mb-0" : "mb-0"}>
              {item.name}
            </p>
          </div>
          <i type="button" className="bi bi-trash-fill" onClick={() => dispatch(handleClick)}></i>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
