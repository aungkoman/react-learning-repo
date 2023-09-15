
const CommentCard = ({comment, deleteComment}) => {
    return <div key={comment.id}>
        <h2 >{ comment.user.name }</h2>
        <p> { comment.content  } </p>
    </div>
};
export default CommentCard;