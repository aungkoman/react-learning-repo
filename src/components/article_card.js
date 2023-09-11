
const ArticleCard = ({article}) => {
    return <div key={article.id}>
        <h2 >{ article.title }</h2>
        <p> { article.content } </p>
        <span>{article.user_vote}</span>
        <span> Up Vote | {article.user_vote == -1 ? "Not Yet" : ""} {article.user_vote == 1 ? "Already Up Vote" : ""}</span>
        <span>Comment</span>
        <span>Down Vote{article.user_vote == -1 ? "Not Yet" : ""} {article.user_vote == 0 ? "Already Down Vote" : ""}</span>
    </div>
};
export default ArticleCard;