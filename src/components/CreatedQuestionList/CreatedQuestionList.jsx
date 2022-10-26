import classes from "./CreatedQuestionList.module.scss";
import React from "react";
import CreatedQuestionForm from "../CreatedQuestionForm/CreatedQuestionForm";
import AskWriteForm from "../AskWriteForm/AskWriteForm";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllChat} from "../redux/ChatQuestion/ChatQuestionSlice"
import {Box, Stack, styled} from "@mui/material";
import {grey} from "@mui/material/colors";


const NewBox = styled(Box)(({theme}) => ({
    position: "fixed",
    marginLeft: "50px",
    [theme.breakpoints.down('md')]: {
        marginLeft: 5,
        bottom: 1, left: 0, right: 0,
        background: grey[400]
    }
}));

const SecondBox = styled(Box)(({theme}) => ({
    flex: 1,
    [theme.breakpoints.down('md')]: {
        flex: 0,
    }
}));


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
                <SecondBox>
                    <NewBox>
                        <AskWriteForm {...chatQ}/>
                        <div className={classes.buttonQuestionlist}>
                            {chatQ.length > 0 ?
                                <button onClick={() => handleAllDeleteChat()} className={classes.remBut}> Remove All
                                    Question
                                </button> :
                                <button disabled> Remove All Question</button>}
                        </div>
                    </NewBox>
                </SecondBox>
                <Box className={classes.main} flex={2}>
                    <div className={classes.chatQuestions}> Created Questions
                    </div>
                    <div>
                        {chatQ.length > 0 ? <section className={classes.questionItem}>
                                {renderedChatQ}</section> :
                            <div disabled className={classes.questionItemDisabled}> Add question a using below</div>}
                    </div>
                </Box>
            </Stack>
        </>
    )
}

export default CreatedQuestionList
