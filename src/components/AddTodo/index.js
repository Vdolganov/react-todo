import React from 'react'
import { compose } from 'redux'
import {createDashboard} from "../../store/actions/dashboardActions";
import {connect} from "react-redux";
import "./index.css"

const AddTodo = (props) => {

    const clickOutside = (e) => {
        if(e && e.target && e.target.className === 'add-todo-modal'
            || e && e.target && e.target.className === 'new-todo-button-cancel') {
            props.onVisChange(false)
        }
        e.stopPropagation();
        e.preventDefault();
    };

    const closeListener =
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                props.onVisChange(false)
            }
        });


return(
    <div className="add-todo-modal" onClick={clickOutside}>
        <form className="add-todo-form">
            <label>
                Add title <br/>
                <input type="text" name="title" className="add-todo-input"/>
            </label>
            <label>
                Add description <br/>
                <textarea name="description" className="add-todo-textarea"/>
            </label>
            <div>
                <button  className="new-todo-button mr-10">Save</button>
                <button className="new-todo-button-cancel" onClick={(e) => {clickOutside(e)}}>Cancel</button>
            </div>
        </form>
    </div>
)
};

const mapDispatchToProps = (dispatch) => {
    return {
        createDashboard: (todo) => dispatch(createDashboard(todo)),
    }
};


export default compose(connect(null, mapDispatchToProps))(AddTodo)
