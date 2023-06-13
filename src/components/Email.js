const Email = ({ data, updateFieldHandler }) => {
  return (
    <>
      <h2>Corpo do E-mail</h2>
      <div className='grid grid-cols-2 gap-5'>
        <div className='inputArea col-span-2'>
          <label>Desenvolvimento</label>
          <select onChange={(e) => updateFieldHandler("desenvolvimento", e.target.value)} value={data.desenvolvimento || ""} className='p-1 rounded' >
            <option value="" disabled selected>SELECIONE O DESENVOLVIMENTO</option>
            <option value="AAC" >ATENDENTE ATENDEU A CHAMADA</option>
            <option value="ANA" >ATENDENTE NÃO ATENDEU A CHAMADA</option>
            <option value="NAC" >NENHUM ATENDENTE CONECTADO</option>
          </select>
        </div>
        <div className={data.desenvolvimento === 'AAC' || data.desenvolvimento === 'ANA' ? 'inputArea col-span-2' : 'hidden'}>
          <label>{data.desenvolvimento === 'AAC' ? 'Atendente' : 'Atendente(s) Conectado(s)'}</label>
          <input className='w-[60%] p-1 px-2 rounded' value={data.atendente || ""} onChange={(e) => updateFieldHandler("atendente", e.target.value)} />
        </div>
        <div className={data.desenvolvimento !== 'NAC' ? 'inputArea col-span-2' : 'hidden'}>
          <label>Nome Genérico?</label>
          <select className='p-1 rounded' onChange={(e) => updateFieldHandler("generico", e.target.value)}>
            <option value="nao" selected>Não</option>
            <option value="sim">Sim</option>
          </select>
        </div>
        <div className='inputArea col-span-2'>
          <label>URE</label>
          <select className='p-1 rounded' onChange={(e) => updateFieldHandler("isUre", e.target.value)}>
            <option value='nao'>Não</option>
            <option value='sim'>Sim</option>
          </select>
        </div>
        <div className={data.isUre === 'sim' ? 'inputArea col-span-2' : 'hidden'}>
          <label>Digite a URE</label>
          <input className='p-1 rounded' value={data.ure || ""} onChange={(e) => updateFieldHandler("ure", e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default Email