import { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { nanoid } from 'nanoid'

const GlobalModal = ({ open, toggle, data, setData, update, setUpdate }) => {
  const [form, setForm] = useState({})
  const hendleModal = () => {
    toggle(false)
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  };
  const hendleCHange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  useEffect(() => {
    setForm({
      name: update.name || '',
      age: update.age || '',
      phone: update.phone || '',
      address: update.address || ''
    });
  }, [update]);

  const hendleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    if (update.id) {
      data.forEach(item => {
        if (item.id == update.id) {
          item.name = form.name || update.name
          item.age = form.age || update.age
          item.phone = form.phone || update.phone
          item.address = form.address || update.address
        }
      })
      setUpdate({})
    } else {
      setData([...data, { ...form, id: nanoid() }])
      setForm({})
    }
    hendleModal()
  }
  return (
    <Modal isOpen={open} onClick={hendleModal} className='fixed bg-gray-400 bg-opacity-50 top-0 left-0 w-full h-full flex justify-center items-center'>
      <div onClick={handleContentClick} className='bg-white w-[400px] p-5 rounded-2xl'>
        <ModalHeader>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl pb-3'>Add Student</h1>
            <button onClick={hendleModal} className='flex justify-center rounded items-center w-8 h-8 bg-red-500'>
              <i className="text-white fa-solid fa-xmark"></i>
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={hendleSubmit} className='flex flex-col gap-1' id='form'>
            <input value={form.name} onChange={hendleCHange} name='name' className='w-full border outline-none px-2 py-1 text-xl rounded focus:border-blue-500' type="text" placeholder='Name' />
            <input value={form.age} onChange={hendleCHange} name='age' className='w-full border outline-none px-2 py-1 text-xl rounded focus:border-blue-500' type="text" placeholder='Age' />
            <input value={form.phone} onChange={hendleCHange} name='phone' className='w-full border outline-none px-2 py-1 text-xl rounded focus:border-blue-500' type="text" placeholder='Phone' />
            <input value={form.address} onChange={hendleCHange} name='address' className='w-full border outline-none px-2 py-1 text-xl rounded focus:border-blue-500' type="text" placeholder='Address' />
          </form>
        </ModalBody>
        <ModalFooter>
          <button form='form' className='bg-green-600 text-xl px-4 py-1 rounded text-white mt-3'>Save</button>
        </ModalFooter>
      </div>
    </Modal>
  )
}

export default GlobalModal