import React from 'react'

import { AiFillCalendar, AiFillClockCircle, AiFillWechat } from 'react-icons/ai'
import { FaBuilding, FaBlenderPhone, FaEquals } from 'react-icons/fa'
import { RiUserVoiceFill } from 'react-icons/ri'
import { MdEmail, MdAttachEmail } from 'react-icons/md'
import { BsFillPersonFill, BsEmojiSmileFill, BsEmojiNeutralFill, BsEmojiFrownFill} from 'react-icons/bs'

const Final = ({ data }) => {
  return (
    <>
      <h2>Resumo + CSV</h2>
      <div className='grid grid-cols-1 gap-4 bg-zinc-300 p-2 rounded-md mb-5'>
        <div className='flex gap-3'>
          <div className='flex items-center gap-1'>
            <AiFillCalendar />
            <span className='font-semibold'>Data:</span>
            <p>{data.data}</p>
          </div>
          <div className='flex items-center gap-1'>
            <AiFillClockCircle />
            <span className='font-semibold'>Hora:</span>
            <p>{data.hora}</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='flex items-center gap-1'>
            <AiFillWechat />
            <span className='font-semibold'>Prefixo:</span>
            <p>{data.prefixo}</p>
          </div>
          <div className='flex items-center gap-1'>
            <FaBuilding />
            <span className='font-semibold'>Empresa:</span>
            <p>{data.empresa}</p>
          </div>
          <div className='flex items-center gap-1'>
            <FaBuilding />
            <span className='font-semibold'>Número:</span>
            <p>{data.numero}</p>
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <div className='flex items-center gap-1'>
            <AiFillWechat />
            <span className='font-semibold'>Desenvolvimento:</span>
            <p className='flex items-center gap-2'>{data.desenvolvimento} {data.desenvolvimento === "AAC" ? <BsEmojiSmileFill color={"green"} /> : data.desenvolvimento === "ANA" ? <BsEmojiNeutralFill color={"yellow"} /> : <BsEmojiFrownFill color={"red"}/>} </p>
          </div>
          <div className='flex items-center gap-1'>
            <RiUserVoiceFill />
            <span className='font-semibold'>Atendente:</span>
            <p>{data.atendente === "" ? "-" : data.atendente.toUpperCase()}</p>
          </div>
          <div className='flex items-center gap-1'>
            <FaEquals />
            <span className='font-semibold'>Nome Genérico:</span>
            <p>{data.generico === "" ? "Não" : data.generico}</p>
          </div>
          <div className='flex items-center gap-1'>
            <FaBlenderPhone />
            <span className='font-semibold'>URE:</span>
            <p>{data.ure === "" ? "-" : data.ure}</p>
          </div>
        </div>
        <div className='grid grid-cols-1'>
        <div className='flex items-center gap-3'>
            <BsFillPersonFill />
            <span className='font-semibold'>Responsável:</span>
            <p>{data.responsavel}</p>
          </div>
          <div className='flex items-center gap-3'>
            <MdEmail />
            <span className='font-semibold'>E-mail:</span>
            <p>{data.email}</p>
          </div>
          <div className='flex items-center gap-3'>
            <MdAttachEmail />
            <span className='font-semibold'>CC:</span>
            <p>{data.copia === "" ? "" : "-"}</p>
          </div>
        </div>
      </div>
      <div className='bg-zinc-100 p-2 rounded'>
        <p>
          {data.data},{data.hora},{data.empresa.toUpperCase()},{data.prefixo.toUpperCase()},{data.numero},{data.desenvolvimento.toUpperCase()},{data.atendente === "" ? "-" : data.atendente.toUpperCase()},{data.generico === "" ? "NAO" : data.generico.toUpperCase()},{data.ure === "" ? "-" : data.ure.toUpperCase()},{data.responsavel},{data.email},{data.copia === "" ? "" : "-"}
        </p>
      </div>
    </>
  )
}

export default Final