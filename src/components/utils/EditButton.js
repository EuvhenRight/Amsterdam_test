import {useDispatch} from "react-redux";
import {editChatQuestion} from "../redux/ChatQuestion/ChatQuestionReducer";
import {useParams} from "react-router-dom";
import classes from "./ChatQuestionItem.module.css";


export const EditButton = ({id}) => {
    const {text} = useParams();
    const dispatch = useDispatch();

    const handleEditChat = () => {
        dispatch(editChatQuestion(text, id, "changed"));
    };
    return <button className={classes.ediBut} onClick={handleEditChat}>Edit</button>;
};
