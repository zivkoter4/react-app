function MovieCard(props){
    return(
        <>
        <h2>{props.title}</h2>
        <p>{props.year} | {props.genre}</p>
        <p>{props.rating}/10⭐</p>
        </>
    )
}
export default MovieCard;
