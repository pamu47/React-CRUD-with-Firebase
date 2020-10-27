export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('events').add({
            ...event,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ERROR', err })
        })
        
    }
};