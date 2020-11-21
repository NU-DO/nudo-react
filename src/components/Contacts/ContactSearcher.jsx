import React from 'react'
import './ContactSearcher.scss'

const ContactSeacher = ({ handleSearch, search, placeholder }) => {

    return (
        <div className='ContactSearcher'>
            <form method='GET'>
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        id='searchSong'
                        placeholder={placeholder}
                        name='search'
                        value={search.search}
                        onChange={handleSearch} />
                </div>
            </form>
        </div>
    )
}

export default ContactSeacher