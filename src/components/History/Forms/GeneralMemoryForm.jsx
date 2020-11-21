import React, { useState } from 'react'
import MemoryForm from './MemoryForm'
import LocationMemoryForm from './LocationMemoryForm'
import ImagesMemoryForm from './ImagesMemoryForm'
import ContactsMemoryForm from './ContactsMemoryForm'
import CongratulationsMemoryForm from './CongratulationsMemoryForm'
import SongsMemoryForm from './SongsMemoryForm'
import VideosMemoryForm from './VideosMemoryForm'
import { createEvent, getEvents } from '../../../services/Api'
import { MultiStepForm, Step } from 'react-multi-form'

const GeneralMemoryForm = ({ setSavedEvents }) => {
    const [active, setActive] = useState(1)
    const [stateForm, setStateForm] = useState({})
    const [error, setError] = useState({})


    const handleChange = (event) => {
        const { name, value } = event.target
        setStateForm(prev => {
            return {
                ...prev,
                [name]: name === 'year' ? parseInt(value) : value
            }
        })
    }

    const modalSent = (event) => {
        event.preventDefault()
        console.log('Aqui', stateForm)
        createEvent(stateForm)
            .then(() => {
                getEvents()
                    .then(events => setSavedEvents(events))
                setStateForm({})
                // closeModal()
                // setError({})
                // handleSavedSnack()
            })
            .catch(err => setError(err.response.data.errors))
    }

    return (
        <div>
            <MultiStepForm activeStep={active}>
                <Step label='Recuerdo'>
                    <MemoryForm
                        handleChange={handleChange}
                        modalSent={modalSent}
                    />
                </Step>
                <Step label='Contactos'>
                    <ContactsMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label='Imagenes'>
                    <ImagesMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label='Localizaciones'>
                    <LocationMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label='Canciones'>
                    <SongsMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label='Videos'>
                    <VideosMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label='Enhorabuena'>
                    <CongratulationsMemoryForm
                        modalSent={modalSent}
                    />
                </Step>
            </MultiStepForm>
            {active !== 1 && (
                <button onClick={() => setActive(active - 1)}>Previous</button>
            )}
            {active !== 7 && (
                <button
                    onClick={() => setActive(active + 1)}
                    style={{ float: 'right' }}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default GeneralMemoryForm