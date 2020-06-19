import React from 'react';
import axios from 'axios';
import { apiURL } from '../../constants/';
import Layout from '../../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import { saveToken, swalToast } from 'src/utils';

const RegisterScreen = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      lastName: '',
      company: '',
      address: '',
      city: '',
      phone: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email geçersiz formatta')
        .required('Email alanı gereklidir'),
      name: Yup.string().required('İsim ALanı Gerekli bir Alandır'),
      lastName: Yup.string().required('Soyisim ALanı Gerekli bir Alandır'),
      address: Yup.string().required('Adres ALanı Gerekli bir Alandır'),
      city: Yup.string().required('Şehir Lanı Gerekli bir Alandır'),
      password: Yup.string()
        .required('Şifre alanı gereklidir')
        .min(6, 'Şifre en az 6 karakter olmalıdır')
    }),
    onSubmit: async values => {
      const {
        name,
        lastName,
        email,
        password,
        company,
        phone,
        city,
        address
      } = values;
      axios
        .post(`${apiURL}/auth/local/register`, {
          name,
          lastName,
          email,
          username: email,
          password,
          company,
          phone,
          city,
          address
        })
        .then(res => {
          const token = res.data.jwt;
          if (token) {
            saveToken(token);
            history.push('/');
          }
        })
        .catch(err => {
          if (
            err.response.data.message[0].messages[0].id ===
            'Auth.form.error.email.taken'
          ) {
            const Toast: any = swalToast('top-end', 3000);

            Toast.fire({
              icon: 'error',
              title: 'Email adresi sistemde kayıtlı. Lütfen giriş yapın'
            });
          }
        });
    }
  });

  return (
    <div>
      <Layout>
        <h1 className="text-center text-white text-2xl font-light">
          TicketMaster Register
        </h1>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  İsminiz
                </label>
                <input
                  type="text"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Adınız..."
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata :{formik.errors.name}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Soyisim
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Soyadınız..."
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata :{formik.errors.lastName}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Email Adresiniz..."
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata : {formik.errors.email}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Şifre
                </label>
                <input
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Şifreniz"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata : {formik.errors.password}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Firma Ünvanınız
                </label>
                <input
                  type="text"
                  id="company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Firma Ünvanınız"
                />
              </div>
              {formik.touched.company && formik.errors.company ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata : {formik.errors.company}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Adres
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-otline"
                  placeholder="Adresiniz"
                  cols={30}
                  rows={5}
                ></textarea>
              </div>
              {formik.touched.address && formik.errors.address ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata : {formik.errors.address}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Şehir
                </label>
                <input
                  type="text"
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Şehir"
                />
              </div>
              {formik.touched.city && formik.errors.city ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata : {formik.errors.city}</p>
                </div>
              ) : null}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Telefon
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className="shadow apperance-none border rounded 
                  w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-otline"
                  placeholder="Şehir"
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Hata : {formik.errors.phone}</p>
                </div>
              ) : null}
              <input
                type="submit"
                value="Üye Ol"
                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 "
              />
              <div className="mt-4 text-center">
                Zaten üye misiniz? Giriş yapmak için{' '}
                <strong className="text-red-800">
                  <Link to="/login">tıklayın</Link>
                </strong>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RegisterScreen;
