import React from 'react';
import "./index.css"

const TaskItem = ({task, changeState}) => (
    <div>
            <div className={'task-item ' + (task.checked ? 'active' : '') }>
                <div className="task-item-text">
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                </div>
                <label className="checkbox">
                    <input className="checkbox"  onInput={() => {changeState(task)}} type="checkbox" defaultChecked={task.checked}/>
                    <div className="checkbox__text">Done!</div>
                </label>
            </div>
    </div>
);

export default TaskItem