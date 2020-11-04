import React from 'react'
import ReactRotatingText from 'react-rotating-text'
import './LandingPage.scss'

const LandingPage = () => {

    const words = ['tus viajes', 'tus imágenes', 'tus contactos', 'tus lugares favoritos', 'tus canciones de siempre', 'recuerdos...']

    return (
        <div className='LandingPage'>
            <div className='HeaderCTA'>
                <div className='FirstWave'></div>
                <div className='HeaderImageCTA'></div>
                <div className='HeaderTypeWCTA'>
                    <h1>NUDO</h1>
                    <p className='TypeHeader'>La web que te une a tu memoria <br /> Podrás guardar <ReactRotatingText
                        items={words}
                        cursor='true'
                        typingInterval={150}
                        emptyPause={200}
                    />
                    </p>
                    <p></p>
                    <button>Regístrarme ya</button>
                </div>
            </div>
            <div className='LandingPartTwo'>
            <div className='LandingPartTwoText'>
                    <h2>¿Qué te ofrece <b>NUDO</b>?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit cubilia interdum mauris. Accumsan laoreet lacus pellentesque platea orci libero, enim cras quam rhoncus felis maecenas nibh, netus morbi vulputate aliquam tempor. Massa feugiat hac risus convallis habitant.</p>
                    <button>Regístrarme ya</button>
                </div>
                    <div className='FirstAmoeba'>
                        <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604488768/NUDO/assets/Landing%20Page/Recurso_8_oezojl.svg' alt='pink amoeba' />
                        <div className='macbookNudo'></div>
                    </div>
               
            </div>
            <div className='LandingPartThree'>
                <div className='LandingPartThreeDivider'>
                    <div className='SecondAmoeba'>
                        <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604481035/NUDO/assets/Landing%20Page/Recurso_4_ykg3mb.svg' alt='pink amoeba' />
                        <div className='oldRadio'></div>
                    </div>
                </div>
                <div className='LandingPartThreeText'>
                    <h2>Guarda las canciones de tu vida</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit cubilia interdum mauris. Accumsan laoreet lacus pellentesque platea orci libero, enim cras quam rhoncus felis maecenas nibh, netus morbi vulputate aliquam tempor. Massa feugiat hac risus convallis habitant.</p>
                    <button>Regístrarme ya</button>
                </div>
            </div>
            <div className='LandingPartFour'>
               
                    
                    <div className='LandingPartFourText'>
                        <h2>Almacena tus fotos como nunca</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit cubilia interdum mauris. Accumsan laoreet lacus pellentesque platea orci libero, enim cras quam rhoncus felis maecenas nibh, netus morbi vulputate aliquam tempor. Massa feugiat hac risus convallis habitant.</p>
                        <button>Regístrarme ya</button>
                    </div>
                    <div className='ThirdAmoeba'>
                        <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604481037/NUDO/assets/Landing%20Page/Recurso_7_gwcxgc.svg' alt='pink amoeba' />
                        <div className='oldLomo'></div>
                    </div>
                
            </div>



        </div>
    );
};

export default LandingPage;