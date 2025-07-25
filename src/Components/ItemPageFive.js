import { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ItemPageFive = () => {
    const containerRef = useRef(null);
    const TextWithBreaks = ({ text }) =>
        text.split("\n").map((line, i) => (
            <span key={i}>
                {line}
                <br />
            </span>
        ));
    const sectionRefs = useRef([]);

    const scrollToSection = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    };
    const contentItems = [
        {
            title: "개인 주차공간 공유해서 용돈 벌자!",
            text1: "사용하지 않는 주차 공간, \n그냥 비워두시겠어요?",
            image: "/image/images/save.png",
            text2:
                "당신이 비워두는 그 시간, \n누군가는 주차 공간이 절실합니다. \n  P'in 은 개인 주차장을 \n 시간 단위로 직접 공유할 수 있습니다.",
            text3: "간편 등록 \n\n ↓ \n\n시간 설정 \n\n ↓ \n\n수익 정산까지! \n \n몇 번의 터치면 끝!",
            text4: "지금 바로 나의 주차공간 공유를 시작해보세요.",
        },
        {
            title: "이런 분들께 꼭 필요해요!",
            text1: "1. 평일 낮 동안 비워두는 개인 주차장을 보유한 직장인",
            image: "/image/images/save.png",
            text2: "2. 주말에 쉬는 매장의 주차공간이 아까운 사장님",
            text3: "3. 공유로 수익을 만들고 싶은 누구나",
            text4: "4. 이제 당신의 주차 공간도 자산이 됩니다.",
        },
        {

            title: "공유자 (주차 공간 등록)",
            text1: "주차장 등록 방법 \n 주소 선택 + 사용 시간 입력 + 요금 설정",
            image: "/image/images/save.png",
            text2: "예약 승인 방식 선택: 자동 또는 수동 설정 가능",
            text3: "예약 확인 & 수익 정산 \n 실시간 확인 및 출금 신청 가능",
            text4: "한 달에 5~7만원 수익을 올리는 사용자도 있어요!",
        },
        {

            title: "예약자 (공간 이용자)",
            text1: "지도에서 공간 검색 \n 거리, 가격, 평점 필터 제공",
            image: "/image/images/save.png",
            text2: "시간 선택 후 예약 & 결제 \n 필요한 시간만큼만",
            text3: "도착해서 주차 \n 설명 확인 후 주차 완료, 리뷰 작성",
            text4: "공영 주차장보다 저렴하고 \n 빠르게 찾을 수 있어요.",
        },
        {
            title: "리뷰 & 시작 안내",
            text1: "“처음엔 걱정했는데 수익도 생기고 뿌듯해요.”  \n – 김OO",
            image: "/image/images/save.png",
            text2: "“공영주차장보다 싸고 좋았어요.”  \n – 이OO",
            text3:
                "지금 바로 시작해보세요! \n 주차 공간 등록으로 수익,\n 예약으로 스트레스 없는 주차",
            text4: "당신의 빈 공간이 누군가의 \n최고의 주차 자리가 됩니다.",
        },
    ];

    useEffect(() => {
        const sections = containerRef.current.querySelectorAll(".item-content");
        console.log(sections);

        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top center", // 화면 중간 도달 시 시작
                        toggleActions: "play none none none",
                        once: true, // 위로 올려도 다시 숨지 않음
                        markers: true, // 필요시 디버깅용
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
    return (
        <div>
            {/* 주차장 개인공유 (김율) */}
            <Header />
            <div className="top-item">

                {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
                <img src="../image/images/save.png" alt="메인 이미지" className="shrink" />
                <div className="top-text">
                    <h1>개인 주차장 공유</h1>
                    <p>내 주차장, 이제는 공유하세요!<br />
                        사용하지 않는 주차 공간, <br />
                        그대로 두시겠어요?<br />
                        당신이 비워두는 그 시간, <br />누군가는 주차 공간이 절실합니다. <br />
                        우리 앱은 개인 주차장을 시간 단위로 <br />
                        공유할 수 있는 기능을 제공합니다.
                    </p>
                </div>

            </div>
            <div className="item-list">
                <h3>상세 설명</h3>
                <ul>
                    <li><button onClick={() => scrollToSection(0,1)}>내 주차장 공유</button></li>
                    <li><button onClick={() => scrollToSection(2)}>주차장 등록</button></li>
                    <li><button onClick={() => scrollToSection(3)}>주차장 이용</button></li>
                    <li><button onClick={() => scrollToSection(4)}>리뷰</button></li>
                </ul>
            </div>


            {/* 여기 부분은 삭제 하신 후 개인 적으로 폼 만들어 주시면 됩니다 */}
            <div id="contents" ref={containerRef}>
                {contentItems.map((item, idx) => (
                    <section 
                            className="item-content" 
                            key={idx}
                            ref={(el) => (sectionRefs.current[idx] = el)}>
                        <img src={item.image} alt={`이미지 ${idx + 1}`} />
                        <h3>{item.title}</h3>
                        <p className="text-1"><TextWithBreaks text={item.text1} /></p>
                        <p className="text-2"><TextWithBreaks text={item.text2} /></p>
                        <p className="text-3"><TextWithBreaks text={item.text3} /></p>
                        <p className="text-4"><TextWithBreaks text={item.text4} /></p>
                    </section>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ItemPageFive;