import React from 'react';

import './FeacturedMovie.css'

const FeactureMovie = ({item}) => {
    
    console.log(item)

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres) {
        genres.push( item.genres[i].name )
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...'
    }


    return (
        <section className='feactured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${ item.backdrop_path })`,
        }}>
            <div className='feactured--vertical'>
                <div className='feactured--horizontal'>
                    <div className='feactured--name'>{ item.original_name }</div>
                    <div className='feactured--info'>
                        <div className='feactured--points'>{ item.vote_average } pontos</div>
                        <div className='feactured--year'>{ firstDate.getFullYear() }</div>
                        <div className='feactured--seasons'>{ item.number_of_seasons } temporada
                            {item.number_of_seasons !== 1 ? 's' : '' }
                        </div>
                    </div>
                    <div className='feactured--description'> { description } </div>
                    <div className='feactured--buttons'>
                        <a href={`/what/${item.id}`} className='play--button' >► Assistir</a>
                        <a href={`/list/add/${item.id}`} className='list--button' >+ Minha Lista</a>
                    </div>
                    <div className='feactured--genres'>
                        <strong>Generos:</strong> { genres.join(', ') }
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default FeactureMovie;