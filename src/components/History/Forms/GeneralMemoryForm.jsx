import React, { useState } from 'react'
import MemoryForm from './MemoryForm'
import LocationMemoryForm from './LocationMemoryForm'
import ImagesMemoryForm from './ImagesMemoryForm'
import ContactsMemoryForm from './ContactsMemoryForm'
import CongratulationsMemoryForm from './CongratulationsMemoryForm'
import SongsMemoryForm from './SongsMemoryForm'
import VideosMemoryForm from './VideosMemoryForm'
import CloseModalButton from '../../Generic/CloseModalButton'
import { MultiStepForm, Step } from 'react-multi-form'
import './GeneralMemoryForm.scss'

const GeneralMemoryForm = ({ stateForm, setStateForm, modalSent, handleCloseMemoryForm, error }) => {
    const [active, setActive] = useState(1)

    const handleChange = (event) => {
        const { name, value } = event.target
        setStateForm(prev => {
            return {
                ...prev,
                [name]: name === 'year' ? parseInt(value) : value
            }
        })
    }

    return (
        <div className='MultiStepContainer'>
            <CloseModalButton onClick={() => handleCloseMemoryForm()} />
            <MultiStepForm activeStep={active} accentColor='#839672' >
                <Step label='Recuerdo'>
                    <MemoryForm
                        handleChange={handleChange}
                        error={error}
                    />
                </Step>
                <Step label=''>
                    <ContactsMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label=''>
                    <ImagesMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label=''>
                    <LocationMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label=''>
                    <SongsMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label=''>
                    <VideosMemoryForm
                        stateForm={stateForm}
                        setStateForm={setStateForm}
                    />
                </Step>
                <Step label='Guardar'>
                    <CongratulationsMemoryForm
                        modalSent={modalSent}
                    />
                </Step>
            </MultiStepForm>
            {active !== 1 && (
                <button onClick={() => setActive(active - 1)} className='MultiFormNavigation'><b>&lt;</b> Anterior</button>
            )}
            {active !== 7 && (
                <button
                    onClick={() => setActive(active + 1)}
                    style={{ float: 'right' }}
                    className='MultiFormNavigation'
                >
                    Siguiente <b>&gt;</b>
                </button>
            )}
        </div>
    )
}

export default GeneralMemoryForm