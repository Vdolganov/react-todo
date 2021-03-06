import React from 'react';
import "./index.css"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {chooseTodo} from "../../store/actions/currentTodoActions";
import {showModalAction} from "../../store/actions/dashboardActions";

const TodoNav = ({dashboard, chooseTodo, showModalAction, currentTodo}) => {
    const todoChoose = (todo) => {
        chooseTodo(todo)
    };
    const showTodo = (show) => {
        console.log(show);
        showModalAction(show)
    }
    return(
        <div className="todo-nav">
            <div className="new-todo-container">
               <button className="new-todo-button" onClick={() => showTodo(true)}>
                   Add new todo
               </button>
            </div>
            <ul className="list-container">
                {dashboard.map(el => (
                    <li className={['list-item' + (currentTodo.id && currentTodo.id == el.id ? ' active' : '')]} onClick={() => {todoChoose(el)}}>
                        <h3>{el.title}</h3>
                        <p> {el.description}, {el && el.tasks && <span>tasks:{el.tasks.length}</span>} </p>
                    </li>
                ))}
            </ul>
        </div>
        )
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseTodo: (todo) => dispatch(chooseTodo(todo)),
        showModalAction: (show) => dispatch(showModalAction(show))
    }
};

const mapStateToProps = (state) => {
    console.log(state, 'state');
    return {
        dashboard: state.firestore.ordered.todos || state.dashboard.todos,
        currentTodo: state.tasks.currentTodo
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
    {collection: 'todos'}
]))(TodoNav)