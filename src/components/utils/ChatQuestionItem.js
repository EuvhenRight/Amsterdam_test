import {DeleteButton} from "./DeleteButton";
import {EditButton} from "./EditButton";
import classes from "./ChatQuestionItem.module.css";


//
export const ChatQuestionItem = ({chatQ}) => {
//
//     const picture = useRef(null)
//     const handleMouseClick = () => {
//
//         picture.current.addEventListener() ;
//     }
// console.log(handleMouseClick)
    return (
        <div className={classes.questionMessage} key={chatQ.id}>
             <div  to={`/${chatQ.id}`}>{chatQ.author}: {chatQ.text}
            </div> <div>A: I know everything</div>
            <div>
                <span><EditButton id={chatQ.id}/></span>
                <span><DeleteButton id={chatQ.id}/></span>
            </div>

        </ div>
    )
}
