import React from 'react';
import Task from '../components/Task'

const TaskContainer = ({taskApp}) => {
    return (
        <ul>
            {taskApp.map( task => <Task task = {task}/> )}
            
        </ul>
    );
};

export default TaskContainer;