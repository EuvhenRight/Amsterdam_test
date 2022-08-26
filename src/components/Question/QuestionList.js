import {Question} from "./Question";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteQuestion, editQuestion} from "../redux/Question/QuestionReducer";
import {QuestionForm} from "./QuestionForm";

const QuestionList = ({questions}) => {

    const {questId} = useParams();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteQuestion(questId, id));
    };
    const handleEdit = (id) => {
        dispatch(editQuestion(questId, id, "changed"));
    };

    return questions.map((question) => (
            <div key={question.id}>
                <Question text={question.text} author={question.author}/>
                <QuestionForm />
                <div>
                    <button onClick={() => handleDelete(question.id)}>Delete Question</button>
                </div>
                <div>
                    <button onClick={() => handleEdit(question.id)}>Edit Question</button>
                </div>
            </div>
    ));
}

export default QuestionList
