import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TaskList from './TaskList';
import Notes from './Notes';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newNote, setNewNote] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
      setNewTask('');
    }
  };

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { id: notes.length + 1, text: newNote }]);
      setNewNote('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const removeNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="form-container">
          <div className="task-form">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task..."
            />
            <button onClick={addTask} style={{ backgroundColor: '#99ff99' }}>
              Add Task
            </button>
          </div>
          <div className="note-form">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Enter a new note..."
            />
            <button onClick={addNote} style={{ backgroundColor: '#ffb366' }}>
              Add Note
            </button>
          </div>
        </div>
        <div className="lists-container">
          <TaskList tasks={tasks} removeTask={removeTask} />
          <Notes notes={notes} removeNote={removeNote} />
        </div>
      </div>
    </div>
  );
}

export default App;