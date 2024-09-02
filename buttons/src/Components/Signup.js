import React, { useRef } from 'react'

function Signup() {
    let firstNameInputRef =useRef();
    let lastNameInputRef =useRef();
    let selectStateRef = useRef();
    let msgLabelRef = useRef();
    let singleRbRef = useRef();
    let marriedRbRef = useRef();
    let ageInputRef = useRef();
    let genderStatus;
    let salutation;
    let marriageStatus;
    let ageStatus;
    let languagesKnown = {
        tel:false,
        hin:false,
        eng:false,
        tam:false,
        fre:false
    }

    let onClickAccount =()=>{  
        if(genderStatus === "Male"){
            salutation = "Mr.";
        }else{
            if(marriageStatus === "Single"){
                salutation = "Miss."

            }else{
                salutation ="MRS.";
            }
            
        }
        msgLabelRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} is a ${ageStatus} person  and from ${selectStateRef.current.value} and knows 
         ${languagesKnown.tel === true?"Telugu":""}  ${languagesKnown.hin === true?"Hindhi":""} ${languagesKnown.eng === true?"English":""} ${languagesKnown.tam === true?"Tamil":""} ${languagesKnown.fre === true?"French":""} Languages. `;
    }
  return (
    <div>
        <h1>Signup</h1>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label> Age</label>
                <input ref={ageInputRef} onChange={()=>{
                    if(ageInputRef.current.value < 5){
                        ageStatus = "infant";
                    }else if(ageInputRef.current.value >5 && ageInputRef.current.value <18){
                        ageStatus = "child";
                    }else if(ageInputRef.current.value >18 && ageInputRef.current.value <25){
                        ageStatus = "teen";
                    }else if(ageInputRef.current.value >25 && ageInputRef.current.value <40){
                        ageStatus = "middleAge";
                    }else if(ageInputRef.current.value){
                        ageStatus = "old";
                    }
                }} ></input>
            </div>
            <div>
                <label>State</label>
                <select ref={selectStateRef}>
                    <option>Select State</option>
                    <option>Telangana</option>
                    <option>Tamilnadu</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                </select>
            </div>
            <div>
                <label  className="innerLabel"   >Gender</label>
                <input type="radio" name="Gender" onChange={(eventObject)=>{
                     console.log(eventObject);
                     if(eventObject.target.checked === true){
                         genderStatus = "Male";
                     }
                }}  ></input>
                <label  className="innerLabel"   >Male</label>
                <input type="radio" name="Gender"  onChange={(e)=>{
                    console.log(e);
                    if(e.target.checked === true){
                        genderStatus = "Female";
                    }
                }}></input>
                <label  className="innerLabel"   >Female</label>
            </div>
            <div>
                <label  className="innerLabel"   >Martial Status</label>
                <input type="radio" name="Martial Status" ref={singleRbRef} onChange={()=>{
                    if(singleRbRef.current.checked=== true){
                        marriageStatus= "Single";
                    }
                }} ></input>
                <label  className="innerLabel"   >Single</label>
                <input type="radio" name="Martial Status" ref={marriedRbRef}  onChange={()=>{
                    marriageStatus = "Married";
                }} ></input>
                <label   className="innerLabel"   >Married</label>
            </div>
            <div>
                <label className="innerLabel" >Langaues Known</label>
                <input type="checkbox"  
                onChange={(eo)=>{
                    languagesKnown.tel = eo.target.checked;
                }} ></input>
                <label  className="innerLabel"
                >Telugu</label>
                <input type="checkbox"
                                onChange={(eo)=>{
                                    languagesKnown.hin = eo.target.checked;
                                }}
                ></input>
                <label  className="innerLabel"  >Hindi</label>
                <input type="checkbox"
                                onChange={(eo)=>{
                                    languagesKnown.eng = eo.target.checked;
                                }}
                ></input>
                <label  className="innerLabel"  >English</label>
                <input type="checkbox" 
                                onChange={(eo)=>{
                                    languagesKnown.tam = eo.target.checked;
                                }}
                ></input>
                <label  className="innerLabel"  >Tamil</label>
                <input type="checkbox"
                                onChange={(eo)=>{
                                    languagesKnown.fre = eo.target.checked;
                                }}
                ></input>
                <label  className="innerLabel"  >French</label>
            </div>
            <button type="button" onClick={()=>{
                onClickAccount();
            }}>
                submit
            </button>
            <div>
                <label  style={{width:"700px",
                    fontSize:"2rem"
                }}   ref={msgLabelRef}></label>
            </div>
       
        </form>
      
    </div>
  )
}

export default Signup
