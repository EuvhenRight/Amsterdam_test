import {AUTHORS} from "../../utils/constants";
import {ADD_CHAT_QUESTION, DELETE_CHAT_QUESTION} from "../ChatQuestion/ChatQuestionReducer";

export const ADD_QUESTION = "MESSAGES::ADD_QUESTION";
export const DELETE_QUESTION = "MESSAGES::DELETE_QUESTION";
export const EDIT_QUESTION = "MESSAGES::EDIT_QUESTION";


const initialState = {};

export const QuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION: {
            return {
                ...state, [action.payload.questId]: [...state[action.payload.questId], action.payload.newQuest],
            };
        }
        case DELETE_QUESTION: {
            return {
                ...state,
                [action.payload.questId]: state[action.payload.questId].filter((question) =>
                    question.id !== action.payload.idToDelete),
            };
        }
        case EDIT_QUESTION: {
            const {questId, idToEdit, updQuest} = action.payload;
            const editIndex = state[questId].findIndex((question) => question.id === idToEdit);

            const newState = {...state};
            newState[questId][editIndex] = {
                ...newState[questId][editIndex],
                text: updQuest,
            };
            return newState;
        }
        case ADD_CHAT_QUESTION: {
            return {
                ...state, [action.payload.id]: [],
            };
        }
        case DELETE_CHAT_QUESTION: {
            const newQuest = { ...state };
            delete newQuest[action.payload];
            return newQuest;
        }
        default:
            return state;
    }
}



export const addQuestion = (questId, newQuest) => ({
    type: ADD_QUESTION,
    payload: {
        questId,
        newQuest,
    },
});

export const deleteQuestion = (questId, idToDelete) => ({
    type: DELETE_QUESTION,
    payload: {
        questId,
        idToDelete,
    },
});

export const editQuestion = (questId, idToEdit, updQuest) => ({
    type: EDIT_QUESTION,
    payload: {
        questId,
        idToEdit,
        updQuest,
    },
});


let timeout;

export const AddQuestionWithThunk = (questId, newQuest) => (dispatch) => {
    dispatch(addQuestion(questId, newQuest));

    if (newQuest.author !== AUTHORS.BOT) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const questBot = {
                text: "My name Siri, nice to meet you",
                author: AUTHORS.BOT,
                id: `mes - ${Date.now()}`,
            };
            dispatch(addQuestion(questId, questBot));
        }, 5000);
    }
};