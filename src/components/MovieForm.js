
import {useState} from "react";
import InputField from "./InputField";
function MovieForm({addMovie}){
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    const validatedForm = () => {
        resetError()
        let validated = true
        if(!movieTitle){
            setTitleError('영화제목을 넣어주세요')
            validated = false
        }
        if(!movieYear){
            setYearError('개봉년도를 넣어주세요')
            validated = false
        }
        return validated
    
    }
    const resetError = () => {
        setTitleError('')
        setYearError('')
    }
    const resetForm = () => {
        setMovieTitle('')
        setMovieYear('')
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(validatedForm()){
        addMovie({
            id:Date.now(),
            title:movieTitle,
            year:movieYear})
            resetError()
            resetForm();
        }
       
    }
     return(
        
           <form onSubmit={onSubmit}>
               <InputField
               type="text"
               value={movieTitle}
               placeholder="영화제목"
               onChange={e=>setMovieTitle(e.target.value)}
               errorMessage={titleError}
               />
                <InputField
               type="number"
               value={movieYear}
               placeholder="개봉년도"
               onChange={e=>setMovieYear(e.target.value)}
               errorMessage={yearError}
               />
               <button >영화추가</button>
           </form>
         
    )
}
export default MovieForm