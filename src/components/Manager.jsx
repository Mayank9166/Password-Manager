import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Manager = () => {
  // localStorage.clear();
  const ref = useRef();
  const ref2 = useRef();
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const showPassword = () => {
    // alert('show the password')
    if (ref.current.src.includes("eye.png")) {
      ref.current.src = "eyecross.png";
      ref2.current.type = "text";
    } else {
      ref.current.src = "eye.png";
      ref2.current.type = "password";
    }
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    //  console.log(e);
  };

  const savePassword = () => {
    // console.log(form)
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };
  const copyText = (text) => {
    toast('🦄 Copy to Clipboard', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    
      });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      {/* <div className="  rotate-180 transform  bg-green-100"></div> */}
      <div className=" bg-green-50 mycontainer text-xl">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP /&gt;</span>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your Own Password Manager
        </p>
        <div className=" flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full w-full border border-green-500 p-4 py-1"
            type="url"
            name="site"
          />
          <div className="flex w-full gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full w-full border border-green-500 p-4 py-1"
              type="text"
              name="username"
            />
            <div className="relative">
              <input
                ref={ref2}
                onChange={handleChange}
                value={form.password}
                placeholder="Enter Password"
                className="rounded-full w-full border border-green-500 p-4 py-1"
                type="password"
                name="password"
              />
              <span
                className="absolute right-[5px] top-[5px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1 "
                  src="eye.png"
                  width={30}
                  alt="icon"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center border-2 border-green-900 bg-green-400 px-8 py-2 hover:bg-green-300 gap-2 rounded-full w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords ">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to Show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md  overflow-hidden">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center py-2 border border-white w-32">
                        <div
                          className=" py-3 cursor-pointer flex justify-center gap-3 items-center "
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <a href="item.site" target="_blank">
                            {item.site}
                          </a>
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        <div
                          className=" py-3 cursor-pointer flex justify-center gap-3 items-center "
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          {item.username}
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        <div
                          className=" py-3 cursor-pointer flex justify-center gap-3 items-center"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          {item.password}
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="text-center py-2 border border-white w-32">
                        <div
                          className=" py-3 cursor-pointer flex justify-center gap-3 items-center"
                         
                        >
                         
                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
