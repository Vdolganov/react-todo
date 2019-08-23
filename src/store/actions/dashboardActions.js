import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

export const createDashboard = () => {
     return (dispatch, getState, {getFirebase, getFirestore}) => {
         const firestore = getFirestore();
         firestore.collection('todos').add(
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