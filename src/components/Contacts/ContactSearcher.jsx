import React from 'react'
import './ContactSearcher.scss'

const ContactSeacher = ({ handleSearch, search }) => {

    return (
        <div className='ContactSearcher'>
            <form method='GET'>
                <div className='form-group'>
                    <input type='email'
                        className='form-control'
                        id='searchSong'
                        placeholder='Busca un contacto'
                        name='search'
                        aria-describedby='emailHelp'
                        value={search.search}
                        onChange={handleSearch} />
                </div>
            </form>
        </div>
    )
}

export default ContactSeacher