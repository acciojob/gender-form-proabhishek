
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

   let [gender, setGender] = useState("")

   

  return (
    <div>
           <h2>Select Your Gender</h2>

            <input 
              type="radio"
              name="gender"
              value = "Male"
              id="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label forHTML="male">Male</label>
            <input 
              type="radio"
              name="gender"
              value = "Female"
              id="female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label forHTML="female">Female</label>

            {
                gender == "Male" &&
                <div>
                        <h1> Select Your shirt size</h1>
                        <select>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>

                </div>
            }

{
                gender == "Female" &&
                <div>
                        <h1> Select Your dress size</h1>
                        <select>
                            <option value="select">Select Size</option>
                            <option value="two">2</option>
                            <option value="four">4</option>
                            <option value="six">6</option>
                        </select>

                </div>
            }

    </div>
  )
}

export default App
