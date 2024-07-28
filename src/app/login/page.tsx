const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-[30vh] lg:h-[50vh]">
      <div className="flex flex-col xl:flex-row justify-center items-center h-[20vh] rounded-lg gap-8 px-4 lg:px-8 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h2 className="text-3xl font-semibold">Log In</h2>
        <div className="flex flex-col justify-start items-center gap-6 pl-4 xl:border-l border-gray-200">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm">User Name:</h4>
            <input type="text" placeholder="Your Name" className="outline-none bg-gray-200 rounded-md shadow-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm">Password:</h4>
            <input type="text" placeholder="******" className="outline-none bg-gray-200 rounded-md shadow-md px-3 py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
