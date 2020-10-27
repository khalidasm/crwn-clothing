import { user } from "firebase-functions/lib/providers/auth";

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER' ,
    payload: user
})