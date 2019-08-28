import React, { useEffect, useState } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovie } from '../../redux/actions/search'
import MovieResult from '../../components/MovieResult'
import { movieResults, isSearchLoading } from '../../redux/selectors'

export default ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state))
    const isLoading = useSelector(state => isSearchLoading(state))
    const [isLooked , setIsLooked] = useState(false)
    useEffect(() => {
        const { movieName } = queryString.parse(location.search)
        if (movieName && !isLooked) {
            setIsLooked(true)
            dispatch(searchMovie({ movieName }))

        }
    })
    const renderMovies = () => {
        if (movies) {
            return movies.map((values, index) => <MovieResult key={index} {... values} />)
        }
        else if (isLoading){
            return <CircularProgress size={100} color='primary'/>
        }
        else{
            return <div/>
        }
    }

    return (
        <Container>
            {renderMovies()}}
        </Container>
    )
}