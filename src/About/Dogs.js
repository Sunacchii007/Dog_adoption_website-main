// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import swiper from './swiper';
// import 'swiper/swiper-bundle.css';
// import "./about.css";
// import "./CustomSwiper.css";
//  const Dogs = () => {
//     return (
//     <>
//     <div className="image-grid" style={{backgroundColor:"#EEEEEE",marginTop:"-50px",height:"800px" }}>
//         <h1  style={{textAlign:'center',paddingTop:'40px',letterSpacing: "5px", fontSize:"50px",color:"#CF0A0A"}}>Join Our Events</h1>
//         <Swiper
//            modules={[Navigation, Pagination, Scrollbar, A11y]}
//            spaceBetween={50}
//            slidesPerView={3}
//            navigation={{
//             nextEl: '.custom-swiper-button-next',
//             prevEl: '.custom-swiper-button-prev',
//           }}
//           //  pagination={{ clickable: true }}
//           //  scrollbar={{ draggable: true }}
//            onSwiper={(swiper) => console.log(swiper)}
//            onSlideChange={() => console.log('slide change')}
//         >         
        
//         {swiper.map(image => (
          
//             <SwiperSlide>
//             <div class="card-group" >
//               <div key={image.id} className="card" >
//                 <img src={image.src} alt={image.alt} className="card-image" style={{ width: "100%", height: "300px",borderRadius:" 20px 20px 0px 0px",opacity: "0.8" }}/>
//                <div class="card-body">
//                 <p> <b style={{color:"#CF0A0A"}}> Event: </b>  {image.event}</p>
//                 <p> <b style={{color:"#CF0A0A"}}> Date: </b>  {image.Date}</p>
//                 <p> {image.text}</p>

//                 </div> 
//               </div>
//               </div>
//             </SwiperSlide>
            
//         ))}
       
//         </Swiper> 
//         </div>
//     </>
//     )
// }
// export default Dogs;
// Dogs.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import swiperData from './swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './about.css';
import './CustomSwiper.css';

const Dogs = () => {
    return (
        <>
            <div className="image-grid" style={{ backgroundColor: "#EEEEEE", marginTop: "-50px", height: "800px" }}>
                <h1 style={{ textAlign: 'center', paddingTop: '40px', letterSpacing: "5px", fontSize: "50px", color: "#CF0A0A" }}>
                    Join Our Events
                </h1>
             
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                     pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {swiperData.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="card-group">
                                <div className="card">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="card-image"
                                        style={{ width: "100%", height: "300px", borderRadius: "20px 20px 0px 0px", opacity: "0.8" }}
                                    />
                                    <div className="card-body">
                                        <p>
                                            <b style={{ color: "#CF0A0A" }}>Event:</b> {image.event}
                                        </p>
                                        <p>
                                            <b style={{ color: "#CF0A0A" }}>Date:</b> {image.Date}
                                        </p>
                                        <p>{image.text}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-swiper-button-next">Next</div>
                <div className="custom-swiper-button-prev">Prev</div>
            </div>
        </>
    );
};

export default Dogs;
