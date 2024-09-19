
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
        <div className="flex flex-col justify-center items-center text-white gap-5">
          <h1>Controls:</h1>
          <table cellPadding={5} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td>Scroll Up</td>
                <td>=</td>
                <td className='text-yellow-400'>W</td>
                <td>or</td>
                <td className='text-yellow-400'>↑</td>
              </tr>
              <tr>
                <td>Open/Close Left</td>
                <td>=</td>
                <td className='text-yellow-400'>A</td>
                <td>or</td>
                <td className='text-yellow-400'>←</td>
              </tr>
              <tr>
                <td>Scroll Down</td>
                <td>=</td>
                <td className='text-yellow-400'>S</td>
                <td>or</td>
                <td className='text-yellow-400'>↓</td>
              </tr>
              <tr>
                <td>Open/Close Right</td>
                <td>=</td>
                <td className='text-yellow-400'>D</td>
                <td>or</td>
                <td className='text-yellow-400'>→</td>
              </tr>
            </tbody>
          </table>
          {/* <button type='button' className='border border-white hover:border-yellow-400 hover:text-yellow-400 font-large rounded-lg text-sm px-5 py-2.5 mt-10'>Understood</button> */}
          <h1 className='border border-black font-large text-sm px-5 py-2.5 mt-10'>Scroll <u>down</u> to get started.</h1>
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
    </>
  )
}

export default Tutorial;
