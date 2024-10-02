import React from 'react';
import Swimlane from './Swimlane';

// import "../Style/TaskBoard.css";


const SwimlaneBoard = ({ blocks, onEditBlock }) => {
  const pendingBlock = blocks.filter((block) => block.status === "pending");
  const inProgressBlock = blocks.filter((block) => block.status === "inprogress");
  const completedBlock = blocks.filter((block) => block.status === "completed");

  return (
    <div className="swimlane-board">
       <Swimlane
        title="To Do"
        blocks={pendingBlock}
        status="pending"
        onEditBlock={onEditBlock}
      />
      <Swimlane
        title="In Progress"
        blocks={inProgressBlock}
        status="inprogress"
        onEditBlock={onEditBlock}
      />
      <Swimlane
        title="Done"
        blocks={completedBlock}
        status="completed"
        onEditBlock={onEditBlock}
      />
    </div>
  );
};

export default SwimlaneBoard;

