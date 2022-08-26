export const ADD_CHAT_QUESTION = "MESSAGES::ADD_CHAT_QUESTION";
export const DELETE_CHAT_QUESTION = "MESSAGES::DELETE_CHAT_QUESTION";
export const EDIT_CHAT_QUESTION = "MESSAGES::EDIT_CHAT_QUESTION";


const initialState = [];

export const ChatQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT_QUESTION: {
            return [...state, {
                id: action.payload.id,
                author:action.payload.author,
                text: action.payload.text
            },]
        }
        case DELETE_CHAT_QUESTION: {
            return state.filter(({id}) => id !== action.payload)

        }
        case
        EDIT_CHAT_QUESTION: {
            const {chatQId, idToEdit, updQuest} = action.payload;
            const editIndex = state[chatQId].findIndex((text) => text.id === idToEdit);// TODO not work!!!

            const newState = {...state};
            newState[chatQId][editIndex] = {
                ...newState[chatQId][editIndex],
                text: updQuest,
            };
            return newState;
        }

        default:
            return state;
    }
}

export const addChatQuestion = (id, author, text) => ({
    type: ADD_CHAT_QUESTION,
    payload: {
        id,
        author,
        text
    }
});

export const deleteChatQuestion = (id) => ({
    type: DELETE_CHAT_QUESTION,
    payload: id
});


export const editChatQuestion = (id, text, updQuest) => ({
    type: EDIT_CHAT_QUESTION,
    payload: {
        id,
        text,
        updQuest
    }
});

let timeout

export const AddChatQWithThunk = (id, author, text) => (dispatch) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
    dispatch(addChatQuestion(id, author, text));
    },5000)
}