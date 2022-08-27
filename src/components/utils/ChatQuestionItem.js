import {DeleteButton} from "./DeleteButton";
import {EditButton} from "./EditButton";
import classes from "./ChatQuestionItem.module.css";

export const ChatQuestionItem = ({chatQ}) => (

    <div className={classes.button} key={chatQ.id}>
        <div to={`/${chatQ.id}`}>{chatQ.author}: {chatQ.text}
        </div>
        <div>
            <span><EditButton id={chatQ.id}/></span>
            <span><DeleteButton id={chatQ.id}/></span>
        </div>

    </ div>
);

