
import './styles.css';

export const PostCard = ({title, cover, body, id }) => {
return(
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content"> 
                <h1>({id})</h1>
                <h1 >{title}</h1>
                <h1 >{body}</h1>
            </div>    
        </div>
    );
}


