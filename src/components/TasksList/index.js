import React from 'react';
import "./index.css"
import { connect } from 'react-redux'
import TaskItem from '../TaskItem'
import { checkTask } from '../../store/actions/dashboardActions'

const TasksList = ({tasks}) => {
    const taskDone1 = (task) => {
        console.log(task)
    };
    return(
        <div className="tasks-list">
            <div className="tasks-list-title">
                <h1> {tasks.title} </h1>
            </div>
            {tasks.tasks.map(el => (
                <TaskItem task={el} key={el.id} changeState = {taskDone1}/>
            ))}
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
  return {
      checkTask: (task) => dispatch(checkTask(task)),
  }
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.currentTodo,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)