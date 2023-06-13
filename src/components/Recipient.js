import React from 'react'

const Recipient = ({data, updateFieldHandler}) => {
  return (
    <>
      <h2>Destinatário</h2>
      <div className='grid grid-cols-1 gap-5'>
      <div className='inputArea'>
          <label>Nome do Responsável</label>
          <input className='p-1 px-2 rounded'
          value={data.responsavel || ""}
          onChange={(e) => updateFieldHandler("responsavel", e.target.value)} />
        </div>
        <div className='inputArea'>
          <label>E-mail do Responsável</label>
          <input className='p-1 px-2 rounded'
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)} />
        </div>
        <div className='inputArea'>
          <label>Cópia</label>
          <input className='p-1 px-2 rounded'
          value={data.copia || ""}
          onChange={(e) => updateFieldHandler("copia", e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default Recipient