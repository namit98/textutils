import React ,{useState}from 'react'




export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log('Uppercase'+text)
        let newText=text.toUpperCase();
        setText(newText)

    }

    

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleLoClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState('')
    return (
        <>
        <div className='container'>
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary' onClick={handleLoClick}>Convert to lowercase</button>

        </div>

        <div className='container my-3'>
            <h1>Text Summary</h1>
            <p>Your text has {text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length} minutes read</p>


        </div>
        </>
    )
}
