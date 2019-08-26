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

    };

    const closeListener =
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                props.onVisChange(false)
            }
        });

    const addNewTodo = (e) => {
        e.persist();
        e.preventDefault();
        let values = {};
        for (let item of e.target) {
            if(item.name === 'title') {
                values.title = item.value;
            }
            else if(item.name === 'description') {
                values.description = item.value;
            }
        }
        props.createDashboard(values);
        console.log(values, props)
    };

return(
    <div className="add-todo-modal" onClick={clickOutside}>
        <form className="add-todo-form" onSubmit={addNewTodo}>
            <label>
                Add title <br/>
                <input type="text" name="title" className="add-todo-input"/>
            </label>
            <label>
                Add description <br/>
                <textarea name="description" className="add-todo-textarea"/>
            </label>
            <div>
                <button type="submit" className="new-todo-button mr-10"> Save </button>
                <button className="new-todo-button-cancel">Cancel</button>
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
