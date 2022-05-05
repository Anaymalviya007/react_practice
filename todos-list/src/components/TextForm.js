import React,{useState} from 'react'


export default function TextForm(props) {
    const upper = ()=> {
        console.log("upperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=> {
        console.log("upperCase was clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upper}>Convert to UpperCase</button>
    </div>
  )
}
