import classes from "./CreatedQuestionForm.module.css"
import {deleteAddChat} from "../redux/ChatQuestion/ChatQuestionSlice";
import {useDispatch} from "react-redux";


const DeleteButton = ({id}) => {
    const dispatch = useDispatch()
    // const { id } = useSelector(state => state.chatQ)

    const handleDeleteChat = () => {
        dispatch(deleteAddChat(id))
    }

    return <button
        type="button"
        className={classes.delBut}
        onClick={handleDeleteChat}
    >Delete</button>;
};

export default DeleteButton;
