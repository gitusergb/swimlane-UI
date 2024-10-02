import React, { useState, useEffect } from "react";
// import "../Style/TaskModal.css";


const BlockPreview = ({ closeModal, addBLOCK, blockToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (blockToEdit) {
      setTitle(blockToEdit.title);
      setDescription(blockToEdit.description);
    }
  }, [blockToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const block = {
        id: blockToEdit ? blockToEdit.id : Date.now(),
        title,
        description,
      };
      addBLOCK(block);
    }
  };
  return (
  <div className="modal">
    <div className="modal-content">
        <h2>{blockToEdit ? "Edit Block" : "Create Block"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="butflexcol">
          <input
            className="title-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div id="butflex">
          <button type="submit" className="submit-btn">
            {blockToEdit ? "Update" : "Submit"}
          </button>
          <button type="button" onClick={closeModal} className="close-btn">
            Close
          </button>
          </div>
          </div>
        </form>
      </div>
  </div>
);
}
export default BlockPreview;
