import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "./Footer";
import Header from "./Header";

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const ItemPageFour = () => {
    useEffect(() => {
        // DOM이 완전히 로드된 후 애니메이션 실행
        const timer = setTimeout(() => {
            // 상단 제목 애니메이션 (요소 존재 확인)
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
        }, 100); // 100ms 지연

        // 클린업 함수
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
            {/* 안전을 위한 cctv (정회윤) */}
            <div className="top-item">
                {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
                <img src="/image/images/jungimg/cctvimg.jpg" alt="메인 이미지" className="shrink" />
                <div className="top-text">
                    <h1>안전을 위한 cctv </h1>
                    <p>주차장 상황, 실시간으로 확인하세요<br />
                        실시간 CCTV 확인 기능<br />
                        불안했던 주차장 상황, 이제 눈으로 직접 확인하세요<br />
                        매번 불편하고 막연했던 주차장 이용… <br />
                        우리 앱은 실시간 CCTV 기능을 통해 주차장 상황을<br />
                        투명하게 보여주는 서비스를 제공합니다.
                    </p>
                    <p>혼잡도 확인 → 실시간 영상 확인 → 안전한 주차 완료!</p>
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
                    <img src="/image/images/jungimg/full.jpg" alt="메인 이미지" className="shrink2" />
                    <p>주차하러 갔다가 자리가 없어서 되돌아온 분</p>
                    <p>늦은 밤이나 이른 아침 주차가 걱정되는 분 </p>
                    <p>주차장 관리자로서 현장 상황을 실시간으로 모니터링하고 싶은 분</p>
                </div>
                <div className="item-content" id="usage-section">
                    <h3>어떻게 이용하나요?</h3>
                    <img src="/image/images/jungimg/pp.jpg" alt="메인 이미지" className="shrink3" />
                    <div className="ul-list">
                    <ul>
                        <p>1. 주차장 선택</p>
                        <li>위치 기반으로 근처 주차장 검색</li>
                        <li>CCTV 지원 주차장 표시됨</li>
                    </ul>
                    <ul>
                        <p>2. CCTV 실시간 확인</p>
                        <li>현재 영상 스트리밍으로 바로 보기</li>
                        <li>출입구, 지하1층, 옥상 등 구역별 시청 가능</li>
                        <li>혼잡도 표시로 자리가 남았는지도 확인 가능</li>
                    </ul>
                    <ul>
                        <p>3. 예약 or 이동 결정</p>
                        <li>주차장 상황에 따라 주차 장소 판단 가능</li>
                        <li>목적지 도착 전에 CCTV로 <br></br>미리 확인해 이동 스트레스 ↓</li>
                    </ul>
                    </div>
                </div>
                <div className="item-content" id="review-section">
                    <h3>리얼 후기</h3>
                    <img src="/image/images/jungimg/men.jpg" alt="메인 이미지" className="shrink" />
                    <p>"주차장에 도착하기 전에 CCTV로 확인하니 너무 편해요.
                        헛걸음 안 하게 돼서 시간 절약돼요!" <br></br>-지은, 직장인-</p>
                    <p>"혼자 야근할 때 무서웠는데, CCTV로 상황 확인하고 나니 안심됐어요." <br></br>-선아, 대학생-</p>
                </div>
                <div className="item-content" id="start-section">
                    <h3>지금 바로 시작해보세요! <br></br>복잡한 주차장, 이제는 눈으로 직접 보고 판단하는 시대! <br></br>당신의 주차를 더 똑똑하게 만드는 실시간 CCTV, 지금 만나보세요.</h3>
                </div>
            </div>
        </div>
    );
};

export default ItemPageFour;