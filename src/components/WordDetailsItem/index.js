import { useParams } from "react-router-dom";
import './index.css' 

const WordDetailsItem = props => {
    const { id } = useParams(); 

     return (
     <div className="">
     <h1 className="">WordDetailsItem: {id }</h1>
     <div className="frame-container">
        <iframe className="iframesWord" src={`https://dictionary.cambridge.org/dictionary/english/${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://www.dictionary.com/browse/${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://www.vocabulary.com/dictionary/${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://www.urbandictionary.com/define.php?term=${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://en.wiktionary.org/wiki/${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://www.thefreedictionary.com/${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://visuwords.com/${id}`} title=""></iframe>
        <iframe className="iframesWord" src={`https://www.pexels.com/search/${id}`} title=""></iframe>



        </div> 
     </div>
     )  
      
}

export default WordDetailsItem