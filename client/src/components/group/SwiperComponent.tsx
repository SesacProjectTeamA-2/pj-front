import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import '../../styles/scss/components/swiper.scss';

export default function SwiperComponent({ groupArray, setGroupArray }: any) {
    console.log('GroupArray : ', groupArray);

    return (
        <div>
            <div className="swiper-button-container">
                <div className="swiper-button-prev">
                    <img src="/asset/icons/left.svg" />
                </div>

                <Swiper
                    style={{ cursor: 'pointer' }}
                    className="swiper"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
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
                    {groupArray?.map((groupInfo: any) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <Link to={`/group/home/${groupInfo.gSeq}`}>
                                        {/* <img src="asset/images/cat1.svg" /> */}
                                        {/* <div>{groupInfo.gCoverImg}</div> */}
                                        <div>{groupInfo.gName}</div>
                                        <div>목표 날짜 : {groupInfo.gDday}</div>
                                        {/* <div>남은 일수 : {groupInfo.gDday}</div> */}
                                        <div>
                                            현재멤버수 / {groupInfo.gMaxMem}
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                ;
                            </>
                        );
                    })}
                </Swiper>
                <div className="swiper-button-next">
                    <img src="/asset/icons/right.svg" />
                </div>
            </div>
        </div>
    );
}
