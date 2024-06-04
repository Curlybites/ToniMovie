import { FaReact } from "react-icons/fa";

function loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col ">
      <FaReact className="text-6xl animate-spin w-20 h-20" />

      {/* <div className="content flex">
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div> */}
    </div>
  );
}

export default loading;

