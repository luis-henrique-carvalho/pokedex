import React, { useState } from 'react'

const Counter = () => {
  const [state, setState] = useState(1)
  
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='text-4xl'>{state}</h1>

      <button className='py-4 px-2 w-[200px] bg-slate-600'
        onClick={() => setState(2)}
      >+
      </button>

      <button className='py-4 px-2 w-[200px] bg-slate-600'
        onClick={() => setState(3)}
      > -
      </button>

    </div>
  )
}

export default Counter