import React from 'react'

const SongSearcher = ({ handleChange, search }) => {
    return (
        <form method='GET'>
            <input name='search' placeholder='search for an artist' onChange={handleChange} value={search.search} />
        </form>
    )
}

export default SongSearcher