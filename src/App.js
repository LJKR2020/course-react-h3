import React from 'react';
import './App.css';

function App() {
    // const [formData, setFormData] = React.useState([
    // al die andere.....
    // ])
    const [nameValue, setNameValue] = React.useState('')
    const [ageValue, setAgeValue] = React.useState(0)
    const [messageValue, setMessageValue] = React.useState('')
    const [checkedNews, setCheckedNews] = React.useState(false)


    function handleSubmit(e) {
        e.preventDefault()

        if (e.target.elements.length > 0) {
            const formElements = Array.from(e.target.elements);
            const fields = formElements.filter((field) => {
                    return field.nodeName === "INPUT" || field.nodeName === "TEXTAREA"
                })
            console.log(fields)
        //    setFormData()
        }
    }

    return (
        <>
            <div className='form-container'>
                <form
                    onSubmit={handleSubmit}
                >
                    <fieldset className='form-styling'>
                        <legend id='formTitle'>Gegevens</legend>

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
                        <label htmlFor='age'> Leeftijd:
                            <input
                                type='number'
                                id='age'
                                name='age'
                                value={ageValue}
                                onChange={(e) => setAgeValue(e.target.value)}
                            />
                        </label>
                    </fieldset>
                    <fieldset className='form-styling'>
                        <legend id='formTitle'>
                            Jouw review
                        </legend>
                        <label htmlFor='message'>
                            Opmerkingen:
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            placeholder='Wat vond je van het recept?'
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        >
                        </textarea>
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
                        <button
                            disabled={!checkedNews}
                            type='submit'
                        >
                            Versturen
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default App;
