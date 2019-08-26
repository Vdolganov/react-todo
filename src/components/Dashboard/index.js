import React from 'react';
import TodoNav from '../TodoNav'
import TasksList from '../TasksList'
import AddTodo from '../AddTodo'
import "./index.css"
import {showModalAction} from "../../store/actions/dashboardActions";
import {connect} from "react-redux";

const Dashboard = (props) => (
    <div className="dashboard">
        {props && props.showModal &&
          <AddTodo onVisChange={props.showModalAction}/>
        }
        <TodoNav/>
        <TasksList/>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        showModalAction: (show) => dispatch(showModalAction(show)),
    }
};

const mapStateToProps = (state) => {
    return {
        showModal: state.dashboard.showModal,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)