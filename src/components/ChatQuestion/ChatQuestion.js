import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectQuestions} from "../redux/Question/selector";
import {AUTHORS} from "../utils/constants";
import {AddQuestionWithThunk} from "../redux/Question/QuestionReducer";
import QuestionList from "../Question/QuestionList";
import {QuestionForm} from "../Question/QuestionForm";


function ChatQuestion () { {/* TODO dont work and I dont no why...*/}

    const {questId} = useParams();

    const questions = useSelector(selectQuestions);
    // const [questions, SetQuestions] = useState([]);
    const dispatch = useDispatch();



    const handleAddMessage = (text) => {
        sendMessage(text, AUTHORS.ME);
    };

    const sendMessage = (text, author) => {
        const newQuest = {
            text,
            author,
            id: `mes - ${Date.now()}`,
        };
        dispatch(AddQuestionWithThunk(questId, newQuest));

        return (
            <div>
                    <div>
                        <QuestionList questions={questions}/>
                    </div>
                    <QuestionForm onSubmit={handleAddMessage}/>
            </div>
        );
    }
}
 export default ChatQuestion