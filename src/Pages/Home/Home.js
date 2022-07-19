import { TextField,MenuItem,Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";
import Categories from "../../Data/Categories";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = (props) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error,SetError]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=()=>{
        if(!category||!difficulty||!props.name){
            SetError(true);
            return;
        }
        else{
            SetError(false);
            props.fetchQuestions(category,difficulty);
            navigate('/quiz');
        }
    };
  return (
    <div className='content'>
    <div className='settings'>
        <span style={{fontSize:30}}>All The Best👍 </span>
        <div className='settings_select'>
        {error && <ErrorMessage>please fill all the fields</ErrorMessage>}

        <TextField style={{marginBottom:25}} label="Enter Your Name" variant='outlined' onChange={(e)=>props.setName(e.target.value)}/>
        <TextField select label="select category" 
            variant='outlined'
            style={{marginBottom:30}}
             onChange={(e)=>setCategory(e.target.value)}
             value={category}
        >
        {Categories.map((cat)=>(

         <MenuItem key={cat.category} value={cat.value} >
         {cat.category}
            </MenuItem>

        ))}

        </TextField>
        <TextField select label="select category" 
            variant='outlined'
            style={{marginBottom:30}}
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
        >
            <MenuItem key="Easy" value="easy"> Easy</MenuItem>
            <MenuItem key="Medium" value="medium"> Medium</MenuItem>
            <MenuItem key="Hard" value="hard"> Hard</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" size="large"
        onClick={handleSubmit}>
            Start Quiz
        </Button>


        </div>
    </div>

    <img src= "/quiz.png"  className='banner' alt='quiz image' />

    
    
    </div>
  )
}

export default Home;