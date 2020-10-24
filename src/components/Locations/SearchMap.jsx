import React from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'

const SearchMap = ({ panTo }) => {
    const { ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions
    } = usePlacesAutocomplete({
      requestOptions: {
        location: {
          lat: () => 43.653225,
          lng: () => -79.383186,
        },
        radius: 200 * 1000,
      }
    })
  
    return (
      <div className='search'>
        <Combobox
          onSelect={async (address) => {
            setValue(address, false)
            clearSuggestions()
            try {
              const results = await getGeocode({ address })
              const { lat, lng } = await getLatLng(results[0])
              console.log(lat, lng)
              panTo({ lat, lng })
            } catch (error) {
              console.log('Error!')
            }
          }}
        >
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            disabled={!ready}
            placeHolder='Escribe una localización'
          />
          <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (<ComboboxOption key={id} value={description} />)
              )}
              </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    )
  }

export default SearchMap