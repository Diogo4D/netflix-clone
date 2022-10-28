import React, { useState } from 'react';
import './MovieRow.css'

const MovieRow = ({title, items}) => {

    const [scrollX, setcrollX] = useState(0);

    const hangleLeftArraw = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
        }
        setcrollX(x)
    }
    const hangleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x ) {
            x = window.innerWidth - listW - 60;
        }
        setcrollX(x)
    }

    return ( 
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movieRow--left' onClick={hangleLeftArraw}>
                <ion-icon name="chevron-back-outline" />
            </div>

            <div className='movieRow--right' onClick={hangleRightArrow}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: 150 * items.results.length
                }} >
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>                
            </div>
        </div>
        );
}
 
export default MovieRow;