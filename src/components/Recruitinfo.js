import gfdLogo from './gfdLogo.png'
import { Navigation, Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Recruitinfo() {
  const roster = ['John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001', 'John Smith #001']
  return (
    <div className='border-2 border-solid bg-slate-50 mx-auto mt-6 mb-6 p-10 md:w-3/4'>
      <h3 className='mt-6 mb-6 text-xl bg-slate-300 md:text-2xl lg:text-3xl xl:text-4xl'>Recruit Class 2202</h3>
      <Swiper
        className='h-96'
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='mt-6 mx-auto' src={gfdLogo} /> <p>slide 1</p></SwiperSlide>
        <SwiperSlide><img className='mt-6 mx-auto' src={gfdLogo} /> <p>slide 2</p></SwiperSlide>
        <SwiperSlide><img className='mt-6 mx-auto' src={gfdLogo} /><p>slide 3</p></SwiperSlide>
        <SwiperSlide><img className='mt-6 mx-auto' src={gfdLogo} /><p>slide 4</p></SwiperSlide>

      </Swiper>


      <div className='mx-auto rounded-2xl bg-red-600 text-white mt-6 p-6'>
        <h4 className='underline'>Class Roster</h4>
        {roster.map(names => <em className='flex justify-center mr-3 ml-3'>{names}</em>)}
        <div className='mt-6'>
          <em> "Insert recruit class motivational statement here" <p>-Class 2202</p></em>
        </div>
      </div>
  <div className='mt-6 mx-auto bg-blue-800 rounded-xl md:w-1/4'>
<p>
<button className='text-xl text-slate-50 hover:text-yellow-300'>
<a href='#' className='no-underline text-xl text-slate-50 hover:text-yellow-300'>
      
      Previous Recruit Classes  
      <i className="ml-6 fa-brands fa-youtube"></i>
      
    
  </a>
</button>
</p>
  </div>
    </div>
  )
}
