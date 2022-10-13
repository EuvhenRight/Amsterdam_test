import classes from "./CreatedQuestionForm.module.css"




const EditButton = ({setIsEditing}) => {


    return (
        <button onClick={() => setIsEditing(true)} className={classes.editBut}>Edit</button>
    )

};

export default EditButton;
