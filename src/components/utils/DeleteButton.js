import {useDispatch} from "react-redux";
import {deleteChatQuestion} from "../redux/ChatQuestion/ChatQuestionReducer";
import classes from "./ChatQuestionItem.module.css";


export const DeleteButton = ({ id }) => {
    const dispatch = useDispatch();

    const handleDeleteChat = () => {
        dispatch(deleteChatQuestion(id));

    };

    return <button className={classes.delBut} onClick={handleDeleteChat}>Delete</button>;
};