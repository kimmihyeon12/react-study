function Movie({movie , removeMovie}){
    return (
    <div className="flex justify-between border rounded-md p-2 mt-1 ">
        <div className="flex items-end">
        <div>{movie.title}</div>
        <div className="text-xs text-red-300">({movie.year})</div>
        </div>
      
        <div>
            <button onClick={()=>{removeMovie(movie.id)}}>삭제</button>
        </div>
    </div>);
 
}
export default Movie