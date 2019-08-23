const initState = {
     currentTodo: {title: "first todo", description: "first todo desc", tasks: [ {checked: false, description: "first task desc", title: "first task1"}, {checked: true, description: "first task desc", title: "first task"},  ]},
};

const tasksReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHOOSE_TODO':
            console.log(action.todo);
            return {...state, ...state.currentTodo =  action.todo}


    }
    return state
};


export default tasksReducer