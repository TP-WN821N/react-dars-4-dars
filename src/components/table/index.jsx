import React, { useState } from 'react'
import Modal from '../modal'

const Table = () => {
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState({})
  const [data, setData] = useState([])
  const hendleForm = () => {
    setOpen(true)
  }
  const deleteUser = (id) => {
    let new_data = data.filter((item, i) => item.id !== id)
    setData(new_data)
  }
  const editUser = (user) => {
    hendleForm()
    setUpdate(user)
  }
  return (
    <div className='w-[70%] mx-auto mt-8'>
      <Modal open={open} toggle={setOpen} data={data} setData={setData} update={update} setUpdate={setUpdate} />
      <div>
        <button onClick={hendleForm} className='text-white px-5 py-1 text-xl bg-blue-600 rounded'>Add student</button>
      </div>
      <table className='w-full mt-4'>
        <thead>
          <tr>
            <th className='border'>T/H</th>
            <th className='border'>Name</th>
            <th className='border'>Age</th>
            <th className='border'>Phone</th>
            <th className='border'>Address</th>
            <th className='border w-fit'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) => {
              return <tr key={i}>
                <td className='border text-center'>{i + 1}</td>
                <td className='border text-center'>{item.name}</td>
                <td className='border text-center'>{item.age}</td>
                <td className='border text-center'>{item.phone}</td>
                <td className='border text-center'>{item.address}</td>
                <td className='border text-center flex gap-2 justify-center'>
                  <button onClick={() => deleteUser(item.id)} className='text-lg text-white bg-red-600 px-3'>Delete</button>
                  <button onClick={() => editUser(item)} className='text-lg text-white bg-orange-400 px-3'>Edit</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table