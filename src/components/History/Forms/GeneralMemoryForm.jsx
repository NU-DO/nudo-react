import React, { useState } from 'react'
import MemoryForm from './MemoyForm'
import LocationMemoryForm from './LocationMemoryForm'
import ImagesMemoryForm from './ImagesMemoryForm'
import ContactsMemoryForm from './ContactsMemoryForm'
import CongratulationsMemoryForm from './CongratulationsMemoryForm'
import SongsMemoryForm from './SongsMemoryForm'
import VideosMemoryForm from './VideosMemoryForm'
import { MultiStepForm, Step } from 'react-multi-form'

const GeneralMemoryForm = () => {
    const [active, setActive] = useState(1)

    return (
        <div>
            <MultiStepForm activeStep={active}>
                <Step label='Memory'>
                    <MemoryForm />
                </Step>
                <Step label='contacts'>
                    <ContactsMemoryForm />
                </Step>
                <Step label='Images'>
                    <ImagesMemoryForm />
                </Step>
                <Step label='Locations'>
                    <LocationMemoryForm />
                </Step>
                <Step label='Songs'>
                    <SongsMemoryForm />
                </Step>
                <Step label='Videos'>
                    <VideosMemoryForm />
                </Step>
                <Step label='Congratulations'>
                    <CongratulationsMemoryForm />
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