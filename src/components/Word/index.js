import {Link} from 'react-router-dom' 
import './index.css' 

const Word = props => {
    
    const {word} =props
    
     return (
     <div className="word-item">
        <Link className='link-text' to={`/meanings/${word}`} target="_blank" >
            <button className="" type="button"> {word}  </button> 
        </Link>
     </div>
     )  
      
}

export default Word