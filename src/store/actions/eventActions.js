export const createEvent = (event) => {
    return (dispatch, getState) =>{

        dispatch({type:'CREATE_EVENT',event})
    }
};