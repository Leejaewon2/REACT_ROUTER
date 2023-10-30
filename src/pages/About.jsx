import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParms, setSearchParms] = useSearchParams();
  const detail = searchParms.get("detail");
  const mode = searchParms.get("mode");

  const onToggleDetail = () => {
    setSearchParms({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParms({ mode: nextMode, detail });
  };
  return (
    <>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </>
  );
};

export default About;
