import { Link, Outlet, useNavigate } from "react-router-dom";

const Articles = () => {
  const navigate = useNavigate();
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글3</Link>
        </li>
      </ul>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
};
export default Articles;
