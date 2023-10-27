import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import '../../styles/scss/components/swiper.scss';

export default function SwiperComponent() {
    return (
        <div>
            <div className="swiper-button-container">
                <div className="swiper-button-prev"></div>

                <Swiper
                    className="swiper"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    // slidesPerColumnFill="row"
                    spaceBetween={20}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    //-- 반응형
                    // breakpoints={{
                    //     700: {
                    //         slidesPerView: 2,
                    //         slidesPerGroup: 2,
                    //     },
                    //     1000: {
                    //         slidesPerView: 3,
                    //         slidesPerGroup: 3,
                    //     },
                    //     1300: {
                    //         slidesPerView: 4,
                    //         slidesPerGroup: 4,
                    //     },
                    // }}

                    //     1378: {
                    //         slidesPerView: 6, // 한번에 보이는 슬라이드 개수
                    //         slidesPerGroup: 6, // 몇개씩 슬라이드 할지
                    //     },
                    //     998: {
                    //         slidesPerView: 5,
                    //         slidesPerGroup: 5,
                    //     },
                    //     625: {
                    //         slidesPerView: 4,
                    //         slidesPerGroup: 4,
                    //     },
                    //     0: {
                    //         slidesPerView: 3,
                    //         slidesPerGroup: 3,
                    //     },
                >
                    <SwiperSlide>
                        <Link to="/group/home/1">
                            <img src="asset/images/cat1.svg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/group/home/1">
                            <img src="asset/images/cat2.svg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/group/home/1">
                            <img src="asset/images/rabbit1.svg" />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/group/home/1">
                            <img src="asset/images/rabbit2.svg" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
}
