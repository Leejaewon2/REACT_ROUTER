import { Navigate, useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigate = useNavigate();
  const isLogin = false;

  if (isLogin) {
    return (
      <>
        <h1>마이페이지</h1>
        <p>Mypage 영역 입니다</p>
        {/* <Link to="/">Home으로 이동</Link> */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </>
    );
  } else {
    return <Navigate id="/login" replace={true} />;
  }
};

export default Mypage;
