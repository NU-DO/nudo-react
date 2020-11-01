import React from 'react'
import InputText from '../Generic/InputText'
import './ContactSearcher.scss'

const ContactSeacher = ({ handleSearch, search }) => {

    return (
        <div className='ContactSearcher'>
            <form method='GET'>
                <div class='form-group'>
                  <input type='email'
                    class='form-control'
                    id='searchSong'
                    placeHolder='Busca un contacto'
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