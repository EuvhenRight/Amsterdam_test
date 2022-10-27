import classes from "./CreatedQuestionList.module.scss";
import React from "react";
import CreatedQuestionForm from "../CreatedQuestionForm/CreatedQuestionForm";
import AskWriteForm from "../AskWriteForm/AskWriteForm";
import {useDispatch, useSelector} from "react-redux";
import {Box, Stack, styled} from "@mui/material";
import {grey} from "@mui/material/colors";


const SecondBox = styled(Box)(({theme}) => ({
    position: "fixed",
    marginLeft:'10px',
        [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    bottom: 0, left: 0, right: 0,
    background: grey[600],
},
            [theme.breakpoints.up('md')]: {
    marginLeft: '50px',
}
}));

const FirstBox = styled(Box)(({theme}) => ({
    flex: 1,
    [theme.breakpoints.down('sm')]: {
        flex: 0,
    }
}));


const CreatedQuestionList = () => {

    const dispatch = useDispatch();

    const chatQ = useSelector(state => state.chatQuestion.chatQ);

    const realTime = chatQ.slice().sort((a, b) => b.date.localeCompare(a.date))


    const renderedChatQ = realTime.map(chat => (
        <CreatedQuestionForm key={chat.id} chat={chat}/>
    ))

    return (
        <>
            <Stack mt={10}
                   direction={"row"}>
                <FirstBox>
                    <SecondBox>
                        <AskWriteForm chatQ={chatQ}/>
                    </SecondBox>
                </FirstBox>
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
