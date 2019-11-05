// boilerplate middleware looks like this: `export default ({dispatch}) => next =>  action => {}`

export default ({ dispatch }) => next => action => {
    // check if the payload has a promise, if not, just continue
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // resolve the data and dispatch the action
    action.payload.then(res => {
        const newAction = { ...action, payload: res };
        // to make sure the action goes through all the middlewares, dispatch it back
        dispatch(newAction);
    });
};
