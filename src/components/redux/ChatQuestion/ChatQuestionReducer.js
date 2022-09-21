import {AUTHORS as AUTHOR} from "../../utils/constants";

export const ADD_CHAT_QUESTION = "MESSAGES::ADD_CHAT_QUESTION";
export const DELETE_CHAT_QUESTION = "MESSAGES::DELETE_CHAT_QUESTION";
export const EDIT_CHAT_QUESTION = "MESSAGES::EDIT_CHAT_QUESTION";
export const DELETE_ALL_CHAT_QUESTION = "MESSAGES::DELETE_ALL_CHAT_QUESTION";

const initialState = []




// TODO need create object, add isFetching: boolean!!!
//
// export const ChatQuestionReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_CHAT_QUESTION:
//             return [...state, {id: `chatQ-${Date.now()}`, author: AUTHOR.ME,  text: action.payload.text
//             },]
//
//         case
//         DELETE_CHAT_QUESTION: {
//             return state.filter(({id}) => id !== action.payload)
//
//         }
//         case
//         EDIT_CHAT_QUESTION: {
//             const {id, idToEdit, updQuest} = action.payload;
//             const editIndex = state.findIndex((text) => text.id === idToEdit);// TODO not work!!!
//
//             const newState = [...state];
//             newState[id][editIndex] = {
//                 ...newState[id][editIndex],
//                 text: updQuest,
//             };
//             return newState;
//         }
//         case
//         DELETE_ALL_CHAT_QUESTION: {
//             return state.filter(({id}) => id === action.payload)
//         }
//         default:
//             return state;
//     }
// }
//
// export const addChatQuestion = (text) => ({
//     type: ADD_CHAT_QUESTION,
//     payload: {
//         text,
//     }
// });
//
// export const deleteChatQuestion = (id) => ({
//     type: DELETE_CHAT_QUESTION,
//     payload: id
// });
//
//
// export const editChatQuestion = (id, text, updQuest) => ({
//     type: EDIT_CHAT_QUESTION,
//     payload: {
//         id,
//         text,
//         updQuest
//     }
// });
//
// export const deleteAllQuestion = (id, idToDelete) => ({
//     type: DELETE_ALL_CHAT_QUESTION,
//     payload: {
//         id,
//         idToDelete,
//     },
// });
//
// let timeout
//
// export const AddChatQWithThunk = (newText) => (dispatch) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         dispatch(addChatQuestion(newText));
//     },5000)
// }