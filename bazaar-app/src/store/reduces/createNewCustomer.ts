import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from '../constants/createNewCustomer';
  
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
export function createNewCustomerReducer(state = initialState, action: any) {
    // console.log("fetchDataWorker initialState", action?.data, initialState?.data)
   
 switch (action?.type) {
   case FETCH_DATA_SUCCESS: {
    // console.log("fetchDataWorker FETCH_DATA_SUCCESS", action?.data)
         return {
       ...state,
       data: action.data,
     };
   }
   case FETCH_DATA_FAILURE: {
    // console.log("fetchDataWorker FETCH_DATA_FAILURE", action?.data)
     return {
       ...state,
       data: action.payload, 
     }
   }
   default:
     return {
       ...state,
     };
 }
}
 
  
 export default createNewCustomerReducer;
  