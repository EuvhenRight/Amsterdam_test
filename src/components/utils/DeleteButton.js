import {useDispatch} from "react-redux";
import {deleteChatQuestion} from "../redux/ChatQuestion/ChatQuestionReducer";


export const DeleteButton = ({ id }) => {
    const dispatch = useDispatch();

    const handleDeleteChat = () => {
        dispatch(deleteChatQuestion(id));

    };

    return <button onClick={handleDeleteChat}>Delete</button>;
};