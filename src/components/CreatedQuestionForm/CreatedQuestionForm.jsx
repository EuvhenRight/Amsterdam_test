import {useState} from "react";
import classes from "./CreatedQuestionForm.module.css";
import DeleteButton from "./DeleteButton";
import React from "react";
import EditButton from "./EditButton";
import {useDispatch} from "react-redux";
import {setEditText} from "../redux/ChatQuestion/ChatQuestionSlice";
import SaveButton from "./SafeButton";
import TimeAgo from "./TimeAgo";
import ChatAuthors from "../AskWriteForm/ChatAuthors";
import Preloader from "../Preloader/Preloader";

const CreatedQuestionForm = ({chat}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // const [autoAnswer, setAutoAnswer] = useState(false)

    const dispatch = useDispatch()

    const onChangeValue = (e) => {
        dispatch(setEditText({
            ...chat,
            text: e.target.value
        }));
    }

    let todoContext
    if (isEditing) {
        todoContext = (
            <>
                <div className={classes.questionMessageInput}>
                    <input
                        value={chat.text}
                        onChange={onChangeValue}/>
                    {isLoading && <Preloader/>}
                    <span>
                        <SaveButton setIsLoading={setIsLoading} setIsEditing={setIsEditing}/>
                        <DeleteButton {...chat} />
                    </span>
                </div>
            </>
        );
    } else {
        todoContext = (
            <>
                <div className={classes.questionMessage}>
                    <span className={classes.text}> Text: {chat.text.substring(0, 500)} <p><ChatAuthors authorsId={chat.authorsId}/> </p>
            </span>
                    <span>
                        <EditButton setIsEditing={setIsEditing}/>
                        <DeleteButton {...chat} />
                    </span>
                </div>

            </>
        );
    }

    return (
        <>
            {todoContext}
            <TimeAgo timestamp={chat.date}/>
        </>
    )
}

export default CreatedQuestionForm