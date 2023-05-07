import React, { useEffect, useState } from 'react'
import "./Home.scss";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import Card from './Card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
const apikey="e160d3e4983766de0ecda6d038a65563";

// const arr=[{img:"https://i.imgur.com/Lmi4Jnv.jpeg"}]
const url="https://api.themoviedb.org/3/movie/";
const upcoming="upcoming";
const popular="popular";
const topRatedMovie="top_rated"

const posterurl="https://image.tmdb.org/t/p/w500"

function GenreBox(props){
  return(
  <div className='genreclass'>
    <div>
      {
          props.arr.map((item)=>(
          <Link className='genre' key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        ))
      }
      </div>
  </div>
  )
};

function Row(props){
  return(
  <div className='row'>
    <h1>{props.title}</h1>
    <div>
      {
          props.arr.map((item,index)=>(
          <Card key={index} src={`${posterurl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
  )
};

const Home = () => {
  const [upcomingMovie,setUpcomingMovie]=useState([])
  const [popularMovies,setPopularMovies]=useState([])
  const[topRated,setTopRated]=useState([]);
  const[nowPlaying,setNowPlaying]=useState([]);
  const[tvShows,setTvShows]=useState([]);
  const[genre,setGenre]=useState([]);

  useEffect(()=>{
    const fetchUpcoming=async()=>{
      const{data:{results}}=await axios.get(`${url}/${upcoming}?api_key=${apikey}`)
      setUpcomingMovie(results)
    };
    const fetchPopular=async()=>{
      const{data:{results}}=await axios.get(`${url}/${popular}?api_key=${apikey}`)
      
      setPopularMovies(results)
    };
    const fetchTopRated=async()=>{
      const{data:{results}}=await axios.get(`${url}/${topRatedMovie}?api_key=${apikey}`)
      setTopRated(results)
    };
    const fetchNowPlaying=async()=>{
      const{data:{results}}=await axios.get(`${url}/now_playing?api_key=${apikey}`)
      setNowPlaying(results)
    };
    const fetchTvShows=async()=>{
      const{data:{results}}=await axios.get(`https://api.themoviedb.org/3/tv/popular/?api_key=${apikey}`)
      setTvShows(results)
    };

    const fetchGenre=async()=>{
      const{data:{genres}}=await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`)
      setGenre(genres);
    }
    fetchGenre()
    fetchTvShows();
    fetchNowPlaying();
    fetchTopRated();
    fetchUpcoming();
    fetchPopular();
  },[])
  return (
    <section className='home'>
      <div className="banner"
                style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${posterurl}/${popularMovies[1].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

                <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
      </div>
      <Row title={'Popular on Netflix'} arr={popularMovies}/>
      <Row title={'Upcoming Movie'} arr={upcomingMovie}/>
      <Row title={'Top Rated'} arr={topRated}/>
      <Row title={'Now Playing'} arr={nowPlaying}/>
      <Row title={'Tv Shows'} arr={tvShows}/>
      <GenreBox arr={genre} />
    </section>
  )
  }


export default Home


/* function Row(props){
  return(
  <div className='row'>
    <h1>{props.title}</h1>
    <div>
      <Card src={props.src} />
      <Card src={props.src} />
      <Card src={props.src} />
      <Card src={props.src} />
      <Card src={props.src} />
      <Card src={props.src} />
      <Card src={props.src} />
    </div>
    </div>
  );
} */
