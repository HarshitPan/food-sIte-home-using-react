import React, { useEffect, useState } from 'react'

import { MdAccountCircle } from 'react-icons/md';

export const Testimonials = () => {

    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        setReviews([
            {
                name:"Temp Name",
                type:"Student",
                profileImage:"",
                text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta quod architecto, tenetur quae cupiditate sint laboriosam quam! Repellendus laborum, voluptate labore repellat consequuntur ducimus, eos praesentium ipsum iure quas placeat ipsam dicta nesciunt? Assumenda ducimus, dicta unde eaque fugit ea harum dolores sequi voluptas ullam reiciendis quo tempore possimus illum. Nisi excepturi aut eius quas illo voluptates architecto!`
            },{
                name:"Temp Name",
                type:"Teacher",
                profileImage:"",
                text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta quod architecto, tenetur quae cupiditate sint laboriosam quam! Repellendus laborum, voluptate labore repellat consequuntur ducimus, eos praesentium ipsum iure quas placeat ipsam dicta nesciunt? Assumenda ducimus, dicta unde eaque fugit ea harum dolores sequi voluptas ullam reiciendis quo tempore possimus illum. Nisi excepturi aut eius quas illo voluptates architecto!`
            },{
                name:"Temp Name",
                type:"Student",
                profileImage:"",
                text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta quod architecto, tenetur quae cupiditate sint laboriosam quam! Repellendus laborum, voluptate labore repellat consequuntur ducimus, eos praesentium ipsum iure quas placeat ipsam dicta nesciunt? Assumenda ducimus, dicta unde eaque fugit ea harum dolores sequi voluptas ullam reiciendis quo tempore possimus illum. Nisi excepturi aut eius quas illo voluptates architecto!`
            },{
                name:"Temp Name",
                type:"Student",
                profileImage:"",
                text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta quod architecto, tenetur quae cupiditate sint laboriosam quam! Repellendus laborum, voluptate labore repellat consequuntur ducimus, eos praesentium ipsum iure quas placeat ipsam dicta nesciunt? Assumenda ducimus, dicta unde eaque fugit ea harum dolores sequi voluptas ullam reiciendis quo tempore possimus illum. Nisi excepturi aut eius quas illo voluptates architecto!`
            }
        ])
    },[])
    return (
        <section className='fs-6 d-flex flex-column mt-5 ps-5  gap-3 ' style={{width:'100vw',height:'60vh'}}>
            <h1 className='fw-bold'> TESTIMONIALS </h1>
            <div className="align-self-end pe-3 fw-semitbold">
                hashtags
            </div>
            <div className='d-flex gap-5' style={{height:'80%',width:'100%',overflow:'hidden'}}>
                <div
                    className='d-flex fw-bold justify-content-center align-items-center p-5' 
                    style={{height:'100%',width:'30%',borderRadius:'20px',backgroundColor:'lightgreen'}}
                >
                    <h1>What are happy users says</h1>
                </div>
                <div
                    className='d-flex fw-bold justify-content-start gap-4 align-items-start p-3 ps-5 ' 
                    style={{height:'100%',width:'70%',borderRadius:'20px 0 0 20px',backgroundColor:'rgb(0,0,0,.1)',overflowX:'auto'}}
                >
                    {reviews.map((item,index) =>{
                        return (
                            <div 
                                className='bg-light flex flex-column align-items-center justify-content-center'
                                style={{
                                    minWidth:"300px",
                                    maxWidth:"300px",
                                    padding:'4%',
                                    overflow:"hidden",
                                    height:"100%",
                                    borderRadius:'5px'
                                }}
                            >   
                                <div className="d-flex">
                                    <MdAccountCircle size={50} color="grey" />
                                    <div className="d-flex flex-column" >
                                        <p className='fw-bold mb-0'>{item.name}</p>
                                        <p className='fw-normal'>{item.type}</p>
                                    </div>
                                </div>
                                <p style={{fontSize:"small",fontWeight:'500',height:"60%",overflow:'hidden'}} > {item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
