function Ticket({movie,hall,seat,price,count}){
    return(
        <div>
           <h3>{movie}</h3>
           <p>hall: {hall} - seat:{seat}</p>
           <p>price:{price+15}nis</p>
           <p>count:{count}</p>
           <p>total:{(price+15)*count}</p>
        </div>
    )
}