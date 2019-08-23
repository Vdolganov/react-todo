import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

export const chooseTodo = (todo) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CHOOSE_TODO',
            todo: todo
        })
    }
};
