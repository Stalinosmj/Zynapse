"use client";
import MorphingText from "@/components/ui/morphing-text";
import CountdownTimer from "@/components/countdown";
import { Cover } from "@/components/ui/cover";
import { Hyperspeed } from "@/components/hyperspeed";

export function Heading() {
  const texts = [
    "Hello",
    "Welcome",
    "Engaging",
    "Challenge",
    "Solution",
    "Innovate",
    "Explore",
    "Think",
    "Tech",
    "Fest",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center relative min-h-[800px] cursor-pointer">
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 6,
          islandWidth: 2,
          lanesPerRoad: 2,
          fov: 50,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 10,
          lightPairsPerRoadWay: 20,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />
      <div className="flex flex-col items-center justify-evenly w-full h-svh gap-6 pt-5 md:pt-14">
        <h1 className="md:text-7xl p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950 from-0% via-purple-950/40 via-10% to-transparent to-100% rounded-3xl font-audioWide text-4xl lg:text-8xl font-bold text-center text-white relative z-20">
          <Cover>ZYNAPSE</Cover>
        </h1>
        <div className="flex justify-between items-center flex-wrap w-full gap-48 mb-20">
          <MorphingText texts={texts} />
          <CountdownTimer />
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="btn btn-outline btn-primary">Register Now</button>
        </div>
      </div>
    </div>
  );
}
