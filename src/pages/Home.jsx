import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { add_list } from "../redux/listsSlice";
import List from "../components/List";
import "./Home.css";

function Home() {
  const [newList, setNewList] = useState([]);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      newList &&
        add_list({
          // id: nanoid(),
          name: newList,
          // products: [],
          // // createdAt: new Date(),
          // color: randomColor({
          //   luminosity: "dark",
          //   format: "rgba",
          //   alpha: 0.5,
          // }),
        }),
    );
    setShow(false);
    setNewList("");
  };

  return (
    <>
      <div className="container mt-5 p-1 list-group cart d-flex justify-content-center flex-column ">
        <div className="sticky-top bg-white">
          <h2 className="title pt-3 ms-3 mb-3">SHOPPING LIST</h2>
        </div>

        {lists.map((list, index) => (
          <List list={list} key={index} />
        ))}

        <i
          className="add-list bi bi-plus-circle-fill text-primary display-3 opacity-75 ms-3"
          onClick={handleShow}
        ></i>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Lista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="mt-3" onSubmit={handleSubmit}>
            <div className="d-flex flex-row mb-2">
              <input
                className="form-control"
                type="text"
                name="item"
                id="item"
                value={newList}
                placeholder="Nombre de la lista"
                onChange={(event) => setNewList(event.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-primary text-end me-1" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn btn-primary text-end sticky-bottom">Agregar</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
