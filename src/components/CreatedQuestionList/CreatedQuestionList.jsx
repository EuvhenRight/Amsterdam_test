import classes from "./CreatedQuestionList.module.scss";
import React from "react";
import CreatedQuestionForm from "../CreatedQuestionForm/CreatedQuestionForm";
import AskWriteForm from "../AskWriteForm/AskWriteForm";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllChat} from "../redux/ChatQuestion/ChatQuestionSlice"
import {Box, Stack} from "@mui/material";


const CreatedQuestionList = () => {

    const dispatch = useDispatch();

    const chatQ = useSelector(state => state.chatQuestion.chatQ);

    const realTime = chatQ.slice().sort((a, b) => b.date.localeCompare(a.date))

    const handleAllDeleteChat = () => {
        dispatch(deleteAllChat())
    }

    const renderedChatQ = realTime.map(chat => (
        <CreatedQuestionForm key={chat.id} chat={chat}/>
    ))

    return (
        <>
            <Stack mt={10}
                   direction={"row"}>
                <Box flex={1}>
                    <Box position={"fixed"} ml={10}>
                        <AskWriteForm {...chatQ}/>
                    </Box>
                </Box>
                <Box className={classes.main} flex={2}>
                    <div className={classes.chatQuestions}> Created Questions
                    </div>
                    <div>
                        {chatQ.length > 0 ? <section className={classes.questionItem}>
                                {renderedChatQ}</section> :
                            <div disabled className={classes.questionItemDisabled}> Add question a using below</div>}
                    </div>
                </Box>
                <Box flex={1} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box position={"fixed"} >
                        <div className={classes.buttonQuestionlist}>
                            {chatQ.length > 0 ?
                                <button onClick={() => handleAllDeleteChat()} className={classes.remBut}> Remove All
                                    Question
                                </button> :
                                <button disabled> Remove All Question</button>}
                        </div>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default CreatedQuestionList
