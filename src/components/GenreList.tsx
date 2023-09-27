import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { data, isLoading, error} = useGenres();
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