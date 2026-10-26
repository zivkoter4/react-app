
function FavoriteSong (){
    const song = {
    title: "Never Go Back",
    artist: "Dennis Lloyd",
    duration: 190,
    plays: 210000000
  };
    return(
        <>
        <p>{song.title}</p>
        <p>{song.artist}</p>
        <p>{Math.floor(song.duration/60)}:{song.duration % 60}</p>
        <p> {Math.floor(song.plays / 1000000)}M</p>
        </>
    )
}

export default FavoriteSong;