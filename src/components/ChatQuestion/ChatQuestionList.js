import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {QuestionForm} from "../Question/QuestionForm";
import {ChatQuestionItem} from "../utils/ChatQuestionItem";
import {AddChatQWithThunk} from "../redux/ChatQuestion/ChatQuestionReducer";
import {selectChatQuestions} from "../redux/ChatQuestion/selector";
import {AUTHORS} from "../utils/constants";
import classes from "./ChatQuestion.module.css";


const ChatQuestionList = () => {

    const chatQ = useSelector(selectChatQuestions);
    // const [fetching, setFetching] = useState(false); // TODO add add <Preloader />
    const dispatch = useDispatch();

    const handleAddChat = (text, author) => {
        const newChatQ = {
            id: `chatQ-${Date.now()}`,
            author,
            text,
        }
        dispatch(AddChatQWithThunk(newChatQ, AUTHORS.ME, text))
    };

    return (
        <>
            <div className={classes.main}> Created question
                <span className={classes.help}>?</span> {/* TODO need it is UseToggle */}
                {/*<div> {fetching ? <div>loading...</div> : null} TODO need add <Preloader />*/}
                    {chatQ.map((chatQ) => (
                        <ChatQuestionItem key={chatQ.id} chatQ={chatQ}/>
                    ))}
                </div>
            <div>
                <button> Sort Question</button> {/* TODO need it is necessary to put array.sort */}
                <button> Remove All Question</button> {/* TODO need it is necessary to put AC delete all */}
            </div>
            <div>
                <QuestionForm onSubmit={handleAddChat}/>
            </div>
            <Outlet/>
        </>
    );
}

export default ChatQuestionList