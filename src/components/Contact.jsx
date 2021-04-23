import React from "react"





const Contact = () => {

return (


<form className="w-full max-w-lg pl-20 border-gray-700 border-solid border-l-2">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-whitey text-xs font-bold mb-2" htmlFor="grid-name">
        Name
      </label>
      <input className="appearance-none opacity-75 block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Jane" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-whitey text-xs font-bold mb-2" htmlFor="grid-email">
        E-mail
      </label>
      <input className="appearance-none opacity-75 block w-full bg-gray-200 text-whitey border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
      <p className="text-gray-600 text-xs italic">Fill in your email address.</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-whitey text-xs font-bold mb-2" htmlFor="message">
        Message
      </label>
      <textarea className="no-resize opacity-75 appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" defaultValue={""} />
      <p className="text-gray-600 text-xs italic">Describe your project</p>
    </div>
  </div>
  <div>
    <div className="md:w-full">
      <button className="shadow bg-stellar-dark stellarButton w-full transition ease-in-out duration-75 focus:shadow-outline focus:outline-none text-whitey font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div className="md:w-2/3" />
  </div>
</form>






)
}

export default Contact