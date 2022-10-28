import React, { useEffect, useState } from 'react';

import loading from './components/imgs/Netflix_LoadTime.gif'

import "./App.css"
import Header from './components/Header';
import Tmdb from './Tmdb.js'
import MovieRow from './components/MovieRow.js';
import FeacturedMovie from './components/FeacturedMovie';

function App() {

  const [movieList, setMovieList] = useState([]);

  const [feacturedData, setFeacturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // Pegando o Feactured
      let originals = list.filter(i=> i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeacturedData(choseInfo)
    }

    loadAll();
  }, []);
  
  return (
    <>
      <div className='page'>

        <Header />

        {feacturedData && 
          <FeacturedMovie item={feacturedData} />
        }

        <section className='lists'>
          {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>

        {movieList.length <= 0 &&
          <div className='loading'>
            <img src={loading} alt='Carregando'></img>
          </div>
        }
      </div>
    </>
  );
}

export default App;
