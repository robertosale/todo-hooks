import React from 'react';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';

const Task = ({task}) => {
    return (
        <li>
            <Typography variant="h4" color="textPrimary">{task}</Typography>
        </li>
    );
};

export default Task;