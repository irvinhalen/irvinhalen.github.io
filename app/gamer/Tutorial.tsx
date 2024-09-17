
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
                <td>W</td>
                <td>or</td>
                <td>↑</td>
                <td>=</td>
                <td>Scroll Up</td>
              </tr>
              <tr>
                <td>A</td>
                <td>or</td>
                <td>←</td>
                <td>=</td>
                <td>Open Left</td>
              </tr>
              <tr>
                <td>S</td>
                <td>or</td>
                <td>↓</td>
                <td>=</td>
                <td>Scroll Down</td>
              </tr>
              <tr>
                <td>D</td>
                <td>or</td>
                <td>→</td>
                <td>=</td>
                <td>Open Right</td>
              </tr>
            </tbody>
          </table>
          <h1>Scroll <u>down</u> to get started!</h1>
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
