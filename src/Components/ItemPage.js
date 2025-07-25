import Footer from "./Footer";
import Header from "./Header";
import { TbParkingCircleFilled } from "react-icons/tb";
import { IoCar } from "react-icons/io5";
import { TbDisabled } from "react-icons/tb";
import { MdPregnantWoman } from "react-icons/md";

// 위치값 혹은 개인 기능 페이지 애니메이션 효과는 react혹은 css로 선택하여 진행해 주시면 됩니다
const ItemPage = () => {
    return (
        <div>

            {/* .주차장 실시간 빈자리 확인 - 지원 */}
            <Header />
            <div className="top-item">
                {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
                <img src="../image/images/save.png" alt="메인 이미지" className="shrink" />
                <div className="top-text">
                    <h1>실시간 빈자리 확인</h1>
                    <h2>{'🚗'}“자리 찾느라 빙빙 돌던 시간, 이제 끝!”</h2>
                    <p>P’IN은 모든 제휴 주차장의 실시간 현황을 제공합니다.</p>
                    <p>주차장에 도착했는데 자리가 없어서 당황했던 경험, 이제 NO!</p>
                    <p> 앱을 열면 현재 빈자리 수가 즉시 업데이트되어, 도착하기 전에 자리 상황을 확실히 확인할 수 있어요!</p>
                </div>
            </div>

            <div className="item-list">
                <h3>상세 설명</h3>
                <ul>
                    <li><button>{'🚗💨'}실시간 빈자리 확인</button></li>
                    <li><button>{'🎯💖'}맞춤형 우선 주차 구역 안내</button></li>
                    <li><button>{'📍🚙'}위치 기반 주변 주차장 검색</button></li>
                    <li><button>{'📅✨'}스마트 예약 연동</button></li>
                </ul>
            </div>
            <div className="contents">
                <div className="item-content">
                    <h3>실시간 빈자리 확인</h3>
                    <p>이제 주차장 찾느라 빙빙 돌 필요 없어요!</p>
                    <img src="../image/images/jiwon-img-1.png" alt="실시간 빈자리 확인 이미지" />
                    <h2>주차장 자리, P’IN에서 바로 확인!</h2>
                    <p>주차장마다 남은 주차 공간을 실시간으로 업데이트합니다. </p>
                    <p>이제 주차장에 도착해서 자리 없을까 걱정하지 않아도 돼요!</p>
                </div>
                <div className="item-content">
                    <h3>맞춤형 우선 주차 구역 안내</h3>
                    <p>당신을 위한 자리, 여기 있어요!</p>
                    <img src="../image/images/jiwon-img-2.png" alt="맞춤형 우선 주차 구역 이미지" />
                    <TbParkingCircleFilled />
                    <TbParkingCircleFilled />
                    <IoCar />
                    <TbDisabled />
                    <MdPregnantWoman />
                    <div className="all-icon-wrap">
                        <div className="icon-wrap">
                            <TbParkingCircleFilled />
                            <p>주차 가능</p>
                        </div>
                        <div className="icon-wrap">
                            <IoCar />
                            <p>경차</p>
                        </div>
                        <div className="icon-wrap">
                            <TbDisabled />
                            <p>장애인</p>
                        </div>
                        <div className="icon-wrap">
                            <MdPregnantWoman />
                            <p>임산부</p>
                        </div>
                    </div>
                    <h2>당신을 위한 전용 구역, 이제 바로 확인! </h2>
                    <p>경차, 장애인, 임산부 전용 주차 구역을 지도에서 한 눈에 볼 수 있어요!</p>
                    <p>필요한 구역을 빠르게 찾아, 더 편리하고 안전하게 주차하세요!</p>
                </div>
                <div className="item-content">
                    <h3>위치 기반 주변 주차장 검색</h3>
                    <p>내 주변, 지금 바로 주차할 곳은?</p>
                    <img src="../image/images/jiwon-img-3.png" alt="위치 기반 주변 주차장 검색" />
                    <h2>어디서든 가까운 주차장, 바로 찾기!</h2>
                    <p>내 현재 위치를 기반으로 가장 가까운 주차장을 추천합니다.</p>
                    <p>이동 중에도 손쉽게 주변 주차 현황을 확인하고 선택할 수 있어요!</p>
                </div>
                <div className="item-content">
                    <h3>스마트 예약 연동</h3>
                    <p>확인했다면, 예약까지 원-클릭!</p>
                    <img src="../image/images/save.png" alt="스마트 예약 연동" />
                    <h2>자리 확인 → 바로 예약 → 걱정 끝!</h2>
                    <p>빈자리를 찾았다면, 즉시 예약하고 도착 후 바로 주차하세요!</p>
                    <p> 예약부터 결제까지 앱에서 원스톱으로 해결 가능합니다.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ItemPage;