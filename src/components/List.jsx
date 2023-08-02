import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

function List({ list }) {
  return (
    <Link className="text-decoration-none mb-2 shadow list-container" to={`/${list.id}`}>
      <div className="row">
        <div className="col-12">
          <div
            className="nameContainer d-flex flex-row input-group list-group-item justify-content-between align-items-center"
            style={{ borderTop: `solid 5px ${list.color}` }}
          >
            <div>
              <h3 className="listName">
                {list.newList.name}
                <span>
                  {" "}
                  ({list.products.filter((item) => item.isBought).length}/{list.products.length})
                </span>
              </h3>
              <small className="text-muted">Creada: 2022/06/15</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default List;
