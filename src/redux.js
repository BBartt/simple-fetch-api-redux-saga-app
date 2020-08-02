export const actions = {
  API_CALL_REQUEST: "API_CALL_REQUEST",
  API_CALL_SUCCESS: "API_CALL_SUCCESS",
  API_CALL_FAILURE: "API_CALL_FAILURE",
};

const initialState = {
  fetching: false,
  dog: null,
  error: null,
};

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actions.API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case actions.API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        dog: action.dog,
      };
    case actions.API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        dog: null,
        error: action.error,
      };
    default:
      return state;
  }
}
