
const ArticleCard = ({article, upVote}) => {
    return <div key={article.id}>
        <h2 >{ article.title }</h2>
        <p> { article.content } </p>
        <span>{article.user_vote}</span>
        {/* ဒီ Function ကို onClick မှ ခေါ်ပါဆိုတာကို ဘယ်လိုလုပ်ကြမလဲ? */}
        <button onClick={ () => upVote(article.id) } > Up Vote | {article.user_vote == -1 ? "Not Yet" : ""} {article.user_vote == 1 ? "Already Up Vote" : ""}</button>
        <span>Comment</span>
        <span>Down Vote{article.user_vote == -1 ? "Not Yet" : ""} {article.user_vote == 0 ? "Already Down Vote" : ""}</span>
    </div>
};
export default ArticleCard;