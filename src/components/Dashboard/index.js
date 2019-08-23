import React from 'react';
import TodoNav from '../TodoNav'
import TasksList from '../TasksList'
import "./index.css"

const Dashboard = (props) => (
    <div className="dashboard">
        <TodoNav/>
        <TasksList/>
    </div>
);

export default Dashboard