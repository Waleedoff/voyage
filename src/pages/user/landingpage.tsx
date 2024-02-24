import CardComponent from "src/components/user/card-component";

function LandingPage() {
  return (
    <>
      <div
        className={`bg-naturalGray500/10 backdrop-blur-lg w-full h-full flex justify-between rounded-[34px] gradient-border`}
      >
        <div className="flex flex-col justify-between">
          <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
          <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
        </div>
        <div className="w-[300px] h-[121px]">
          <CardComponent isHover={true}></CardComponent>
        </div>
        <div className="flex justify-between flex-col">
          <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
          <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
