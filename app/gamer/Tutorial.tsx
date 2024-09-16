
function Tutorial() {
  return (
    <>
      <div className="h-svh w-svh grid grid-cols-1 md:grid-cols-3 gap-5 w-full bg-black">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">W</div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">A</div>
            <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">S</div>
            <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">D</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-white'>Controls</h1>
          <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 font-large rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Understood</button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">↑</div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">←</div>
            <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">↓</div>
            <div className="rounded border-2 text-white h-12 w-12 flex justify-center items-center">→</div>
          </div>
        </div>
      </div>
      <div className='h-svh w-svw flex flex-col gap-5 justify-center items-center bg-black'>
      </div>
    </>
  )
}

export default Tutorial;
