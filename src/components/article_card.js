
import { Outlet, Link } from "react-router-dom";
import '../styles/main.css';

const ArticleCard = ({article, upVote, unVote, downVote}) => {
    return <div key={article.id} className="article-card">
        <div className="article-card-header">
            this is header
            <img className="profile-image" src="https://i.ibb.co/KFdhLnP/Reactive-with-React.png" />
        </div>
        <div className="article-card-body">
            this is body
        </div>
        <div className="article-card-footer">
            this is body
        </div>

        <hr></hr>
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
        <span>({ article.up_vote}) Up Vote(s)</span>
        
        <Link to={ "/comments?article_id="+ article.id } >( {article.comment_count} ) Comments</Link>
        { article.user_vote == 0 
            ? <button onClick={ () => unVote(article.id) } > Un Vote </button>
            : <button onClick={ () => downVote(article.id) } > Down Vote </button>
        }
        <span>({ article.down_vote}) Down Vote(s)</span>
        
    </div>
};
export default ArticleCard;