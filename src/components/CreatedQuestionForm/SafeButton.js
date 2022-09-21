import classes from "./CreatedQuestionForm.module.css"




const saveButton = ({setIsLoading, setIsEditing}) => {

    const editTime = () => {
        setTimeout(() => {
            setIsEditing(false)
            setIsLoading(false)
        }, 2000)
        setIsLoading(true)
    }

    return (
        <button onClick={editTime} className={classes.saveBut}>Save</button>
    )

};

export default saveButton;
