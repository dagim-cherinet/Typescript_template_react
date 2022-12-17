import React, {  createContext, useReducer  } from "react";

interface AppProp{
    children: React.ReactNode;
}

export interface GlobalState{
    counter: number;
   
}

let initialState: GlobalState = {
    counter: 0,
}


// this approach will be more strict that is will bring too many lines of code in defining the shape of
// the global functions that will be used in the initialization during createContex
//const AppContext = createContext<GlobalState>({...initialState, increment(){}, decrement(){}});

//this approach will be very flexible and doesn't require any extra definition of the shape of the global

const AppContext = createContext<any>({});
//reducer
const reducer = (state: any, action: any) => {
    let { counter } = state;
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: counter + 1 };   
        case 'DECREMENT':
            return { ...state, counter: counter - 1 };
         case 'RESET':
             return { ...state, counter: 0 };
    }
}

function AppProvider({ children }: AppProp) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {
        dispatch({ type: 'INCREMENT' });
       // console.log("increment")
    }
    const decrement = () => {
    dispatch({type: 'DECREMENT'})
  //  console.log('decrement');
    };
     const reset = () => {
    dispatch({type: 'RESET'})
  //  console.log('decrement');
};
    return (
        <AppContext.Provider value={{...state, increment,decrement, reset}}>
            {children}
        </AppContext.Provider>
 )
}

export {AppProvider, AppContext}


