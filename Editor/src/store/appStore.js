import {configureStore} from "@reduxjs/toolkit"
import skillSlice from "./skillSlice";

const appStore = configureStore({
    reducer:{
        skills:skillSlice
    }
});

export default appStore;