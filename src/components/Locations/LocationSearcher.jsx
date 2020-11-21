import React from 'react';

const LocationSearcher = ({ handleSearch, search }) => {
    return (
        <div>
            <form method='GET'>
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        id='searchlocation'
                        placeholder='Busca una localización'
                        name='search'
                        aria-describedby='Location'
                        value={search.search}
                        onChange={handleSearch} />
                </div>
            </form>
        </div>
    );
};

export default LocationSearcher;