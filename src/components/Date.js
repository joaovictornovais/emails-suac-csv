import React from 'react'

const Date = ({ data, updateFieldHandler }) => {
  return (
    <>
      <h2>Data e Horário</h2>
      <div className='grid grid-cols-2 gap-5'>
        <div className='inputArea'>
          <label>Data</label>
          <input className='w-[60%] p-1 px-2 rounded' 
          value={data.data || ""}
          onChange={(e) => updateFieldHandler("data", e.target.value)}/>
        </div>
        <div className='inputArea'>
          <label>Hora</label>
          <input className='w-[60%] p-1 px-2 rounded' 
          value={data.hora || ""}
          onChange={(e) => updateFieldHandler("hora", e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default Date