import { configureStore } from "@reduxjs/toolkit";
import formReducer from './Formslice'; 

const store = configureStore({
    reducer: {
        
        form: formReducer, 
    },
});

export default store;
