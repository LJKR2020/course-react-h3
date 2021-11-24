import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('')
    const [ageValue, setAgeValue] = React.useState(0)
    const [messageValue, setMessageValue] = React.useState('')
    const [checkedNews, setCheckedNews] = React.useState(false)
    return (
        <>
            <div className='form-container'>
                <section className='form-styling'>
                    <h3>Gegevens</h3>
                    <form>
                        <label htmlFor='firstName'> Naam:
                            <input
                                type='text'
                                id='firstName'
                                name='name'
                                placeholder='Type hier uw naam.'
                                value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                        </label>
                    </form>
                    <form>
                        <label htmlFor='age'> Leeftijd:
                            <input
                                type='number'
                                id='age'
                                name='age'
                                value={ageValue}
                                onChange={(e) => setAgeValue(e.target.value)}
                            />
                        </label>
                    </form>
                </section>
                <section className='form-styling'>
                    <h3 className='review'>Jouw review</h3>
                    <form>
                        <label htmlFor='message'>
                            Opmerkingen:
                            <input
                                type='text'
                                id='message'
                                name='message'
                                placeholder='Typ hier uw bericht.'
                                value={messageValue}
                                onChange={(e) => setMessageValue(e.target.value)}
                            />
                        </label>
                    </form>
                    <form>
                        <label htmlFor='newsletter'>
                            <input
                                type='checkbox'
                                id='newsletter'
                                name='newsletter'
                                checked={checkedNews}
                                onChange={() => setCheckedNews(!checkedNews)}
                            />
                            Ik schrijf me in voor de nieuwsbrief
                        </label>
                    </form>
                    <button
                        disabled={!checkedNews}
                        type='submit'
                    >
                        Versturen
                    </button>
                </section>
            </div>
        </>
    );
}

export default App;
