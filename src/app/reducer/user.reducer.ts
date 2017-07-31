import * as UsersActions from '../actions/user.action';

export interface UsersState {
  users: {}[];
};

export const initialState: UsersState = {
    users: []
};

export function usersReducer(state = initialState, action: UsersActions.Actions) {
    switch (action.type) {
        case UsersActions.GET_USERS:
            //console.log("payload: " + action.payload);
            return Object.assign( {}, state, { users: action.payload });

        default: 
            return state;
    }
}
