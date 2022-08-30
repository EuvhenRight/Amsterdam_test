import classes from "./QuestionForm.module.css";
import {useState} from "react";


export const QuestionForm = ({chatQ,onSubmit}) => {
    // eslint-disable-next-line no-undef
    let [value, setValue] = useState()

    const handleChangeQuestion = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formText}> Question
                <div>
                     <input className={!value ? classes.input : classes.inputActive}
                            key={chatQ.id}
                           value={value}
                           onChange={handleChangeQuestion}
                           type="text"/>
                </div>
            </div>
            <div className={classes.formText}> Answer {/* TODO did not reach */}
                <div>
                    <input className={!value ? classes.input : classes.inputActive}
                           value={value}
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


