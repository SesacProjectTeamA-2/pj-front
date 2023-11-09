import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import '../../styles/scss/components/swiper.scss';
import { red } from '@mui/material/colors';

export default function SwiperComponent({ groupArray, setGroupArray }: any) {
    console.log('GroupArray : ', groupArray);

    // 랜덤 색상을 선택하는 함수
    const getRandomColor = () => {
        const colors = [
            '#ff6d59',
            '#ffcc77',
            '#83cb77',
            '#ff7373',
            '#7fbeeb',
            '#f399ca',
            '#b78be3',
            '#c4c4c4',
        ];

        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    console.log(groupArray);

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
                    autoplay={{ delay: 20000000, disableOnInteraction: true }}
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
                                <Link to={`/group/home/${groupInfo.gSeq}`}>
                                    <SwiperSlide
                                        style={{
                                            backgroundColor: getRandomColor(),
                                            // padding: '10px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            alignContent: 'space-between',
                                            justifyItems: 'center',
                                            height: '100%',
                                        }}
                                    >
                                        {/* <img src="asset/images/cat1.svg" /> */}
                                        {/* <div>{groupInfo.gCoverImg}</div> */}
                                        <div
                                            style={{
                                                margin: '0 30px',
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {groupInfo.gName}
                                        </div>
                                        <div
                                            style={{
                                                margin: '30px 6px',
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                opacity: '0.8',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    margin: '0px 5px',
                                                    color: '#8D6262',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                D-day
                                            </span>
                                            {groupInfo.gDday}
                                            <div
                                                style={{
                                                    margin: '2px 17px',
                                                    fontSize: '11px',
                                                }}
                                            >
                                                참석인원 수 /{' '}
                                                {groupInfo.gMaxMem}
                                            </div>
                                        </div>
                                        {/* <div>남은 일수 : {groupInfo.gDday}</div> */}
                                    </SwiperSlide>
                                </Link>
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
