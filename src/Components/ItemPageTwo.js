import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ItemPageTwo = () => {
  const contentItems = [
    {
      title: "맞춤형 추천",
      text1: "맞춤형 추천으로 \n 손쉽게 주차자리를 탐색하는 기능이 있어요",
      text2: "나에게 최적화된 주차장과 추천요금제까지 제안받아요",
      image: "/image/images/two/item2-1.png",
    },
    {
      title: "원터치 사전결제",
      text1: "원터치 사전결제로 \n 미리 결제하고 정산없이 나갈 수 있어요",
      text2: "사용자의 시간을 소중하게 생각하는 시간절약 서비스에요",
      image: "/image/images/two/item2-2.png",
    },
    {
      title: "스마트 예약과 관리",
      text1: "스마트예약 관리 및 안내 서비스",
      text2: "예약 완료 후에도 필요한 정보를 \n 언제든지 확인할 수 있어요",
      image: "/image/images/two/item2-3.png",
    },
    {
      title: "이용후기/24시 고객지원",
      text1: "이용후기 & 24시 고객지원",
      text2: "프리미엄 경험을 위한 부가기능이에요",
      image: "/image/images/two/item2-4.png",
    },
  ];

  const TextWithBreaks = ({ text }) =>
    text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  useEffect(() => {
    window.scrollTo(0, 0);
    //애니메이션 처리
    gsap.utils.toArray(".item-animate").forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center", // 화면 중간 도달 시 시작
            toggleActions: "play none none none",
            once: true, // 위로 올려도 다시 숨지 않음
            markers: false, // 필요시 디버깅용
          },
        }
      );
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <div>
      {/* .스마트 예약 - 표지우 */}
      <Header />
      <div className="top-item">
        {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
        {/* <img src="../image/images/save_desk.jpg" alt="메인 이미지" className="shrink" /> */}
        <img
          src={`${process.env.PUBLIC_URL}/image/images/main.png`}
          alt="메인 이미지"
          className="shrink"
        />
        <div className="top-text">
          <h1>
            스마트한 예약/길안내 <br />
          </h1>
          <p>
            내 주차장, 이제는 공유하세요!
            <br />
            개인 주차공간 공유 기능 사용하지 않는 주차 공간, <br />
            그대로 두시겠어요?
            <br />
            당신이 비워두는 그 시간, 누군가는 주차 공간이 절실합니다. <br />
            우리 앱은 개인 주차장을 시간 단위로 <br />
            공유할 수 있는 기능을 제공합니다.
          </p>
        </div>
      </div>
      <div className="item-list">
        <h3>상세 설명</h3>
        <ul>
          {contentItems.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => {
                    const move = document.querySelector(`#itemtwo-${idx}`);
                    if (move) {
                      move.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="itempage-two">
        {contentItems.map((item, idx) => {
          return (
            <li id={`itemtwo-${idx}`} key={idx} className="item-animate">
              <img src={`${process.env.PUBLIC_URL}${item.image}`} />
              <h2>
                <TextWithBreaks text={item.text1} />
              </h2>
              <p>{item.text2}</p>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default ItemPageTwo;
