import { useRef, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
/* .정기권 및 멤버십 혜택 (정수진) */
/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 */

const ItemPageThree = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
      }, []);

      const refSection1 = useRef(null);
      const refSection2 = useRef(null);
      const refSection3 = useRef(null);
      const refSection4 = useRef(null);

      const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      };
      
  return (
    <div>
      <Header />
      <div className="three-item-header">
        <img
          src={`${process.env.PUBLIC_URL}/image/images/membership.png`}
          alt="혜택 이미지"
        />
        <div className="header-text">
          <h1>정기권 및 멤버십 혜택</h1>
          <p>
            주차장을 매일 이용하는 분들을 위한 스마트한 선택
            <br />
            정기권으로 매달 최대 10만 원 절약! <br />
            멤버십으로 주차하고 포인트도 쌓고
            <br />
            쇼핑·병원에서도 주차 혜택을 한 번에!
          </p>
          <h2>P’IN은 정기권과 멤버십이 함께할 때 빛나요!</h2>
        </div>
      </div>
      <div className="three-item-list">
        <h3>상세 설명</h3>
        <ul>
          <li>
            <button onClick={() => scrollToSection(refSection1)}>
              정기권 소개
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refSection2)}>
              멤버십 혜택
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refSection3)}>
              요금 비교
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refSection4)}>
              구매하기
            </button>
          </li>
        </ul>
      </div>

      {/* 상세내용*/}
      <div className="page-three-contents">
        <section className="three-item-content1" ref={refSection1}>
          <div className="title-box">
            <h1 className="section-title">P'IN의 정기권</h1>
            <h2 className="section-subtitle">
              하루 커피 값 아껴서, 한 달이면 9만 원 절약!
            </h2>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/images/su/parkingticket.png`}
            alt="정기권 이미지"
          />
          <div>
            <h2>월 정액제로 주차 걱정 끝!</h2>
            <p>고정된 지출, 확실한 절약으로 고민하지말고 구매하세요!</p>
          </div>
          <div>
            <h2>웹 및 앱에서 간편한 정기권 구매</h2>
            <p>주차가 필요한 기간만큼 쉽고 빠르게 구매가 가능합니다</p>
          </div>
          <div>
            <h2>잊기 쉬운 월 정기 결제는 손쉽게 기간 연장!</h2>
            <p>매월 자동결제로 정기권 기간을 연장하세요</p>
          </div>
          <div className="content-text">
            <p>평일·주말·야간·주간 옵션 선택 가능</p>
            <p>월 49,000원으로 주차 무제한</p>
          </div>
        </section>
        <section className="three-item-content2" ref={refSection2}>
          <div className="title-box">
            <h1 className="section-title">멤버십 소개</h1>
            <h2 className="section-subtitle">가입만 해도 포인트 지급! </h2>
            <p>쓰면 쓸수록 쌓이는 리워드 시스템</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/images/su/membership_account.png`}
            alt="멤버십 이미지"
          />
          <div>
            <h3>
              <strong>월 50,000원</strong>으로 다양한 혜택을 누려보세요
            </h3>
          </div>
          <div>
            <h2>
              <span>기본 혜택</span>
              <strong> 포인트 적립</strong>
            </h2>
            <p>주차만 했을 뿐인데 포인트가 쌓인다?</p>
            <p>멤버십이니까 가능해요!</p>
            <p>가입 즉시 2,000 포인트 + 친구 초대 시 1,000 포인트 지급</p>
            <div className="content-text">
              <p>결제 시 포인트 사용 가능</p>
              <p>사용 실적에 따라 등급 업그레이드</p>
              <p>등급별 추가 할인 제공</p>
            </div>
          </div>
          <div>
            <h2>
              <span>선택 옵션 1. </span>제휴 매장 할인
            </h2>
            <p>쇼핑은 즐겁게, 주차는 무료로!</p>
            <p>제휴 카페·마트·병원 방문 시 이용</p>
            <p>결제 금액에 따라 자동 주차 할인 적용</p>
            <p>별도 인증 없이 앱과 매장 POS 시스템 연동으로 스마트하게 처리 </p>
            <div className="content-text">
              <p>스타벅스·이마트·스타필드 등 20여곳 사용 가능</p>
              <p>매장 검색 시 주차 지원 여부 확인 가능</p>
            </div>
          </div>

          <div>
            <h2>
              <span>선택 옵션 2. </span>요금 할인 쿠폰
            </h2>
            <p>멤버십 회원만 받는 특별한 할인 혜택</p>
            <p>이달의 쿠폰으로 알뜰 주차의 시작! </p>
            <p>할인쿠폰으로 스마트하게 주차하세요</p>
            <div className="content-text">
              <p>원하는 이용 시간대나 요일에 적용 가능</p>
              <p>친구 초대 시 50% 할인 쿠폰 발급 가능</p>
              <p>생일 고객 1시간 무료 쿠폰 제공</p>
            </div>
          </div>
        </section>
        <section className="three-item-content3" ref={refSection3}>
          <div className="title-box">
            <h1 className="section-title">이용 요금 비교</h1>
            <h2 className="section-subtitle">가성비가 확실한 P'IN</h2>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/images/su/comparison.png`}
            alt="요금비교 이미지"
          />
          <div>
            <h2>한 달에 주차로 들어가는 비용은?</h2>
            <p>일반 주차: 하루 5,000원 × 30일 = 150,000원</p>
            <p>정기권: 월 49,000원으로 무제한 주차</p>
            <p>멤버십: 추가 포인트/쿠폰/제휴 할인까지 포함</p>
          </div>
          <div>
            <h2>내 주차 패턴에 맞춘 혜택!</h2>
            <p>
              주 5일 이상 주차한다면? → <strong>정기권</strong>이 필수!
            </p>
            <p>
              자주 쇼핑하거나 병원을 자주 간다면? → <strong>멤버십</strong>이 더
              유리!
            </p>
            <p>
              둘 다 해당된다면? → <strong>정기권 + 멤버십</strong>으로 혜택
              극대화!
            </p>
          </div>
          <div>
            <h2>당신에게 맞는 옵션은?</h2>
            <p>직장인 A씨 “출퇴근 때만 주차 필요해요”</p>
            <span>주간 정기권 추천</span>
            <p>프리랜서 B씨 “자주 이동해서 유동적인 주차가 필요해요”</p>
            <span>멤버십 + 쿠폰 추천</span>
            <p>엄마 C씨 “마트·병원 많이 다녀요”</p>
            <span>멤버십 + 제휴 할인</span>
          </div>
        </section>

        <section className="three-item-content4" ref={refSection4}>
          <div className="title-box">
            <h1 className="section-title">간편하게 시작하세요!</h1>
            <h2 className="section-subtitle">
              원하는 혜택을 바로 구매할 수 있어요
            </h2>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/images/su/buy.png`}
            alt="구매 이미지"
          />
          <div>
            <h2>웹 및 앱에서 간편한 구매</h2>
            <p>주차 스트레스를 줄이고 싶다면? </p>
            <p>주차할 때마다 매일 혜택을 누리고 싶다면?</p>
            <p>
              <strong>P’IN 정기권 & 멤버십</strong>으로 지금 바로 시작해보세요!
            </p>
          </div>
          <div className="buy-button">
            <button>정기권 구매하기</button>
            <button>멤버십 가입하기</button>
            <button>정기권 + 멤버십</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ItemPageThree;
