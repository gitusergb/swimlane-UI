
import React from 'react';
import Block from './Block';
import { useDispatch } from "react-redux";
import { updateBLOCKStatus } from "../redux/actions";
// import "../Style/BlockColumn.css";

const Swimlane=({ title, blocks, status, onEditBlock }) =>{
  console.log(title)
  const dispatch = useDispatch();

  const onDrop = (e) => {
    const id = e.dataTransfer.getData("id");
    dispatch(updateBLOCKStatus(parseInt(id), status));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };
  const getHeadingStyle = () => {
    switch (title) {
      case "To Do":
        return { color: "red" };
      case "In Progress":
        return { color: "#974e1d" };
      case "Done":
        return { color: "green" };
      default:
        return {};
    }
  };

  return (
    <div className="block-column" onDrop={onDrop} onDragOver={allowDrop}>
      <h3 style={getHeadingStyle()}>{title}</h3>
      {blocks.map((block) => (
        <Block key={block.id} block={block} onEdit={onEditBlock} />
      ))}
    </div>
  );
}

export default Swimlane;
