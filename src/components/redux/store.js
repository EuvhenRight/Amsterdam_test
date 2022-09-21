import { configureStore } from '@reduxjs/toolkit'
import chatQuestion from "../redux/ChatQuestion/ChatQuestionSlice";
import authors from "./Authors/AuthorsSlice";



export const store = configureStore({
    reducer: {
        chatQuestion,
        authors,
        // counter: counterReducer,
    },
})
