import {DeleteButton} from "./DeleteButton";
import {EditButton} from "./EditButton";
import classes from "./ChatQuestionItem.module.css";

export const ChatQuestionItem = ({chatQ}) => (

    <div key={chatQ.id}>
        <div to={`/${chatQ.id}`}>{chatQ.author}: {chatQ.text}</div>
        <div className={classes.button}>
            <DeleteButton id={chatQ.id}/>
            <EditButton id={chatQ.id}/>
        </div>
    </ div>
);

