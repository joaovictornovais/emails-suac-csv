import React from 'react'

const Company = ({ data, updateFieldHandler }) => {
  return (
    <>
      <h2>Company</h2>
      <div className='grid grid-cols-2 gap-5'>
      <div className='inputArea'>
          <label>Prefixo</label>
          <select className='p-1 rounded'
          value={data.prefixo || ""}
          onChange={(e) => updateFieldHandler("prefixo", e.target.value)}>
            <option value="A">A</option>
            <option value="O">O</option>
          </select>
        </div>
        <div className='inputArea'>
          <label>Empresa</label>
          <input className='w-[60%] p-1 px-2 rounded'
          value={data.empresa || ""}
          onChange={(e) => updateFieldHandler("empresa", e.target.value)}/>
        </div>
        <div className='inputArea'>
          <label>Número</label>
          <input className='w-[60%] p-1 px-2 rounded'
          value={data.numero || ""}
          onChange={(e) => updateFieldHandler("numero", e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default Company