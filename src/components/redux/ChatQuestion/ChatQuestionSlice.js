import {createSlice} from '@reduxjs/toolkit'
import {AUTHORS} from "../../utils/constants";
import {sub} from "date-fns"


const initialState = { // My state in Slice
    chatQ: [
        {
            id: 1,
            authorsId: AUTHORS.Questions,
            text: 'This is a message for those who are viewing this site. I have not made a good layout on this page yet. ' +
                'Its purpose is to show you that I understand what Hooks and Redux Toolkit are, how to use Slice, ' +
                'how the React tree and component work, how information is exchanged, and how data interaction happens' +
                ' in React. I understand that this is A primitive and succinct version of the web application, ' +
                'but the journey of a thousand miles begins with one step.',
            date: sub(new Date(), {minutes: 10}).toISOString()
        },
        {
            id: 2,
            authorsId: AUTHORS.Answers,
            text: 'I am ready to learn and work HARD! P.S. As you are reading it I am creating all the components "TypeScript"... ',
            date: sub(new Date(), {minutes: 5}).toISOString()
        }
    ],

}


export const chatQuestionSlice = createSlice({
        name: 'chatList',
        initialState,
        reducers: { // logic in Slice
            setAddChatQ(state, action) {
                state.chatQ.push(action.payload)
            },

            deleteAddChat: (state, action) => {
                const chatId = action.payload
                state.chatQ = state.chatQ.filter(({id}) => id !== chatId)
            },
            deleteAllChat(state) {
                state.chatQ = []
            },
            sortChat: (state) => {
                const newSortArray = [...state.chatQ]
                state.chatQ = newSortArray.slice().sort((a, b) => a.text > b.text ? 1 : -1)
            },

            setEditText: (state, action) => {
                const editBy = action.payload
                state.chatQ = state.chatQ.map(chat => {
                    if (chat.id === editBy.id) {
                        return editBy;
                    } else {
                        return chat;
                    }
                });
            }
        }
    }
)


export const {setAddChatQ, deleteAddChat, deleteAllChat, setEditText} = chatQuestionSlice.actions


export default chatQuestionSlice.reducer

