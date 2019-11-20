import {
  QUOTES_AVAILABLE,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE
} from './constant'

export const addQuotes = (quotes) => {
  return {
    type: QUOTES_AVAILABLE,
    data: { quotes }
  }
}


// Add Quote - CREATE (C)
export const addQuote = (args) => {
  return {
    type: ADD_QUOTE,
    data: args
  }
}

  // Update Quote - UPDATE (U)
  export const updateQuote = (args) => ({
    type: UPDATE_QUOTE,
    data: args
  });

  // Delete Quote - DELETE (D)
  export const deleteQuote = (id) => ({
    type: DELETE_QUOTE,
    data: { id }
  });