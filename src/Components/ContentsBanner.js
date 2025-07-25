
const ContentsBanner = () => {
  return (
    <div className="contents-banner">
      <div className="CBtxt">
        <h2>
          돌지 말고, 바로 <span>Park In</span>
        </h2>
        <p>
          고민 많은 당신을 위해 <br />
          기다림 없는 주차 서비스
        </p>
        <button>P'in이 처음이신가요?　〉</button>
      </div>
      <div className="imgbox">
        <img
          src={`${process.env.PUBLIC_URL}/image/images/contentimage.png `}
          alt={`주차장전경`}
        />
      </div>
    </div>
  );
};

export default ContentsBanner;