import React from 'react';

const TaskList = ({ tasks, removeTask, title }) => {
  return (
    <div className="task-list">
      <h2>{title || 'Tasks'}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ backgroundColor: '#ffe6e6' }}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
