import { Action } from '@ngrx/store';

export const GET_USERS = '[USERS] Get Users';


export class GetUsersAction implements Action{
    readonly type = GET_USERS;
    constructor(public payload: {}[]) { }
}

export type Actions = GetUsersAction;