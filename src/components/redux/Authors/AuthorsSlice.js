import {createSlice} from '@reduxjs/toolkit'
import {AUTHORS} from "../../utils/constants";



const initialState = {
    authors: [
        {
            id: 0,
            name: AUTHORS.Questions,
        },
        {
            id: 1,
            name: AUTHORS.Answers,
        }
    ]
}

export const authorsSlice = createSlice({
        name: 'authors',
        initialState,
        reducers: {}
    }
)


export default authorsSlice.reducer

