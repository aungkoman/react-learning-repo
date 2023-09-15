
const ArticleCard = ({article, upVote, unVote, downVote}) => {
    return <div key={article.id}>
        <h2 >{ article.title }</h2>
        <p> { article.content } </p>
        <span>{article.user_vote}</span>
        {/* 
            ဒီ Function ကို onClick မှ ခေါ်ပါဆိုတာကို ဘယ်လိုလုပ်ကြမလဲ?
            Up Vote ခလုပ်က အခြေအနေ နှစ်ခု မှာ ရှိနိုင်တယ်။
            user_vote က 1 ဒါမှမဟုတ် အခြား တစ်ခုခု
        */}
        { article.user_vote == 1 
            ? <button onClick={ () => unVote(article.id) } > Un Vote </button>
            : <button onClick={ () => upVote(article.id) } > Up Vote </button>
        }
        
        <span>Comment</span>
        { article.user_vote == 0 
            ? <button onClick={ () => unVote(article.id) } > Un Vote </button>
            : <button onClick={ () => downVote(article.id) } > Down Vote </button>
        }
        
    </div>
};
export default ArticleCard;