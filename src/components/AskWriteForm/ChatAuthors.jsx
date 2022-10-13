import {useSelector} from "react-redux";


const ChatAuthors = ({authorsId}) => {

    const authors = useSelector(state => state.authors.authors);

    const author = authors.find(author => author.name === authorsId);

    return(
        <span> by: {author ? author.name : "Unknown author"}</span>
    )
}

export default ChatAuthors;