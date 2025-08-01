import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "./Footer";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

const ItemPageFour = () => {
        useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            const title = document.querySelector(".top-item h1");
            if (title) {
                gsap.fromTo(title, 
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out"
                    }
                );
            }

            // 상단 텍스트 애니메이션
            const paragraphs = document.querySelectorAll(".top-item p");
            if (paragraphs.length > 0) {
                gsap.fromTo(paragraphs, 
                    {
                        y: 20,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power2.out"
                    }
                );
            }

            // 네비게이션 메뉴 애니메이션
            const menuItems = document.querySelectorAll(".item-list ul li");
            if (menuItems.length > 0) {
                gsap.fromTo(menuItems, 
                    {
                        y: 20,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        delay: 0.8,
                        ease: "power2.out"
                    }
                );
            }

            // 각 섹션의 스크롤 애니메이션
            const contentSections = document.querySelectorAll('.item-content');
            contentSections.forEach((section) => {
                const title = section.querySelector('h3');
                if (title) {
                    gsap.fromTo(title,
                        {
                            y: 30,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                // 텍스트 요소들 애니메이션
                const textElements = section.querySelectorAll('p, li');
                if (textElements.length > 0) {
                    gsap.fromTo(textElements,
                        {
                            y: 20,
                            opacity: 0
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 75%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });
        }, 100);
        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="four">
            <Header />
         {/* 안전을 위한 cctv (정회윤) */}
<div className="top-item">
    <img src={`${process.env.PUBLIC_URL}/image/images/jungimg/cctvimg.jpg`} alt="메인 이미지" className="shrink" />
    <div className="top-text">
        <h1>안전을 위한 CCTV</h1>
        <p>
            주차장 상황, 실시간으로 확인하세요<br />
            📹 실시간 CCTV 확인 기능 탑재<br />
            불안했던 주차장 상황, 이제 눈으로 직접 확인하세요<br />
            매번 불편하고 막연했던 주차장 이용…<br />
            우리 앱은 실시간 CCTV 기능을 통해 주차장 상황을<br />
            투명하게 보여주는 서비스를 제공합니다.<br /><br />
            🚗 주차의 불편함은 줄이고<br />
            👀 확인의 확실함은 높였습니다.
        </p>
        <p><strong>혼잡도 확인 → 실시간 영상 확인 → 안전한 주차 완료!</strong></p>
    </div>
</div>

<div className="item-list">
    <h3>상세 설명</h3>
    <ul>
        <li><button onClick={() => scrollToSection('necessary-section')}>이런 분들께 꼭 필요해요</button></li>
        <li><button onClick={() => scrollToSection('usage-section')}>어떻게 이용하나요?</button></li>
        <li><button onClick={() => scrollToSection('review-section')}>리얼 후기</button></li>
        <li><button onClick={() => scrollToSection('start-section')}>지금 바로 시작해보세요!</button></li>
    </ul>
</div>

<div className="contents">
    <div className="item-content" id="necessary-section">
        <h3>이런 분들께 꼭 필요해요</h3>
        <img src={`${process.env.PUBLIC_URL}/image/images/jungimg/full.jpg`} alt="메인 이미지" className="shrink2" />
        <p>🅿️ 주차하러 갔다가 자리가 없어서 되돌아온 분</p>
        <p>🌙 늦은 밤이나 이른 아침, 어두운 주차장이 불안한 분</p>
        <p>👷‍♂️ 주차장 관리자로서 현장 상황을 실시간으로 모니터링하고 싶은 분</p>
        <p>🚘 불필요한 대기 시간을 줄이고 싶으신 모든 분들께 추천합니다</p>
    </div>

    <div className="item-content" id="usage-section">
        <h3>어떻게 이용하나요?</h3>
        <img src={`${process.env.PUBLIC_URL}/image/images/jungimg/PP.jpg`} alt="메인 이미지" className="shrink3" />
        <div className="ul-list">
            <ul>
                <p>1. 주차장 선택</p>
                <li>GPS를 활용해 내 위치 주변 주차장을 검색</li>
                <li>CCTV 지원 여부가 명확히 표시됩니다</li>
                <li>혼잡도 표시를 통해 인기 많은 장소도 한눈에!</li>
            </ul>
            <ul>
                <p>2. CCTV 실시간 확인</p>
                <li>앱에서 직접 주차장 실시간 영상 확인</li>
                <li>출입구/지하1층/옥상 등 원하는 구역 선택 가능</li>
                <li>영상과 혼잡도 정보로 빠르게 판단 가능</li>
            </ul>
            <ul>
                <p>3. 예약 or 이동 결정</p>
                <li>실시간 확인 후 빈자리 여부에 따라 주차장 선택</li>
                <li>목적지 도착 전에 미리 확인해 헛걸음 방지</li>
                <li>불필요한 대기 시간 없이 더 빠르고 안전하게!</li>
            </ul>
        </div>
    </div>

    <div className="item-content" id="review-section">
        <h3>리얼 후기</h3>
        <img src={`${process.env.PUBLIC_URL}/image/images/jungimg/men.jpg`} alt="메인 이미지" className="shrink" />
        <p>
            "주차장에 도착하기 전에 CCTV로 확인하니 너무 편해요.<br />
            헛걸음 안 하게 돼서 시간 절약돼요!" <br />- 지은, 직장인 -
        </p>
        <p>
            "혼자 야근할 때 무서웠는데, CCTV로 상황 확인하고 나니 안심됐어요."<br />
            - 선아, 대학생 -
        </p>
        <p>
            "운전 초보인데 CCTV로 확인하고 넓은 자리 골라서 스트레스 덜 받았어요."<br />
            - 태훈, 사회초년생 -
        </p>
    </div>

    <div className="item-content" id="start-section">
        <h3>
            지금 바로 시작해보세요! <br />
            복잡한 주차장, 이제는 눈으로 직접 보고 판단하는 시대! <br />
            당신의 주차를 더 똑똑하게 만드는 실시간 CCTV, 지금 만나보세요.
        </h3>
        <p>
            더 이상 헛걸음하지 마세요<br />
            더 이상 불안해하지 마세요<br />
            지금 바로 실시간 CCTV 기능으로<br />
            효율적이고 안심되는 주차 생활을 경험해보세요.
        </p>
    </div>
</div>
<Footer />
</div>
    );
};

export default ItemPageFour;