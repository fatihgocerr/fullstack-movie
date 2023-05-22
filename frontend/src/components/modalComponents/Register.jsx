import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { baseUrl } from '../../apiService'
import { openModal } from '../../slices/modalSlice'
import { useDispatch } from 'react-redux'
import { Input } from '../Input'
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/
export const Register = () => {
  const dispatch = useDispatch()
  const [
    { username, surname, email, password, password2, name, country },
    setForm,
  ] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    name: '',
    surname: '',
    country: 'TR',
    profilePicture: '',
  })

  const handleForm = async (e) => {
    e.preventDefault()
    if (!email || !password || !password2 || !name || !username || !surname) {
      toast('Herhangi bir alan boş bırakılmamalı.')
    } else if (!pattern.test(password)) {
      toast.error(
        'Şifre en az 7 haneli olmalı. En az 1 büyük harf, 1 küçük harf ve 1 sayı içermeli.'
      )
    } else if (password !== password2) {
      toast.error('Şifre ve şifre tekrarı eşleşmiyor.')
    } else if (name.length < 5) {
      toast.error('isim en az 5 haneli olmalı.')
    } else if (username.length < 5) {
      toast.error('Kullanıcı adı  en az 5 haneli olmalı')
    } else {
      axios
        .post(baseUrl + '/users/register', {
          username,
          email,
          password,
          profile: {
            profilePicture: `https://ui-avatars.com/api/?name=${name}+${surname}`,
            name,
            surname,
            country,
          },
        })
        .then((user) => {
          console.log(user)
          dispatch(openModal('login'))
          toast.success(
            'Kayıdınız başarıyla yapılmıştır. Lütfen emailinizi kontrol ediniz.'
          )
        })
        .catch((err) => {
          if (err.response.data.message.includes('role')) {
            toast.error('Rol alanı girilmeli')
          }
          if (err.response.data.message.includes('email')) {
            toast.error('Email daha önce kullanılmış. ')
          }
          if (err.response.data.message.includes('username')) {
            toast.error('Kullanıcı adı  daha önce kullanılmış')
          }
        })
    }
  }

  return (
    <div className="bg-base-300 rounded-md  lg:w-[800px] lg:grid  lg:grid-cols-2">
      <div>
        <h2 className="pl-4 pt-5 text-2xl  mb-2 text-white text-center font-bold">
          Kayıt Ol
        </h2>

        <form
          onSubmit={handleForm}
          className="flex flex-col gap-4 items-center justify-center px-10 pb-5"
        >
          <Input
            setForm={setForm}
            title={'Kullanıcı Adı'}
            value={username}
            name="username"
          />
          <div className="flex gap-2">
            <Input
              setForm={setForm}
              title={'Adınız'}
              value={name}
              name="name"
            />
            <Input
              setForm={setForm}
              title={'Soyisminiz'}
              value={surname}
              name="surname"
            />
          </div>
          <Input
            setForm={setForm}
            title={'Email Adresi'}
            value={email}
            name="email"
            type="email"
          />
          <Input
            setForm={setForm}
            title={'Şifre'}
            value={password}
            name="password"
            type="password"
          />
          <Input
            setForm={setForm}
            title={'Şifre Tekrar'}
            value={password2}
            name="password2"
            type="password"
          />

          <button className="border-2 py-2 px-10 rounded-md text-slate-100 hover:text-primary hover:border-primary">
            Kayıt Ol
          </button>
        </form>
      </div>
      <img
        className="hidden lg:block h-full object-cover rounded-tr-md rounded-br-md"
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-01/220119-lord-of-the-rings-amazon-ew-1148-78f178.jpg"
      />
    </div>
  )
}
