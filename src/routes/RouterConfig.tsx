import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";
import Counter3 from "../components/Counter3";
import Counter4 from "../components/Counter4";
import Clock from "../components/Clock";
import Hello from "../components/Hello";
import ImageUploader from "../components/ImageUploader";
import Hello2 from "../components/Hello2";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ts-react-hooks/" element={<Home />} />
          <Route path="/ts-react-hooks/usestate" element={<Counter initialValue={1} />} />
          <Route path="/ts-react-hooks/usereducer" element={<Counter2 initialValue={1}/>} />
          <Route path="/ts-react-hooks/usecallback" element={<Counter3/>} />
          <Route path="/ts-react-hooks/usememo" element={<Counter4/>} />
          <Route path="/ts-react-hooks/useeffect" element={<Clock/>} />
          <Route path="/ts-react-hooks/usecontext" element={<Hello/>} />
          <Route path="/ts-react-hooks/useref" element={<ImageUploader/>} />
          <Route path="/ts-react-hooks/useimperativehandle" element={<Hello2/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};