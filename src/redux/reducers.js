import {
  ADD_BLOCK,
  EDIT_BLOCK,
  UPDATE_BLOCK_STATUS,
  SET_FILTER,
  DELETE_BLOCK,
} from "./actions";

const loadFromLocalStorage = () => {
  try {
    const blockData = localStorage.getItem("blocks");
    return blockData ? JSON.parse(blockData) : [];
  } catch (e) {
    console.error("Could not load blocks from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (blocks) => {
  try {
    const blockData = JSON.stringify(blocks);
    localStorage.setItem("blocks", blockData);
  } catch (e) {
    console.error("Could not save blocks to localStorage", e);
  }
};

const initialState = {
  blocks: loadFromLocalStorage(),
  filter: "",
};

const swimlaneReducer = (state = initialState, action) => {
  let updatedblocks;
  switch (action.type) {
    case ADD_BLOCK:
      updatedblocks = [
        ...state.blocks,
        {
          ...action.payload,
          status: "pending",
          createdAt: new Date().toLocaleString(),
        },
      ];
      saveToLocalStorage(updatedblocks);
      return {
        ...state,
        blocks: updatedblocks,
      };

    case EDIT_BLOCK:
      updatedblocks = state.blocks.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              title: action.payload.title,
              description: action.payload.description,
            }
          : block
      );
      saveToLocalStorage(updatedblocks);
      return {
        ...state,
        blocks: updatedblocks,
      };

    case UPDATE_BLOCK_STATUS:
      updatedblocks = state.blocks.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              status: action.payload.status,
              updatedAt: new Date().toLocaleString(),
            }
          : block
      );
      saveToLocalStorage(updatedblocks);
      return {
        ...state,
        blocks: updatedblocks,
      };

    case DELETE_BLOCK:
      updatedblocks = state.blocks.filter((block) => block.id !== action.payload);
      saveToLocalStorage(updatedblocks);
      return {
        ...state,
        blocks: updatedblocks,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default swimlaneReducer;
