import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>TypeScript&React Hooksサンプル集</h1>
      <Link to="/usestate">useState</Link>
      <br />
      <Link to="/usereducer">useReducer</Link>
      <br />
      <Link to="/usecallback">useCallback</Link>
      <br />
      <Link to="/usememo">useMemo</Link>
      <br />
      <Link to="/useeffect">useEffect</Link>
      <br />
      <Link to="/usecontext">useContext</Link>
      <br />
      <Link to="/useref">useRef</Link>
      <br />
      <Link to="/useimperativehandle">useImperativeHandle</Link>
      
    </>
  );
};