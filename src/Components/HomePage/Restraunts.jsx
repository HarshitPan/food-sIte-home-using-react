import React,{useState,useEffect} from 'react'

import { FaStar } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Restraunts = () => {
    const [rest,setRest] = useState([{
        name:'',
        desc:'',
        rating:0,
        img:""
    }]);
    const [start,setStart]  = useState(0);
    const [curr,setCurr] = useState(0);
    const [limit,setLimit] = useState(5);
    // temp-inputting data;
    useEffect( () =>{
        setRest([
            
            {
                name:'Mr Burger',
                desc:`Lorem ipsum dolor sit, 
                 amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?`,

                rating:4,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvpHywAn7jIgneSJPkvYgdvAHsEs6ipbNsw&s"
    
            },
            {
                name:'Mr Burger is superb',
                desc:`Lorem ipsum dolor sit, 
                 amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?`,

                rating:4,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvpHywAn7jIgneSJPkvYgdvAHsEs6ipbNsw&s"
    
            },
            {
                name:'Mr Burger',
                desc:`Lorem ipsum dolor sit, 
                 amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?`,

                rating:4,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvpHywAn7jIgneSJPkvYgdvAHsEs6ipbNsw&s"
    
            },
            {
                name:'Mr Burger',
                desc:`Lorem ipsum dolor sit, 
                 amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?`,

                rating:4,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvpHywAn7jIgneSJPkvYgdvAHsEs6ipbNsw&s"
    
            },
            {
                name:'Mr Burger',
                desc:`Lorem ipsum dolor sit, 
                 amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit,
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?
                Lorem ipsum dolor sit, 
                
                amet consectetur  adipisicing elit. Earum esse dolorem assumenda distinctio cumque deserunt? Similique tenetur non quae corporis?`,

                rating:4,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvpHywAn7jIgneSJPkvYgdvAHsEs6ipbNsw&s"
    
            },

            {
                name:'Swadu Cafe',
                desc:'something here...',
                rating:3,
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQb9ArULDVV7cz6YqeQ5Nw7m_xJk8TxccMkw&s"
            }
        ])

        // setCurr(1)

    },[])
    
    return (
        <section className= 'mt-5 d-flex align-items-center justify-content-center '>
            {/* <button onClick={()=>console.log(rest[curr].name)}>Press Me </button> */}
            <div style={{position:'relative'}} className="d-flex flex-column w-100 gap-10 ps-5" >
            <div className='d-flex mt-5 justify-content-between' style={{width:'90%',height:'60vh'}} >

                
                

                <div className="w-40 ps-5 fs-5 d-flex gap-3 flex-column" style={{ width: "50%"}}>
                    <h1><strong>RESTAURANTS ONBOARD </strong> </h1>
                    <h3 style={{fontWeight:'700',color:'grey'}}>{rest[curr].name}</h3>
                <p className='fs-6 ' style={{fontWeight:'600',marginBottom:'0',overflow:'hidden',minHeight: '30%',maxHeight:'40%',whiteSpace:'pre-line'}}>
                    {rest[curr].desc}
                
                </p>

                    <div>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar key={index} color={index<rest[curr].rating?"gold":"grey"} style={{ margin: '0 2px' }} />
                        ))}
                    </div>




                
                </div>


                <div 

                    style={{
                    position:'relative',
                    width:'40%',
                    alignSelf:'center'
                    }}
                    className='d-flex gap-1 pt-1'
                >
                    <div 
                    style={{
                    position:'absolute',
                    backgroundColor:'wheat',
                    width:'15%',
                    height:'50%',
                    left:'-7%',
                    bottom:'20px',
                    AlignSelf:'flex-start',
                    zIndex:'2',
                    borderRadius: '0 40px 0 40px'
                    }} 
                > 
                </div>

                    <div style={{
                    width: "100%",
                    height: "100%"
                    }}
                    className="img-container"
                    >
                    <img src={rest[curr].image} />
                    </div>

                </div>
            </div>
            
            
            <div className='d-flex gap-2 justify-content-between ps-2 pe-5'>

                <button 
                    style={{
                        borderRadius:'50%'
                    }}
                    disabled = {(start===0)?true:false}
                    className='btn btn-primary bg-dark d-flex justify-content-center align-items-center'
                    onClick = {() => {(start!=0)?setStart(start-limit):setStart(start)}}
                > 
                    <FaChevronLeft size={18} />
                </button>
                <div style={{flexGrow:'1'}} className='d-flex justify-content-start gap-4'>
                    {rest.map((item,index) => {
                        // console.log(item)
                        if(index>=start && index<start+limit)
                            return <button 
                                        onClick = {() => {
                                            setCurr(index)
                                        }}
                                        style={{
                                            
                                            borderRadius:'20px',
                                            paddingLeft:'15px',
                                            paddingRight:'15px',
                                            fontWeight:'600',
                                            boxShadow: (index===curr ? '0px 4px 8px rgba(0, 0, 0)' : '4px 4px 8px 2px rgba(0, 0, 0, 0.2)' ),
                                            flexGrow:'1',
                                            overflow:'hidden',
                                            maxHeight:'40px',
                                            maxWidth:'15vw'
                                        }} 
                                        className=' btn custom-btn'> {item.name} 
                                    </button>
                    })}
                </div>
                <button 
                    className='btn btn-primary bg-dark d-flex justify-content-center align-items-center'
                    style={{
                        borderRadius:'50%'
                    }}
                    onClick = {() => {(start+limit<rest.length)?setStart(start+limit):setStart(start)}}
                    disabled = {(start+limit<rest.length)?false:true}
                > 
                    <FaChevronRight size={18} />
                </button>
            </div>
                
            
            </div>
        </section>
  )
}
