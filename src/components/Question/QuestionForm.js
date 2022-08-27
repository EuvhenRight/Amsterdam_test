import {useState} from "react";
import classes from "./QuestionForm.module.css";


export const QuestionForm = ({onSubmit}) => {
    let [value, setValue] = useState(null)

    const handleChangeQuestion = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
    }

    console.log(value)

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formText}> Question
                <div>
                    <input className={classes.input}
                           value={value}
                           onChange={handleChangeQuestion}
                           type="text"/>
                </div>
            </div>
            <div className={classes.formText}> Answer {/* TODO did not reach */}
                <div>
                    <input className={classes.input}
                           onChange={handleChangeQuestion}
                           type="text"/>
                </div>
            </div>
            <div>
                {!value ? <button disabled>Create Question</button> :
                    <button className={classes.CBut}> Create Question</button>}
            </div>
        </form>
    )
}


