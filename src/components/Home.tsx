import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>TypeScript&React Hooksサンプル集</h1>
      <Link to="/ts-react-hooks/usestate">useState</Link>
      <br />
      <Link to="/ts-react-hooks/usereducer">useReducer</Link>
      <br />
      <Link to="/ts-react-hooks/usecallback">useCallback</Link>
      <br />
      <Link to="/ts-react-hooks/usememo">useMemo</Link>
      <br />
      <Link to="/ts-react-hooks/useeffect">useEffect</Link>
      <br />
      <Link to="/ts-react-hooks/usecontext">useContext</Link>
      <br />
      <Link to="/ts-react-hooks/useref">useRef</Link>
      <br />
      <Link to="/ts-react-hooks/useimperativehandle">useImperativeHandle</Link>
      
    </>
  );
};