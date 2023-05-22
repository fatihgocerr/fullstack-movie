import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from '../Input'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../slices/modalSlice'
import { useLoginMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/userSlice'

export const Login = () => {
  const [{ isRemember, rememberedName }, setRemember] = useState({
    isRemember: false,
    rememberedName: '',
  })
  const [{ email, password }, setForm] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const handleForm = async () => {
    if (!email || !password) {
      return toast('Boş alanları doldurunuz!')
    }
    try {
      const { data } = await login({ email, password }).unwrap()
      console.log(data)
      if (isRemember) {
        localStorage.setItem(
          'remember',
          JSON.stringify({ email, name: `${data.name} ${data.surname}` })
        )
      }
      toast.success('Giriş başarılı!')
      dispatch(setCredentials({ ...data }))
      dispatch(closeModal())
    } catch ({ data }) {
      console.log(data)
      toast.error(data.message)
    }
  }

  const logoutHandle = () => {
    localStorage.removeItem('remember')
    setForm({})
    setRemember({})
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('remember'))
    if (data) {
      setRemember((prev) => ({
        rememberedName: data.name,
        isRemember: true,
      }))
      setForm((prev) => ({
        ...prev,
        email: data.email,
      }))
    }
  }, [])

  return (
    <div className="bg-base-300 rounded-md lg:h-[500px] lg:w-[800px] lg:grid  lg:grid-cols-2">
      <div>
        <h2 className="p-2 pt-5 text-2xl text-white text-center font-bold">
          {rememberedName ? `Hoş Geldin ${rememberedName}` : 'Hoş Geldiniz!'}
        </h2>
        {rememberedName && (
          <h6
            onClick={logoutHandle}
            className="text-[13px] text-center w-full hover:text-accent cursor-pointer duration-200"
          >
            Farklı bir kullanıcı ile giriş yap.
          </h6>
        )}

        <div className="flex flex-col gap-4 items-center justify-start p-10 ">
          {!rememberedName && (
            <Input
              setForm={setForm}
              title={'Email Adresi'}
              value={email}
              name="email"
            />
          )}
          <Input
            setForm={setForm}
            title={'Şifreniz'}
            value={password}
            name="password"
            type="password"
          />
          <label className="flex w-full justify-between items-center ">
            <h2 className=" tracking-wide text-primary text-sm">
              Beni Hatırla
            </h2>
            <input
              checked={isRemember}
              onChange={(e) =>
                setRemember((prev) => ({
                  ...prev,
                  isRemember: e.target.checked,
                }))
              }
              type="checkbox"
              className="checkbox checkbox-sm checkbox-primary"
            />
          </label>
          <button
            onClick={handleForm}
            className="bg-primary drop-shadow-lg text-base-300 rounded-md font-semibold px-6 p-2"
          >
            Giriş Yap
          </button>
        </div>
      </div>
      <img
        className="hidden lg:block h-full object-cover rounded-tr-md rounded-br-md"
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220119-lord-of-the-rings-amazon-ew-1148-78f178.jpg"
      />
    </div>
  )
}
