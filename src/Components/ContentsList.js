import { useRef } from "react";
import Circle from "./Circle";
import ContentsBanner from "./ContentsBanner";
import MainContent from "./MainContent";

const ContentsList = () => {
  const scrollRefs = useRef([]);

  return (
    <div className="contents-list">
      <Circle scrollRefs={scrollRefs} />
      <ContentsBanner />
      <MainContent scrollRefs={scrollRefs} />
    </div>
  );
};

export default ContentsList;
