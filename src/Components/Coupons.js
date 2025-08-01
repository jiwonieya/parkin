import { useState } from "react";
import { IoGift } from "react-icons/io5";
import { createClient } from "@supabase/supabase-js";
import CouponList from "./CouponList";
import confetti from "canvas-confetti";

const supabase = createClient(
    "https://omuurjgdsyvillyeomvw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdXVyamdkc3l2aWxseWVvbXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTcwMDgsImV4cCI6MjA2NjQ5MzAwOH0.EQ9Zzo2lXD0WIzpAQQgq3Jb8Whh69biSZLBkeGX-Qyk"
);

const Coupons = ({ onClose }) => {

    // 사용자가 입력한 휴대폰 번호를 저장하는 상태
    const [phone, setPhone] = useState("");

    // 상태 메시지 (예: 에러 안내, 처리중 메시지 등)를 저장하는 상태
    const [status, setStatus] = useState("");

    // 쿠폰 발급 성공 시 아이콘/알림창을 보여줄지 여부
    const [showGift, setShowGift] = useState(false);

    // 발급된 쿠폰의 할인 종류 (예: "10%", "20%")를 저장
    const [couponType, setCouponType] = useState("");

    // "내 쿠폰 보기" 버튼 클릭 시 쿠폰 리스트를 보여줄지 여부
    const [showList, setShowList] = useState(false);

    // 현재 발급된 쿠폰의 전체 정보를 저장 (전화번호, 코드, 할인율 등)
    const [couponInfo, setCouponInfo] = useState(null);


    // 8자리 랜덤 쿠폰 코드를 생성하는 함수
    const generateCouponCode = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // 사용할 문자 집합
        let code = "";

        // 8자리 랜덤 문자열 생성
        for (let i = 0; i < 8; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        return `CPN-${code}`; // 앞에 CPN- 접두사 붙여서 반환
    };
    // 할인율을 랜덤으로 선택하는 함수
    const getRandomDiscount = () => {
        const discounts = ["10%", "20%", "30%"]; // 사용 가능한 할인율 목록
        return discounts[Math.floor(Math.random() * discounts.length)]; // 무작위 선택
    };

    // 폼 제출 시 실행되는 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작(페이지 새로고침) 방지

        // 전화번호가 비어있으면 메시지 출력하고 종료
        if (!phone.trim()) {
            setStatus("📱 휴대폰 번호를 입력하세요.");
            return;
        }

        setStatus("처리중...");// 처리 상태 메시지 표시


        // Supabase에서 이미 해당 전화번호로 발급된 쿠폰이 있는지 조회
        const { data: existing } = await supabase
            .from("coupons")
            .select("id")
            .eq("phone", phone)
            .single(); // 단일 결과만 가져옴

        // 이미 쿠폰이 있다면 메시지 출력하고 중단
        if (existing) {
            setStatus("❗ 이미 쿠폰을 발급받으셨습니다.");
            return;
        }
        // 쿠폰 발급 진행
        const randomType = getRandomDiscount(); // 랜덤 할인율 선택
        const randomCode = generateCouponCode(); // 랜덤 코드 생성
        setCouponType(randomType); // 상태에 할인율 저장 (UI용)

        // Supabase에 쿠폰 데이터 저장
        const { error } = await supabase.from("coupons").insert([
            {
                phone, // 입력한 전화번호
                type: randomType,//할인 종류
                code: randomCode, //생성된 쿠폰 코드
            },
        ]);

        // 에러가 없으면 성공적으로 쿠폰 발급 처리
        if (!error) {
            setCouponInfo({
                phone: phone,
                type: randomType,
                code: randomCode,
                used: false,
                created_at: new Date().toISOString(), // 현재 시간 기록
            });
            setShowGift(true); // 쿠폰 발급 메시지 보여주기
            setStatus(`${randomType} 할인 쿠폰이 발급되었습니다!`);

            confetti({
                angle: 90,
                spread: 120,
                startVelocity: 45,
                particleCount: 250,
                origin: { x: 0.5, y: 0.3 },
                zIndex: 3000,
            });
        }
    };

    return (
        <div className="popup-overlay">
            <div className="coupon-popup">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>

                {showList ? (
                    <CouponList
                        phone={couponInfo?.phone || phone}
                        couponData={couponInfo}
                        onClose={() => {
                            setShowList(false); // 쿠폰 리스트 숨기기
                            setCouponInfo(null); // 쿠폰 정보 초기화
                            setPhone(""); // 입력 번호 초기화
                            setCouponType(""); // 쿠폰 타입 초기화
                            setShowGift(false); // 발급된 선물 표시 제거
                            setStatus(""); // 메시지 초기화
                        }}
                    />
                ) : (
                    <>
                        <h3>휴대폰 번호로 쿠폰 받기</h3>
                        <p className="sub-text">
                            휴대폰 번호를 입력하고 <br />
                            쿠폰을 발급받으세요.
                        </p>

                        {/* // 쿠폰 발급 및 조회를 위한 입력 폼 */}
                        <form onSubmit={handleSubmit}>

                            {/* 휴대폰 번호 입력 필드 */}
                            <input
                                type="tel" // 전화번호 형식
                                placeholder="010-0000-0000"
                                value={phone} // 상태와 바인딩
                                onChange={(e) => setPhone(e.target.value)} // 입력 시 상태 업데이트
                            />


                            {/* 쿠폰 발급 버튼 - 폼 제출 트리거 */}
                            <button type="submit" className="click-btn">
                                쿠폰 발급 하기
                            </button>

                            {/* 쿠폰 발급 완료 후 보여줄 선물 아이콘 영역 */}
                            <div className={`gift ${showGift ? "show" : ""}`}>
                                <p className="gift-icons">
                                    <IoGift />
                                    {`${couponType} 할인 쿠폰이 발급되었습니다!`} {/* 발급된 쿠폰 종류 */}
                                </p>
                            </div>

                            {/* "내 쿠폰 보기" 버튼 */}
                            <button
                                type="button"
                                className="ok-btn"
                                onClick={() => {
                                    // 전화번호가 입력되지 않은 경우
                                    if (!phone) {
                                        setStatus("📱 휴대폰 번호를 입력하세요.");
                                        return;
                                    }

                                    // 쿠폰이 발급된 경우 couponInfo가 이미 있으므로 showList만 true로
                                    if (couponInfo && couponInfo.phone === phone) {
                                        setShowList(true); // 쿠폰 리스트 화면으로 전환
                                        return;
                                    }

                                    // 새 번호일 경우 해당 번호로 DB에서 조회
                                    const fetchExistingCoupon = async () => {
                                        const { data, error } = await supabase
                                            .from("coupons")
                                            .select("*")
                                            .eq("phone", phone) // 입력된 번호로 필터링
                                            .single(); // 단일 결과만 가져옴

                                        if (data) {
                                            // 쿠폰이 존재할 경우 상태 저장 및 리스트 화면 전환
                                            setCouponInfo(data);
                                            setShowList(true);
                                        } else {
                                            // 쿠폰이 존재할 경우 상태 저장 및 리스트 화면 전환
                                            setStatus("❗ 해당 번호로 발급된 쿠폰이 없습니다.");
                                        }
                                    };
                                    // 비동기 함수 실행
                                    fetchExistingCoupon();
                                }}
                            >
                                내 쿠폰 보기
                            </button>
                        </form>

                        {status && !showGift && <p>{status}</p>}
                    </>
                )}
            </div>
        </div>
    );
};

export default Coupons;
