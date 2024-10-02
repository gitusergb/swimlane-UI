import React, { useState } from 'react';
import SwimlaneBoard from './components/SwimlaneBoard';
import BlockPreview from './components/BlockPreview';
import { useSelector, useDispatch } from 'react-redux';
import { addBLOCK,editBLOCK,setFilter } from "./redux/actions";
import "./App.css";


const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockToEdit, setBlockToEdit] = useState(null);
  const dispatch = useDispatch();
  const blocks = useSelector((state) => state.swimlaneReducer.blocks);
  const filter = useSelector((state) => state.swimlaneReducer.filter);


  const filteredBlocks = blocks.filter(
    (block) =>
    block.title.toLowerCase().includes(filter.toLowerCase()) ||
    block.description.toLowerCase().includes(filter.toLowerCase())
  );
  const openModal = () => {
    setIsModalOpen(true);
    setBlockToEdit(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBlock = (block) => {
    if (blockToEdit) {
      dispatch(editBLOCK({ ...block, id: blockToEdit.id })); 
    } else {
      dispatch(addBLOCK(block));
    }
    closeModal();
  };

  const handleEditBlock = (block) => {
    setBlockToEdit(block);
    setIsModalOpen(true);
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="App">
      <header className="header">
        <h2 className="heading">SwimlaneUI</h2>
        <div className="create-block-container">
          <button onClick={openModal} className="create-block-btn">
            Create A Block
          </button>
          <input
            className="filter-input"
            type="text"
            placeholder="Filter by title"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </header>
  
      <SwimlaneBoard blocks={filteredBlocks} onEditBlock={handleEditBlock} />
  
      {isModalOpen && (
        <BlockPreview
          closeModal={closeModal}
          addBLOCK={handleAddBlock}
          blockToEdit={blockToEdit}
        />
      )}
    </div>
  );
};

export default App;
