import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import useData from '../hooks/useData';

const GenreList = () => {
  const { data, isLoading, error} = useData<Genre>('/genres');
  if(error)
    return error
  if(isLoading)
        return "Loading"
    return (
        <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList