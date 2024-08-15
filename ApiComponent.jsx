import  { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.example.com/todos';  // Replace with your actual API endpoint

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
