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
          <Route path="/" element={<Home />} />
          <Route path="/usestate" element={<Counter initialValue={1} />} />
          <Route path="/usereducer" element={<Counter2 initialValue={1}/>} />
          <Route path="/usecallback" element={<Counter3/>} />
          <Route path="/usememo" element={<Counter4/>} />
          <Route path="/useeffect" element={<Clock/>} />
          <Route path="/usecontext" element={<Hello/>} />
          <Route path="/useref" element={<ImageUploader/>} />
          <Route path="/useimperativehandle" element={<Hello2/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};