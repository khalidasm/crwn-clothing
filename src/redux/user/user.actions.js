import { user } from "firebase-functions/lib/providers/auth";
import {userActionTypes} from './user.type'
export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})