import React, { useEffect, useRef, useState } from 'react'

const Checkoutstepper = ({stepsConfig=[]}) => {

    const[currentstep,setcurrentstep]=useState(1);
    const[isComplete,setisComplete]=useState(false);
    const[margins,setMargins]=useState({
        marginLeft:0,
        marginRight:0,
    });
    const stepRef = useRef([]);

    useEffect(()=>{
        setMargins({
            marginLeft:stepRef.current[0].offsetWidth/2,
            marginRight:stepRef.current[stepsConfig.length - 1].offsetWidth/2,
        })

    },[stepRef]);

    if(!stepsConfig.length){
        return <></>;
    }
    const handleNext=()=>{
       setcurrentstep(prevStep=>{
        if(prevStep===stepsConfig.length){
            setisComplete(true)
            return prevStep
        }else{
            return prevStep+1;
        }
        
       }) 

    };

    const calculateProgressBaWidth=()=>{
        return((currentstep-1)/(stepsConfig.length-1))*100;
    }
    const dynamicWidth = `calc(100% - ${margins.marginLeft + margins.marginRight}px)`;

   

    const ActiveComponent = stepsConfig[currentstep-1].Component;
  return (
    <>
    
    <div className='stepper'>
{
    stepsConfig.map((step,index)=>{
        return(
            <div key={step.name} 
            ref={(el)=>(stepRef.current[index]=el)}
            className={`step ${currentstep>index+1|| isComplete?"complete":""} ${currentstep === index+1 ? "active":""} `}>
               <div className='step-number'>
                {
                  currentstep>index+1|| isComplete?(
                <span>
                   &#10003; 
                </span>
                  ) :(
                    index+1
                  )}
              
                
                </div> 
               <div className='step-name'>{step.name}</div>
            </div>    
        )
    })
}
{/* //width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`, */}
<div className="progress-bar" style={{
    width:dynamicWidth,
    marginLeft:margins.marginLeft,
    marginRight:margins.marginRight,
}}>
    <div className="progress" style={{width:`${calculateProgressBaWidth()}%`}}></div>
</div>

    </div>
    <ActiveComponent />
    {
        !isComplete&&(
            <button className='btn' onClick={handleNext}>
                {currentstep===stepsConfig.length?"Finish":"Next" }
            </button>
        )}
   
    </>
  )
}

export default Checkoutstepper