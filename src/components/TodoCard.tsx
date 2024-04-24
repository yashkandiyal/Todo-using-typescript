import React from "react";

type Props = {
  todo: string;
  onDelete: () => void;
};

const TodoCard: React.FC<Props> = ({ todo, onDelete }) => {

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <div className="flex justify-between gap-5 items-center mb-2">
        <div className="text-lg font-semibold">{todo}</div>
        <div>
          <button
            className="mr-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
            onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
