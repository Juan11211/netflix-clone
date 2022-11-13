import React from 'react'
import './HomeScreen.css'
import NavBar  from '../Navbar/NavBar'
import Banner from '../Banner/Banner'
import requests from '../Requests'
import Row from '../Row/Row'

export default function HomeScreen() {
  return (
    <div>
        <NavBar />
        <Banner />
        <Row 
          // passing props 
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row 
          // passing props 
          title='Trending'
          fetchUrl={requests.fetchTrending}
          isLargeRow
        />
        <Row 
          // passing props 
          title='Top Rated'
          fetchUrl={requests.fetchTopRated}
          isLargeRow
        /> 
        <Row 
        // passing props 
        title='Action'
        fetchUrl={requests.fetchAction}
        isLargeRow
      />
       <Row 
          // passing props 
          title='Comedy'
          fetchUrl={requests.fetchComedy}
          isLargeRow
        />
         <Row 
          // passing props 
          title='Horror'
          fetchUrl={requests.fetchHorror}
          isLargeRow
        />
         <Row 
          // passing props 
          title='Romantic'
          fetchUrl={requests.fetchRomantic}
          isLargeRow
        />
    </div>
  )
}
