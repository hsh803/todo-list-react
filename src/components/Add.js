import React, {useState} from 'react';

function Add(props) {
    const [inputValue, setInputValue] = useState({item: ""})

    const submitValue = (e) => {
            e.preventDefault()
            props.submit(inputValue)
            setInputValue({item: ""})
    }
    return(
        <div>
            <form onSubmit={submitValue}>
                <input type="text" value={inputValue.item} onChange={(e) => setInputValue({item: e.target.value})} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Add;