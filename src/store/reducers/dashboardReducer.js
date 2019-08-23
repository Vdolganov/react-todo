const initState = {
    todos: [
        {title: "first todo", description: "first todo desc", tasks: [ {checked: false, description: "first task desc", title: "first task"}, {checked: false, description: "first task desc", title: "first task"},  ]},
        {title: "second todo", description: "second todo desc", tasks: [ {checked: false, description: "first task desc", title: "first task"}, {checked: false, description: "first task desc", title: "first task"},  ]},
        {title: "third todo", description: "third todo desc", tasks: [ {checked: false, description: "first task desc", title: "first task"}, {checked: false, description: "first task desc", title: "first task"},  ]},
    ]
};

const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DASHBOARD':
            return state
    }
    return state
};

export default dashboardReducer