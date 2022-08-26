import {useState} from "react";


export const QuestionForm = ({onSubmit}) => {
    let [value, setValue] = useState('')

    const handleChangeQuestion = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <span> Question
                <input
                    value={value}
                    onChange={handleChangeQuestion}
                    type="text"/>
            </span>
            <span> Answer {/* TODO did not reach */}
                <input
                    onChange={handleChangeQuestion}
                    type="text"/>
            </span>
            <div>
                <button> Create Question</button>
            </div>


        </form>
    )


}

