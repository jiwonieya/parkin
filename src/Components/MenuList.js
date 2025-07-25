import { useState } from 'react';

const MenuList = ({device}) => {
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isAppOpen, setAppOpen] = useState(false);
  
  return (
    <ul className="nav-list">
      <li className={isServiceOpen ? 'open' : ''}>
        <button onClick={() => {setServiceOpen(!isServiceOpen); setAppOpen(false); }}>
          서비스소개 {isServiceOpen ? '▲' : '▼'}
        </button>
        {isServiceOpen && (
          <ul className="submenu">
            <li>브랜드 소개</li>
            <li>연혁</li>
            <li>비전</li>
          </ul>
        )}
      </li>
      <li className={isAppOpen ? 'open' : ''}>
        <button onClick={() => {setAppOpen(!isAppOpen); setServiceOpen(false);}}>
          모바일 앱 이용안내 {isAppOpen ? '▲' : '▼'}
        </button>
        {isAppOpen && (
          <ul className="submenu">
            <li>설치 안내</li>
            <li>사용 가이드</li>
            <li>FAQ</li>
          </ul>
        )}
      </li>
      <li>주차 공유 안내</li>
      <li>제휴 / 협력</li>
      <li>이용약관</li>
      <li>블로그</li>
      <li>고객지원</li>
    </ul>
  );
};

export default MenuList;