
import React from 'react';
import { deleteBLOCK } from "../redux/actions";
import { useDispatch } from "react-redux";


const Block = ({ block, onEdit }) => {

  const dispatch = useDispatch();
  const onDragStart = (e) => {
    e.dataTransfer.setData("id", block.id);
  };

  const handleEditClick = () => {
    onEdit(block);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this block?")) {
      dispatch(deleteBLOCK(block.id));
    }
  };

  const getblockStyle = () => {
    switch (block.status) {
      case "pending":
        return { backgroundColor: "#e644448f", color:"white" }; // Lighter red
      case "inprogress":
        return { backgroundColor: "#fcdbab", color: "black" }; // Lighter orange
      case "completed":
        return { backgroundColor: "#c4e1b0", color: "black" }; // Lighter green
      default:
        return {};
    }
  };

  return (
    <div
      className="block"
      draggable
      onDragStart={onDragStart}
      style={getblockStyle()}
    >
      <h4>{block.title}</h4>
      <p>{block.description}</p>
      <p className="creation-time">
        <strong>Created at:</strong> {block.createdAt}
      </p>
      {block.updatedAt && (
        <p className="updated-time">
          <strong>Updated at:</strong> {block.updatedAt}
        </p>
      )}
      <div className="button-group">
        <button onClick={handleEditClick} className="edit-btn">
          Edit📝
    
        </button>
        <button onClick={handleDeleteClick} className="delete-btn">
          Delete🗑️
        </button>
      </div>
    </div>
  );

};

export default Block;



