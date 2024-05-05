import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [customCSS, setCustomCss]= useState({})

  function reload() {
    window.location.reload();
  }

  let calBMI = (e) => {
    e.preventDefault();
    if ((weight === 0 || height === 0) || weight === '' || height === '') {
      alert("Please enter a valid weight and height");
    } else {
      if (isNaN(weight) || isNaN(height)) {
        alert("Please enter a valid weight and height");
        setWeight('');
        setHeight('');
      } else {
        let bmi = (weight / (height * height) * 10000);
        setBmi(bmi.toFixed());

        if (bmi < 18.5) {
          setMessage("You are underweight");
          setCustomCss({"color":"yellow"})
        } else if (bmi >= 18.5 && bmi < 25) {
          setMessage("You are healthy weight");
          setCustomCss({"color": "green"})
        } else {
          setMessage("You are overweight");
          setCustomCss({"color":"#d00"})
        }
      }

    }
  }

  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <div className='formBox'>
          <form onSubmit={calBMI}>
            <div>
              <label>Weight (KG):</label>
              <input type='text' placeholder='Enter weight Value' value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (CM):</label>
              <input type='text' placeholder='Enter height Value' value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className='buttonBox'>
              <button type='submit' className='btn sbmitbtn'>Submit</button>
              <button type='button' className='btn btn-outline' onClick={reload}>Clear</button>
            </div>

            <div className='center'>
              <h3 className='bmi' id='bmi'>Your BMI is: <span className='BMIValue'>{bmi}</span></h3>
              <p className='message' id='message' style={customCSS}>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
