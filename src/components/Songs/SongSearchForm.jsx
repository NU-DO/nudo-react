import React from 'react'
import { TextField } from '@material-ui/core'


const SongSearcher = ({ handleChange, search }) => {
    return (
        <form method='GET'>
        <TextField
          variant='outlined'
          margin='small'
          required
          id='searchSong'
          label='Busca tu canción'
          name='search'
          autoComplete='text'
          value={search.search}
          onChange={handleChange}
          autoFocus
        />
        </form>
    )
}

export default SongSearcher