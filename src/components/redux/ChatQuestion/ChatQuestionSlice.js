import {createSlice} from '@reduxjs/toolkit'
import {AUTHORS} from "../../utils/constants";
import {sub} from "date-fns"


const initialState = {
    chatQ: [
        {
            id: 1,
            authorsId: AUTHORS.Questions,
            text: 'This is a message for those who view this site. I did not do a good layout on this page. ' +
                'Its purpose is to show you that I understand what Hooks, Redux Toolkit are, how to make a Slice, ' +
                'how the React tree works, components, what a page is, and how information is exchanged in React. ' +
                'I understand that this is primitive, but they always started with something.',
            date: sub(new Date(), {minutes: 10}).toISOString()
        },
        {
            id: 2,
            authorsId: AUTHORS.Answers,
            text: 'I ready hard learn and work! P.S. As you read I type all the components "TypeScript"...',
            date: sub(new Date(), {minutes: 5}).toISOString()
        }
    ],

}


export const chatQuestionSlice = createSlice({
        name: 'chatList',
        initialState,
        reducers: {
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


export const {setAddChatQ, deleteAddChat, deleteAllChat, sortChat, setEditText} = chatQuestionSlice.actions


export default chatQuestionSlice.reducer

