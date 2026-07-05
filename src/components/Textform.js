import React,{useState} from 'react'

export default function Textform(props) {


  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success");
  }

  const handleLoClick = ()=>{
    
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success");
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!","success");
  }

  const handleOnChange = (event)=>{
    //console.log("on change");
    
    setText(event.target.value)
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container py-4" >
      <h1 className= " main-heading " style ={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style ={{ backgroundColor: props.Mode === 'dark' ? '#444b4c' : '#e9cee7', color: props.Mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
      </div>
      <button disabled ={text.length===0} className="btn btn-custom my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>  
      <button disabled ={text.length===0} className="btn btn-custom my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled ={text.length===0} className="btn btn-custom my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled ={text.length===0} className="btn btn-custom my-1 mx-1" onClick={handleCopy}>Copy Text</button>
      <button disabled ={text.length===0} className="btn btn-custom my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled ={text.length===0} className="btn btn-custom my-1 mx-1" onClick={() => setText(capitalizeFirstLetter(text))}>Capitalize First Letter</button>
    </div>

        <div className="container" style = {{marginTop: '5px'}}>
      <h2>Text Summary</h2>
      <p>
        {text.trim() === ""? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <div className="preview-box">
        {text.length > 0 ? (
          <p>{text}</p>
        ) : (
          <p className="text-secondary">
            <>✨ Start typing in the text area above to preview your content here.</>
          </p>
        )}
      </div>

      {/* <h2>About TextUtils</h2>
      <p>TextUtils is a powerful and user-friendly text manipulation tool designed to help you easily transform and analyze your text. 
        Whether you need to convert text to uppercase, lowercase, remove extra spaces, or simply get a quick summary of your text, 
        TextUtils has got you covered. With its intuitive interface and robust features, TextUtils is the perfect companion for writers, students, professionals, and anyone looking to enhance their text editing experience. 
        Try TextUtils today and discover the endless possibilities for your text! </p>*/}

      <footer className="text-center py-3" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
        <hr />
        <p>TextUtils © 2026 | Built with React.js</p>
      </footer>
    </div>
    </>
    
  )
}
