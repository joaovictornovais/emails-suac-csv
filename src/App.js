// Components
import Date from "./components/Date"
import Company from "./components/Company"
import Email from "./components/Email"
import Recipient from "./components/Recipient"
import Final from "./components/Final"

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { AiOutlineCalendar, AiFillCalendar, AiOutlineClear } from 'react-icons/ai'
import { BsBuilding, BsBuildingFill, BsPerson, BsPersonFill } from 'react-icons/bs'
import { MdMailOutline, MdMail, MdAlternateEmail } from 'react-icons/md'

import { useState } from "react"

function App() {

  const[currentForm, setCurrentForm] = useState(0)
  
  const formTemplate = {
    data: '',
    hora: '',
    prefixo: 'A',
    empresa: '',
    numero: '',
    desenvolvimento: '',
    atendente: '',
    generico: '',
    isUre: '',
    ure: '',
    responsavel: '',
    email: '',
    cc: '',
  }
  const[data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value }
    })
  }

  const form = [
    <Date data={data} updateFieldHandler={updateFieldHandler}/>,
    <Company data={data} updateFieldHandler={updateFieldHandler}/>,
    <Email data={data} updateFieldHandler={updateFieldHandler}/>,
    <Recipient data={data} updateFieldHandler={updateFieldHandler}/>,
    <Final data={data}/>
  ]
  const handleSubmitForm = (e) => {
    if (currentForm < form.length - 1) {
      setCurrentForm(currentForm + 1)
      console.log(currentForm)
    }
    e.preventDefault() 
  }
  const handlePreviousForm = (e) => {
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1)
      console.log(currentForm)
    } 
    e.preventDefault()
  }
  const handleClearForm = () => {
    setData(formTemplate)
    setCurrentForm(0)
  }

  return (
    <main className='bg-zinc-50 h-screen flex justify-center items-center'>
      <div className='bg-zinc-200 shadow-xl p-6 w-screen max-w-[700px]'>
        <div className='flex items-center gap-2 mb-10'>
          <div className={currentForm < 0 ? 'w-[10%] bg-zinc-300 h-[1px]' : 'w-[10%] bg-zinc-900 h-[1px]'}/>
          {currentForm > 0 ? <AiFillCalendar size={20} onClick={() => setCurrentForm(0)} />: <AiOutlineCalendar size={20}/>}
          <div className={currentForm < 1 ? 'w-[10%] bg-zinc-300 h-[1px]' : 'w-[10%] bg-zinc-900 h-[1px]'} />
          {currentForm > 1 ? <BsBuildingFill size={20} onClick={() => setCurrentForm(1)} /> : <BsBuilding size={20}/>}
          <div className={currentForm < 2 ? 'w-[10%] bg-zinc-300 h-[1px]' : 'w-[10%] bg-zinc-900 h-[1px]'} />
          {currentForm > 2 ? <MdMail size={20} onClick={() => setCurrentForm(2)} /> : <MdMailOutline size={20}/>}
          <div className={currentForm < 3 ? 'w-[10%] bg-zinc-300 h-[1px]' : 'w-[10%] bg-zinc-900 h-[1px]'} />
          {currentForm > 3 ? <BsPersonFill onClick={() => setCurrentForm(3)}  size={20}/> : <BsPerson size={20}/>}
          <div className={currentForm < 4 ? 'w-[10%] bg-zinc-300 h-[1px]' : 'w-[10%] bg-zinc-900 h-[1px]'} />
          {currentForm > 3 ? <MdAlternateEmail onClick={() => setCurrentForm(4)} color={'#548CA8'} size={20}/> : <MdAlternateEmail size={20} onClick={() => setCurrentForm(4)} />}
          <div className={currentForm < 4 ? 'w-[10%] bg-zinc-300 h-[1px]' : 'w-[10%] bg-zinc-900 h-[1px]'} />
        </div>
        <form>
          <div className='mb-10'>
            {form[currentForm]}
          </div>
          <div className='flex gap-2 justify-end'>
            <button type="button" onClick={handlePreviousForm} className={currentForm !== 0 ? 'flex items-center gap-1 w-[90px] bg-zinc-300 rounded px-2 py-0.5' : 'hidden'}>
              <span>Voltar</span>
              <GrFormPrevious />
            </button>
            <button type="submit" onClick={handleSubmitForm} className={currentForm < form.length - 1 ? 'flex items-center gap-1 w-[90px] bg-zinc-300 rounded px-2 py-0.5' : 'hidden'}>
              <span>Avançar</span>
              <GrFormNext />
            </button>
            <button type="button" onClick={handleClearForm} className={currentForm < form.length - 1 ? 'hidden' : 'flex items-center gap-1 w-[90px] bg-zinc-300 rounded px-2 py-0.5'}>
              <span>Limpar</span>
              <AiOutlineClear />
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default App;
