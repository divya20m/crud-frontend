import { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Routes, Route,useNavigate} from 'react-router-dom';
import { ThemeProvider,createTheme  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AddList } from './AddList';
import { NotFoundPage } from './NotFoundPage';
import { EditList } from './EditList';
import { Home } from './Home';
import { Lists } from './Lists';
function App() {
  const [lists,setLists]=useState([])
  const Navigate=useNavigate()
  const theme = createTheme();
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setLists(data))
  },[])

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <CssBaseline />
    <div className="navbar">
          <Button onClick={() => Navigate('/')}>Home</Button>
          <Button onClick={() => Navigate('/AllLists')}>All Lists</Button>
          <Button onClick={() => Navigate('/addlist')}>Add Lists</Button>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllLists" element={<Lists lists={lists}  setLists={setLists}/>} />
        <Route path="/edit/:listid" element={<EditList />} />
        <Route path="/addlist" element={<AddList lists={lists}  setLists={setLists} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
    </ThemeProvider>
  );
}

export default App;


