import thunk from 'redux-thunk';

import { createStore ,applyMiddleware} from 'redux';
import reducers from "./Reducers/Index";
export const store= createStore(
    reducers,
    applyMiddleware(thunk)
)
