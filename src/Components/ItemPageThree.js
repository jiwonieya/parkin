import Footer from "./Footer";
import Header from "./Header";
/* .정기권 및 멤버십 혜택 (정수진) */
/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 */
const ItemPageThree = () => {
    return (
      <>
        <Header />
        <div className="three-item-header">
          <img
            src={`${process.env.PUBLIC_URL}/image/images/membership.png`}
            alt="혜택 이미지"
          />
          <div className="header-text">
            <h1>정기권 및 멤버십 혜택</h1>
            <h2>P’IN은 멤버십과 정기권을 함께할 때 빛나요!</h2>
            <p>
              주차장을 매일 이용하는 분들을 위한 스마트한 선택
              <br />
              정기권으로 고정 지출 절약하고 <br />
              멤버십으로 포인트 쌓고,
              <br />
              제휴 매장에서 쇼핑하고 무료 주차까지!
            </p>
          </div>
        </div>
        <div className="three-item-list">
          <h3>상세 설명</h3>
          <ul>
            <li>
              <button>제휴 매장 할인</button>
            </li>
            <li>
              <button>포인트 적립</button>
            </li>
            <li>
              <button>요금 할인 쿠폰</button>
            </li>
            <li>
              <button>프리미엄</button>
            </li>
          </ul>
        </div>

        {/* 여기 부분은 삭제 하신 후 개인 적으로 폼 만들어 주시면 됩니다 */}
        <div className="contents">
          <div className="item-content">
            <h3></h3>
            <p></p>
            <img />
            <p></p>
            <p></p>
          </div>
          <div className="item-content">
            <h3></h3>
            <img />
            <p></p>
            <p></p>
          </div>
          <div className="item-content">
            <h3></h3>
            <img />
            <p></p>
            <p></p>
          </div>
          <div className="item-content">
            <h3></h3>
            <img />
            <p></p>
            <p></p>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default ItemPageThree;