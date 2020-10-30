import React from 'react'
import InputText from '../Generic/InputText'
import './ContactSearcher.scss'

const ContactSeacher = ({ handleSearch, search }) => {

    return (
        <div className='ContactSearcher'>
            <form method='GET'>
                <InputText
                    id='searchSong'
                    name='search'
                    placeHolder='Busca un contacto'
                    value={search.search}
                    onChange={handleSearch}
                    autoFocus
                />
            </form>
        </div>
    )
}

export default ContactSeacher