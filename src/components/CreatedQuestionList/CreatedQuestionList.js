import classes from "./CreatedQuestionList.module.css";
import React from "react";
import CreatedQuestionForm from "../CreatedQuestionForm/CreatedQuestionForm";
import AskWriteForm from "../AskWriteForm/AskWriteForm";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllChat, sortChat} from "../redux/ChatQuestion/ChatQuestionSlice"
import Preloader from "../Preloader/Preloader";


const CreatedQuestionList = () => {

    // const [isLoading, setIsLoading] = useState()

    const dispatch = useDispatch();

    const chatQ = useSelector(state => state.chatQuestion.chatQ);

    const realTime = chatQ.slice().sort((a, b) => b.date.localeCompare(a.date))

    const handleSortChat = () => {
        dispatch(sortChat())
    }
    const handleAllDeleteChat = () => {
        dispatch(deleteAllChat())
    }

    const renderedChatQ = realTime.map(chat => (
        <CreatedQuestionForm key={chat.id} chat={chat}/>
    ))

    // useEffect(() => {
    //     if ([chatQ.length++]) {
    //         setTimeout(() => {
    //             <Preloader/>
    //         },1000)
    //     }
    // })

    return (
        <>
            <div className={classes.main}>
                <div className={classes.chatQuestions}> Created Questions
                    <span className={classes.help}>?
                  <div className={classes.showMe}>You can find created questions and answers here</div>
                  </span>
                </div>
                {chatQ.length > 0 ? <section className={classes.questionItem}>
                        {renderedChatQ}</section> :
                    <div disabled className={classes.questionItemDisabled}> Add question a using below</div>}
                <div className={classes.buttonQuestionlist}>
                    {chatQ.length > 0 ?
                        <button onClick={handleSortChat} className={classes.sortBut}> Sort Question</button> :
                        <button disabled> Sort Question </button>}
                    {chatQ.length > 0 ?
                        <button onClick={() => handleAllDeleteChat()} className={classes.remBut}> Remove All Question
                        </button> :
                        <button disabled> Remove All Question</button>}
                </div>
                <div className={classes.addQuestions}> Create a New Questions
                    {/*{chatQ.length + 1 ? <Preloader/> : null}*/}
                    <span className={classes.help}>?
                         <div className={classes.showMe}>
                            You can find created questions and answers here</div>
                        </span>
                </div>
                <div className={classes.formQ}>
                    <AskWriteForm {...chatQ}/>
                </div>
            </div>
        </>
    )
}

export default CreatedQuestionList
