import React from 'react'
import './Home.css';

import { FaMobileAlt } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { Restraunts } from './Restraunts';
import { GetApp } from './GetApp';
import { CoFounders } from './CoFounders';
import { Testimonials } from './Testimonials';
import { Partners } from './Partners';
import { Footer } from '../Footer/Footer';

// import { ImageSlider } from './ImageSlider';

export const Home = () => {
  return (
    <div className="home-body">
      <section className="head-cover">
        <div className="head-image-info" >
          <h1>Where Affordabilty Meets Variebility</h1>
          <p className='text-white fw-bold'>
            Fringle Connects collage to local hidden gems, offering diverse, affordable food option with faster delivery.
          </p>
          <a className="custom-btn back-trans" style={{ maxWidth: "fit-content" }} href="/login" role="button">Get the app</a>
        </div>
        <div className="head-image-overlay"></div>
        <img className="img-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuotZgGmD-sunf58RAMWo4OCxq8AIGP3WY2g&s" alt="Food Image" />
      </section>


      
      <section className='mt-5 d-flex align-items-center justify-content-center '>
        <div className="d-flex flex-column w-100 gap-10 ps-5" >
          <h1 className="text-center fw-semibold"> Discover Flavors from Hidden Corners</h1>
          <div className='d-flex mt-5 justify-content-center' style={{width:'90%'}} >
            <div className="custom-collage" style={{ width: "40%" }}>

              <div className='d-flex gap-1 mt-1'>

                <div style={{
                  width: "40%",
                  height: "25vh"
                }}
                  className="img-container"
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s" />
                </div>
                <img
                  style={{
                    width: "60%",
                    height: "25vh"
                  }}
                  className="img-container"
                  src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                />

              </div>



              <div className='d-flex gap-1 mt-1'>

                <div style={{
                  width: "70%",
                  height: "25vh"
                }}
                  className="img-container"
                >
                  <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg" />
                </div>
                <img
                  style={{
                    width: "30%",
                    height: "25vh"
                  }}
                  className="img-container"
                  src="data:image/jpeg;base64,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"
                />

              </div>
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s"/>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s"/> */}

            </div>
            <div className="w-40 ps-5 fs-5 d-flex gap-4 flex-column" style={{ width: "50%" , textAlign:'justify'}}>

              <p style={{
                marginBottom:"0px"
              }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab praesentium, eligendi, consectetur eius error commodi ullam nisi ducimus nam odio impedit consequatur accusantium eaque nemo odit. Veniam nihil deleniti dolores laboriosam sequi quod necessitatibus tempora eligendi, minima enim! Ipsa voluptates doloremque dignissimos quasi?
              </p>


              <div className='d-flex align-items-center gap-3'>
                <FaMobileAlt className="circle-icon grey-border-3 p-1" size={50} color="grey" />
                <div
                  className='d-flex flex-column fs-6 m-0 p-0 gap-0'>
                  <p style={{
                    fontWeight: "700",
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}>Online Food Ordering</p>
                  <p style={{
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}>Easy food delivery from out app</p>
                </div>
              </div>


              <div className='d-flex align-items-center gap-3'>
                <FaDollarSign className="circle-icon grey-border-3 p-1" size={50} color="grey" />
                <div
                  className='d-flex flex-column fs-6 m-0 p-0 gap-0'>
                  <p style={{
                    fontWeight: "700",
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}>Afforadable Prices</p>
                  <p style={{
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}>Tasty food in cheap prices</p>
                </div>
              </div>


              
            </div>
          </div>



          <div 
            style={{
              alignSelf:"flex-end",
              width:"auto",
              paddingRight:'30vw',
              height:"10vh",
              backgroundColor:"grey",
              display:'flex',
              alignItems:'center',
              borderRadius: "20px 0 0 20px",
              color:'white',
              paddingLeft:"10px"
            }}
            className="d-flex align-items-start mt-5 mb-5"
          > 
            <div style={{height:'100%',borderRight:"solid 1px white"}} className="d-flex flex-column justify-content-center ps-5 pe-5"> 
              <h4 style={{
                fontWeight:'600',
                alignItems:'center',
                textAlign:'center',
                justifyContent:'center',
                marginBottom:"0px"
              }} > 30+</h4>
              <p style={{
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}> Restaurants</p>
            </div>


            <div style={{height:'100%',borderRight:"solid 1px white"}} className="d-flex flex-column justify-content-center ps-5 pe-5"> 
              <h4 style={{
                fontWeight:'600',
                alignItems:'center',
                textAlign:'center',
                justifyContent:'center',
                marginBottom:"0px"
              }} > 24x7</h4>
              <p style={{
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}> Delivery</p>
            </div>

            <div style={{height:'100%'}} className="d-flex flex-column justify-content-center ps-5"> 
              <h4 style={{
                fontWeight:'600',
                alignItems:'center',
                textAlign:'center',
                justifyContent:'center',
                marginBottom:"0px"
              }} > 4.5</h4>
              <p style={{
                    marginBottom: "0",
                    paddingBottom: "0"

                  }}> Rating</p>
            </div>
          </div>
          
          <div className="attached-design" > </div>
          
        </div>
      </section>


      {/* <ImageSlider/> */}
      
      <section style={{height:'60vh'}} className='overflow-hidden mt-5 d-flex align-items-center justify-content-center '>
        <div style={{position:'relative'}} className="d-flex flex-column w-100 gap-10 ps-5" >
          <div className='d-flex mt-5 justify-content-between' style={{width:'90%'}} >

              <div 
                style={{
                  width:'38%',
                  height:'40%',
                  alignSelf:'flex-start'
                }}
                className='d-flex gap-1 pt-1'>

                <div style={{
                  width: "100%",
                  height: "100%"
                }}
                  className="img-container"
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w9L1kSZ-FxjkaIXR394ekNhw-ABBagOw8A&s" />
                </div>

              </div>


            <div className="w-40 ps-5 fs-1 d-flex gap-4 flex-column" style={{ width: "50%"}}>

              <p style={{
                fontSize:'3vw',
                width:'80%',
                
                fontWeight:'500',
                marginBottom:"0px"
              }}>
                In English we say i love you, in Hindi we say <b>"Tera bhi order kr diya hai"</b>
              
              </p>




              
            </div>
          </div>
          
          <div 
                style={{
                  position:'absolute',
                  backgroundColor:'wheat',
                  width:'58%',
                  height:'85%',
                  JustifySelf:'flex-start',
                  zIndex:'0',
                  transform:'translate(-50%,0)',
                  borderRadius: '0 30px 30px 0'
                }} 
            > 
            </div>

            <div 
                style={{
                  position:'absolute',
                  backgroundColor:'wheat',
                  width:'5%',
                  height:'50%',
                  right:0,
                  bottom:0,
                  AlignSelf:'flex-start',
                  zIndex:'2',
                  borderRadius: '0 40px 0 40px'
                }} 
            > 
            </div>
          
        </div>
      </section>
      

      <Restraunts/>

      <GetApp/>

      <CoFounders/>

      <Testimonials/>

      <Partners/>
  
      <Footer/>
      
    </div>
  )
}
