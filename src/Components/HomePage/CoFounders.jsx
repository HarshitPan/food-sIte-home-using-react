import React from 'react'

export const CoFounders = () => {
  return (
    <section 
        className='d-flex overflow-hidden flex-column fs-6 ps-5 pe-5 mt-5'
        style={{width:"100%",height:"80vh"}}    
    >

        <h1 style={{fontWeight:'700',color:'rgb(45, 166, 45,0.6)'}} >WHO</h1>
        <h1 style={{fontWeight:'700',paddingLeft:"30px"}}> WE ARE</h1>

        <div className='d-flex gap-5'  style={{paddingLeft:'30px',width:"100%",height:"780%"}}>
            <div className='d-flex gap-2'  style={{width:"40%",height:"100%"}}>
                <div 
                    style={{ 
                        display:'flex',
                        flexDirection:'column',
                        overflow:'hidden',
                        paddingTop:"100px", 
                        width:"50%",
                        height:"100%",
                        borderRadius:"20px"        
                    }} 
                >
                    <img 
                        src="https://media.licdn.com/dms/image/D4E03AQGvCRIMo1PInA/profile-displayphoto-shrink_800_800/0/1643993619344?e=1727913600&v=beta&t=TKAxxWId52HqpoiSx8gUECL9OPOQVJs-2ZjV_17uBO4" 
                        style={{ borderRadius:"20px" ,  objectFit:'cover', width:'100%',height:"90%" }}
                    />
                    <p 
                        className='align-self-end fw-bold'
                    >
                        Akshay Mohpal
                    </p>
                </div>
                
                <div 
                    style={{ 
                        display:'flex',
                        flexDirection:'column',
                        overflow:'hidden',
                        paddingBottom:"100px",
                        width:"50%",
                        height:"100%",
                        borderRadius:"20px"  
                    }} 
                >
                    <img 
                        src="https://media.licdn.com/dms/image/D4D03AQF2Yn7iTjxNrA/profile-displayphoto-shrink_800_800/0/1694935349674?e=1727913600&v=beta&t=ZwUSlI695yJgUhEfek9c7NoQtmEMdbYhCA2vuwsGogg" 
                        style={{ borderRadius:"20px" ,  objectFit:'cover', width:'100%',height:"90%" }}
                    />
                    <p 
                        className='align-self-end fw-bold'
                    >
                        Devansh Rao
                    </p>
                </div>

                
            </div>

            <div className='d-flex flex-column' style={{width:"60%"}}>

            <h2 className="fw-bold">Co-Founders</h2>
            <p className='fs-6 fw-semibold mt-5' style={{fontWeight:'600',marginBottom:'0',overflow:'hidden',minHeight: '30%',maxHeight:'290px',whiteSpace:'pre-line'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi officiis placeat, ipsa ad eum deleniti 
                dignissimos nulla eveniet eius illum quo quam dolorum unde quae nam ducimus deserunt non facilis. Facere ipsum 
                <br/><br/>
                reprehenderit doloremque sint, eveniet repellendus libero optio illum voluptas rem explicabo odio minima nihil 
                reiciendis exercitationem voluptatem sunt labore distinctio modi quasi tempora at ducimus nesciunt? Mollitia, qui 
                est! Impedit reprehenderit dolore tempora adipisci, deleniti minima ratione optio totam reiciendis, tempore ad nisi?
                 Sint distinctio placeat assumenda, soluta quibusdam suscipit eaque totam, a amet ea fugit architecto rerum, sunt
                harum excepturi voluptas incidunt eius fuga 
                
            </p>

            <button
                className='btn btn-danger mt-3 fw-semibold'
                style={{
                    width:"20%",
                    height:"5vh",
                    borderRadius:'20px',
                    backgroundColor:'brown'
                }}
            >
                Read More
            </button>

        </div>
        </div>

        
    </section>
  )
}
