// import Lottie from "react-lottie";
// import animationData from "./Loading.json";

type Props = {
  wide?: boolean;
};
export default function Loader({ wide = true }: Props) {
  // const options = {
  //   loop: true,
  //   autoPlay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    // <div
    //   className={clsx(
    //     wide
    //       ? "w-full h-[75vh] flex justify-center items-center"
    //       : "flex justify-center"
    //   )}
    // >
    //   <MutatingDots
    //     height={80}
    //     width={80}
    //     color="#365C24"
    //     secondaryColor="#365C24"
    //     radius={12.5}
    //     ariaLabel="loading"
    //     visible={true}
    //   />
    // </div>
    <div className="w-full flex justify-center items-center h-[75vh]">
      {/* <Lottie options={options} height={120} width={120} /> */}
        <div className='h-8 w-8 bg-primary-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-primary-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-primary-600 rounded-full animate-bounce'></div>
    </div>
  );
}
