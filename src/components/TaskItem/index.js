import React from 'react';
import "./index.css"

const TaskItem = ({task, changeState}) => (
    <div>
            <div className={'task-item ' + (task.checked ? 'active' : '') }>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <label>Done! <input onInput={() => {changeState(task)}} type="checkbox" defaultChecked={task.checked}/></label>
            </div>
    </div>
);

export default TaskItem