// More info: https://jsonschema.net/ -> copy from plain text!
import tv4 from 'tv4';
import { stateSchema } from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    tv4.validate(getState(), stateSchema);
};
