import {DeleteButton} from "./DeleteButton";
import {EditButton} from "./EditButton";
import classes from "./ChatQuestionItem.module.css";

export const ChatQuestionItem = ({chatQ}) => (

    <div key={chatQ.id}>
        <div to={`/${chatQ.id}`}>{chatQ.author}: {chatQ.text}
        <div className={classes.button}>
            <span><DeleteButton id={chatQ.id}/></span>
            <span><EditButton id={chatQ.id}/></span>
        </div>
        </div>
    </ div>
);

