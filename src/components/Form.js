import React, {useState} from 'react';
import {TextField, Button, Box} from '@material-ui/core/';

const Form = ({taskApp, setTaskApp}) => {

    const [task,addTask] = useState("");

    const changeHandler = e => {
        e.preventDefault();
        addTask(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setTaskApp([...taskApp,task]);
        addTask("");

    }



    return ( 
        <form className="form" noValidate autoComplete="off" onSubmit={submitHandler}>
            <TextField id="standard-basic" value={task} onChange={changeHandler}/>
            <Box component="span" ml={1}>
                <Button variant="contained" type="submit" >Add Task</Button>
            </Box>
            
        
        
        
        
        </form>
     );
}
 
export default Form;