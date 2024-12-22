import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Features/UserSlice";
import PostReducer from "./Features/PostSlice";

export const store=configureStore({
    reducer:{counter:UserReducer,
            posts:PostReducer
    }
});