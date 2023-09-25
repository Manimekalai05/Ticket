import React, { useState, useEffect } from 'react';

// AccordionItem component to represent a single todo item
function AccordionItem({ item, index, isOpen, onToggle, onDelete }) {
  return (
    <div>
      <div onClick={() => onToggle(index)} style={{ cursor: 'pointer' }}>
        <strong>{item.title}</strong>
      </div>
      {isOpen && (
        <div>
          <p>{item.description}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      )}
    </div>
  );
}

// App component to manage the list of todo items
function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Task 1',
      description: 'Description for Task 1',
    },
    {
      title: 'Task 2',
      description: 'Description for Task 2',
    },
  ]);

  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
  });

  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    if (newTodo.title.trim() === '') return;

    setIsLoading(true);

    setTimeout(() => {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setNewTodo({
        title: '',
        description: '',
      });
      setIsLoading(false);
    }, 1000); // Simulating a loading delay (1 second)
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) =>
            setNewTodo({
              ...newTodo,
              title: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({
              ...newTodo,
              description: e.target.value,
            })
          }
        />
        <button onClick={handleAddTodo} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Todo'}
        </button>
      </div>
      {todos.map((todo, index) => (
        <AccordionItem
          key={index}
          item={todo}
          index={index}
          isOpen={index === openAccordionIndex}
          onToggle={toggleAccordion}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
