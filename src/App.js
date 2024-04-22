// App.js
import './App.css';
import SearchAppBar from './components/Navbar';
import CardWrapper from './components/CardWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';

function App() {
  const [text, setText] = useState("");
  const [oriData, setOriData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/users');
        setOriData(res.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on text
    if (text.trim() === "") {
      setFilteredData(oriData); // If search text is empty, show all data
    } else {
      setFilteredData(
        oriData.filter(user =>
          user.firstName.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  }, [text, oriData]);

  console.log(filteredData);

  return (
    <div>
      <SearchAppBar text={text} setText={setText} />

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route exact path="/" element={<CardWrapper filteredData={filteredData} />} />
        <Route path="/adminpanel" element={<AdminPanel filteredData={filteredData}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
