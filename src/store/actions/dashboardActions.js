import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

export const createDashboard = (newTodo) => {
     return (dispatch, getState, {getFirebase, getFirestore}) => {
         const firestore = getFirestore();
         firestore.collection('todos').add(
             {
                 ...newTodo,  tasks: [],
             }
         ).then((dashboard) => {
             dispatch({
                 type: 'SHOW_MODAL',
                 show: false
             });
         }).catch((error) => {
             dispatch({
                 type: 'ADD_DASHBOARD_ERROR',
                 error: error
             })
         })
     }
};

export const showModalAction = (show) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SHOW_MODAL',
            show: show
        });
    }
};


export  const checkTask = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('todos').set(
            {
                description: 'test',
                tasks: [],
                title: 'test',
            }
        ).then((dashboard) => {
            dispatch({
                type: 'ADD_DASHBOARD',
                dashboard: dashboard
            });
        }).catch((error) => {
            dispatch({
                type: 'ADD_DASHBOARD_ERROR',
                error: error
            })
        })
    }
};