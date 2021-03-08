import * as React from "react";
import ClearbitHeader from "../components/ClearbitHeader";
import HorizontalCard from "../components/HorizontalCard";
import FrameTestimonial from "../components/FrameTestimonial";
import TealiumTestimonial from "../components/TealiumTestimonial";
import SegmentTestimonial from "../components/SegmentTestimonial";
import RequestDemo from "../components/RequestDemo";
import { RecoilRoot } from "recoil";

const IndexPage = () => {
  return (
    <RecoilRoot>
      <main>
        <ClearbitHeader />
        <div className="lg:max-w-6xl lg:mx-auto flex flex-col mx-4 my-10">
          <HorizontalCard />
          <FrameTestimonial />
          <TealiumTestimonial />
          <SegmentTestimonial />
        </div>
        <RequestDemo />
      </main>
    </RecoilRoot>
  );
};

export default IndexPage;
