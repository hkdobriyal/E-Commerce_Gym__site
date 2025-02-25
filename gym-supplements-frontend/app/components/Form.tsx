// // // 'use client'
// // // import Link from 'next/link';
// // // import React, { useState } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { setUser, setToken } from '../redux/slices/authSlice';
// // // import { registerUser, loginUser } from '../../utils/api';

// // // function Form({ register }: { register?: boolean }) {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [uname, setUname] = useState(''); // Use uname instead of name
// // //   const [phone_number, setPhone] = useState('');
// // //   const [address, setAddress] = useState('');
// // //   const dispatch = useDispatch();

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     try {
// // //       const userData = register
// // //         ? { uname, email, password, phone_number, address } // Ensure uname is used
// // //         : { email, password };

// // //       const response = register ? await registerUser(userData) : await loginUser(userData);

// // //       dispatch(setUser(response.data.user));
// // //       dispatch(setToken(response.data.token));
// // //       localStorage.setItem('token', response.data.token);

// // //       console.log(register ? 'Registration successful' : 'Login successful');
// // //     } catch (error) {
// // //       console.error(register ? 'Registration failed' : 'Login failed', error);
// // //     }
// // //   };

// // //   return (
// // //     <section id="form">
// // //       <div className="max-w-xl my-16 mx-8 lg:mx-auto p-8 lg:px-12 lg:py-16 bg-gradient-to-r from-gray-400 to-blu/30 text-black space-y-10 rounded-xl shadow-lg">
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="space-y-6">
// // //             {register && (
// // //               <div className="flex flex-col gap-3">
// // //                 <label htmlFor="uname" className="font-semibold text-lg">
// // //                   Name <span className="text-red-500">*</span>
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   id="uname"
// // //                   value={uname}
// // //                   onChange={(e) => setUname(e.target.value)}
// // //                   placeholder="Your Name"
// // //                   className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                   required
// // //                 />
// // //               </div>
// // //             )}
// // //             <div className="flex flex-col gap-3">
// // //               <label htmlFor="email" className="font-semibold text-lg">
// // //                 Email <span className="text-red-500">*</span>
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 placeholder="Your Email"
// // //                 className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="flex flex-col gap-3">
// // //               <label htmlFor="password" className="font-semibold text-lg">
// // //                 Password <span className="text-red-500">*</span>
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 placeholder="Password"
// // //                 className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                 required
// // //               />
// // //             </div>
// // //             {register && (
// // //               <>
// // //                 <div className="flex flex-col gap-3">
// // //                   <label htmlFor="phone_number" className="font-semibold text-lg">
// // //                     Phone Number <span className="text-red-500">*</span>
// // //                   </label>
// // //                   <input
// // //                     type="tel"
// // //                     id="phone_number"
// // //                     value={phone_number}
// // //                     onChange={(e) => setPhone(e.target.value)}
// // //                     placeholder="Your Phone Number"
// // //                     className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="flex flex-col gap-3">
// // //                   <label htmlFor="address" className="font-semibold text-lg">
// // //                     Address <span className="text-red-500">*</span>
// // //                   </label>
// // //                   <textarea
// // //                     id="address"
// // //                     value={address}
// // //                     onChange={(e) => setAddress(e.target.value)}
// // //                     placeholder="Your Address"
// // //                     className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                     rows={3}
// // //                     required
// // //                   />
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //           <div>
// // //             <button className="bg-blu p-3 text-center text-lg w-full rounded-lg shadow-md border-2 border-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
// // //               {register ? 'Register' : 'Login'}
// // //             </button>
// // //           </div>
// // //         </form>
// // //         <div className="flex flex-col gap-3 items-center">
// // //           <p className="text-black">{register ? 'Already have an account?' : 'New to Muscle&Health?'}</p>
// // //           <Link
// // //             href={register ? '/login' : '/register'}
// // //             className="text-blue-500 font-bold transition-all duration-300 hover:underline hover:text-blue-700"
// // //           >
// // //             {register ? 'Login' : 'Register'}
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Form;



// // // -----------------------------------------------------------------------



// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser, setToken } from '../redux/slices/authSlice';
// import { registerUser, loginUser } from '../../utils/api';

// function Form({ register }: { register?: boolean }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [uname, setUname] = useState('');
//   const [phone_number, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [message, setMessage] = useState<string | null>(null);
//   const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
//   const dispatch = useDispatch();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const userData = register
//         ? { uname, email, password, phone_number, address }
//         : { email, password };

//       const response = register ? await registerUser(userData) : await loginUser(userData);

//       dispatch(setUser(response.data.user));
//       dispatch(setToken(response.data.token));
//       localStorage.setItem('token', response.data.token);

//       setMessage(response.data.message);
//       setIsSuccess(true);

//       // Clear form fields
//       setUname('');
//       setEmail('');
//       setPassword('');
//       setPhone('');
//       setAddress('');
//     } catch (error: any) {
//       setMessage(error.response?.data?.message || "An error occurred");
//       setIsSuccess(false);
//     }
//   };

//   return (
//     <section id="form">
//       <div className="max-w-xl my-16 mx-8 lg:mx-auto p-8 lg:px-12 lg:py-16 bg-gradient-to-r from-gray-400 to-blu/30 text-black space-y-10 rounded-xl shadow-lg">
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-6">
//             {register && (
//               <div className="flex flex-col gap-3">
//                 <label htmlFor="uname" className="font-semibold text-lg">
//                   Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="uname"
//                   value={uname}
//                   onChange={(e) => setUname(e.target.value)}
//                   placeholder="Your Name"
//                   className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             )}
//             <div className="flex flex-col gap-3">
//               <label htmlFor="email" className="font-semibold text-lg">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email"
//                 className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-3">
//               <label htmlFor="password" className="font-semibold text-lg">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             {register && (
//               <>
//                 <div className="flex flex-col gap-3">
//                   <label htmlFor="phone_number" className="font-semibold text-lg">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone_number"
//                     value={phone_number}
//                     onChange={(e) => setPhone(e.target.value)}
//                     placeholder="Your Phone Number"
//                     className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <label htmlFor="address" className="font-semibold text-lg">
//                     Address <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     id="address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder="Your Address"
//                     className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     rows={3}
//                     required
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//           <div>
//             <button className="bg-blu p-3 text-center text-lg w-full rounded-lg shadow-md border-2 border-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
//               {register ? 'Register' : 'Login'}
//             </button>
//           </div>
//           {message && (
//             <div className={`mt-4 p-3 rounded-lg text-center ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white`}>
//               {message}
//             </div>
//           )}
//         </form>
//         <div className="flex flex-col gap-3 items-center">
//           <p className="text-black">{register ? 'Already have an account?' : 'New to Muscle&Health?'}</p>
//           <Link
//             href={register ? '/login' : '/register'}
//             className="text-blue-500 font-bold transition-all duration-300 hover:underline hover:text-blue-700"
//           >
//             {register ? 'Login' : 'Register'}
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Form;

'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../redux/slices/authSlice';
import { registerUser, loginUser } from '../../utils/api';

function Form({ register }: { register?: boolean }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uname, setUname] = useState('');
  const [phone_number, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = register
        ? { uname, email, password, phone_number, address }
        : { email, password };

      const response = register ? await registerUser(userData) : await loginUser(userData);

      dispatch(setUser(response.data.user));
      dispatch(setToken(response.data.token));
      localStorage.setItem('token', response.data.token);

      setMessage(response.data.message);
      setIsSuccess(true);

      // Clear form fields
      setUname('');
      setEmail('');
      setPassword('');
      setPhone('');
      setAddress('');
    } catch (error: any) {
      setMessage(error.response?.data?.message || "An error occurred");
      setIsSuccess(false);
    }
  };

  // Hide message on click anywhere
  useEffect(() => {
    const handleClick = () => {
      setMessage(null);
      setIsSuccess(null);
    };

    if (message) {
      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
    }
  }, [message]);

  return (
    <section id="form">
      <div className="max-w-xl my-16 mx-8 lg:mx-auto p-8 lg:px-12 lg:py-16 bg-gradient-to-r from-gray-400 to-blu/30 text-black space-y-10 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {register && (
              <div className="flex flex-col gap-3">
                <label htmlFor="uname" className="font-semibold text-lg">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="uname"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                  placeholder="Your Name"
                  className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="font-semibold text-lg">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="font-semibold text-lg">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {register && (
              <>
                <div className="flex flex-col gap-3">
                  <label htmlFor="phone_number" className="font-semibold text-lg">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Phone Number"
                    className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="address" className="font-semibold text-lg">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your Address"
                    className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    required
                  />
                </div>
              </>
            )}
          </div>
          <div>
            <button className="bg-blu p-3 text-center text-lg w-full rounded-lg shadow-md border-2 border-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
              {register ? 'Register' : 'Login'}
            </button>
          </div>
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {message}
            </div>
          )}
        </form>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-black">{register ? 'Already have an account?' : 'New to Muscle&Health?'}</p>
          <Link
            href={register ? '/login' : '/register'}
            className="text-blue-500 font-bold transition-all duration-300 hover:underline hover:text-blue-700"
          >
            {register ? 'Login' : 'Register'}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Form;
