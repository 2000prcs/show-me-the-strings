/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */


export const GET_STRINGS = 'Strings-App/App/GET_STRINGS';
export const GET_STRINGS_SUCCESS = 'Strings-App/App/GET_STRINGS_SUCCESS';
export const GET_STRINGS_ERROR = 'Strings-App/App/GET_STRINGS_ERROR';

