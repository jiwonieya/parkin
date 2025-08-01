import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brandstory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      gsap.utils.toArray(".BS-mind > div").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 40%",
            },
          }
        );
      });
      gsap.fromTo(
        ".BS-future",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".BS-future",
            start: "top 40%",
          },
        }
      );
      gsap.fromTo(
        ".BS-simbol > div",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".BS-simbol",
            start: "top 40%",
          },
        }
      );
      gsap.fromTo(
        ".BS-colorbox > div",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".BS-colorbox",
            start: "top 40%",
          },
        }
      );
      gsap.fromTo(
        ".BS-imgbox > div",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".BS-imgbox",
            start: "top 50%",
          },
        }
      );
    }, 3000);
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Header />
      <div className="brandstory">
        <img
          src={`${process.env.PUBLIC_URL}/image/images/su/parking-top.png`}
          alt={`주차장전경`}
        />
        <div className="BS-header">
          <h1 className="BS-slogan">
            돌지 말고, 바로 <br/> <span>Park In</span>
          </h1>
        </div>
        <div className="BS-mind">
          <div>
            <h2>주차장 시스템이 불편해요</h2>
            <p>출,퇴근 시간에 차 댈 곳 찾느라 15분씩 도는 일상,</p>
            <p>병원 예약 시간보다 늦게 도착하는 스트레스,</p>
            <p>빌딩마다 다른 정산 시스템, 헷갈리는 요금 구조.</p>
          </div>
          <div>
            <h2>그래서, 우리가 시작했어요</h2>
            <p>
              <strong>주차</strong> 문제를 모두가 편리하게 해결하고 싶었어요
            </p>
            <p>쉽고 빠르고 친절한 서비스를 위해</p>
            <p>우리는 그렇게 P’IN을 만들었습니다</p>
          </div>
        </div>
        <div className="BS-future">
          <h2>주차 그 너머, 도시를 바꾸는 상상</h2>
          <p>
            P’IN은 단순한 주차가 아닌, 도시의 흐름과 <br />
            사람들의 이동 경험을 바꾸는 새로운 기준을 만들어 갑니다.
          </p>
          <p>
            우리는 주차를 넘어 도시와 이동의 방식을 <br />
            새롭게 디자인하고 있습니다.
          </p>
          <p>
            주차장에서 시작된 우리의 아이디어는 <br /> 사용자 중심, 환경 중심,
            기술 중심의 스마트한 솔루션으로 확장됩니다.
          </p>
        </div>
        <div className="BS-simbol">
          <div>
            <h2>P’IN을 표현하는 우리의 방법</h2>
            <p>주차장 서비스라는 다소 딱딱하고 기계적인 주제를</p>
            <p>
              활력과 에너지를 표현하는 오렌지 컬러, <br />
              밝고 긍정적인 선명한 옐로우 컬러로 <br />
              사용자 친화적으로 풀어내기 위한 컬러로 구성하였습니다
            </p>
          </div>
          <div className="BS-colorbox">
            <div className="orange">
              <h2>#FFA500</h2>
              <p>활력과 에너지를 나타내는</p>
              <p>오렌지 컬러</p>
            </div>
            <div className="yellow">
              <h2>#FFCD00</h2>
              <p>즐거움과 희망을 나타내는</p>
              <p>옐로우 컬러</p>
            </div>
          </div>
          <div className="BS-imgbox">
            <div className="mark">
              <div>
                <p>Symbol Mark</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo-05.png`}
                  alt="심볼 마크"
                />
              </div>
              <div>
                <p>Word Mark</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/logo2-07.png`}
                  alt="워드 마크"
                />
              </div>
            </div>
            <div className="logo">
              <div>
                <p>Horizontal</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo-03.png`}
                  alt="가로버전로고"
                />
              </div>
              <div>
                <p>Vertical</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/logo2-05.png`}
                  alt="세로버전로고"
                />
              </div>
            </div>
            <div className="color">
              <div>
                <p>Colors</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/logo2-04.png`}
                  alt="메인색깔로고"
                />
              </div>
              <div>
                <p>Gray Scale</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/logo2-03.png`}
                  alt="회색깔로고"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brandstory;
