import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div className="child" style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h2>Todo List</h2>
        <div className="addItem">
          <input
            type="text"
            placeholder="write items.."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => dispatch(addItem(inputData), setInputData(""))}
          >
            Add
          </button>
        </div>
        <div>
          {listData.map((data) => {
            return (
              <div key={data} style={{display:"flex", gap:"40px", alignItems:"center"}}>
                <h3>{data.data}</h3>
                <button onClick={() => dispatch(deleteItem(data.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
