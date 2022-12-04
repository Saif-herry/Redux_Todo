import {
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from './actionTypes'

const initialState = {
  count:0,
  todos:{
      isLoading:false,
      isError:false,
      data:[],
  },
}

const reducer = (state=initialState, action) => {
    console.log("AAAAAA",state.todos)
  switch (action.type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        todos: {
          isLoading: true,
          isError: false,
          data: [],
        },
      }
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: false,
          data: action.payload,
        },
      }
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: true,
          data: [],
        },
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id!==action.payload),
      }
    }
    default: {
      return state
    }
  }
}
export default reducer
