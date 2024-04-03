import {configureStore} from "@reduxjs/toolkit";

import LibroReducer from "./librosSlice";
import AutoreReducer from "./autoresSlice";

export default configureStore({
    reducer:{
        LibroState: LibroReducer,
        AutorState: AutoreReducer
    }
})