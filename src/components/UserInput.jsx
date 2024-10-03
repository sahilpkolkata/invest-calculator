import { useState } from "react"

export default function UserInput({inputs, handleInput}){
   
  
    return(

            <section id="user-input">
                <div className="input-group">
                  <p>
                      <label>
                          Initial Investment
                          <input name="initial investment" 
                                 type="number" 
                                 value={inputs.initialInvestment} 
                                 onChange={(event)=>handleInput('initialInvestment', event.target.value)}/>
                      </label>
                  </p>
                  <p>
                      <label>
                          Annual Investment
                          <input name="annual investment" 
                                 type="number" 
                                 value={inputs.annualInvestment}
                                 onChange={(event)=>handleInput('annualInvestment', event.target.value)}/>
                      </label>
                  </p>

                </div> 
                <div className="input-group">
                  <p>
                      <label>
                          Expected Return
                          <input name="expected return" 
                                 type="number" 
                                 value={inputs.expectedReturn} 
                                 onChange={(event)=>handleInput('expectedReturn', event.target.value)}/>
                      </label>
                  </p>
                  <p>
                      <label >
                          Duration
                          <input name="duration" 
                                 type="number" 
                                 value={inputs.duration} 
                                 onChange={(event)=>handleInput('duration', event.target.value)} />
                      </label>
                  </p>

                </div> 

            </section>
    
    ) 
}