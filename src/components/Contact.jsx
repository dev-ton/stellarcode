import React from "react"
import {FaUserAlt} from "@react-icons/all-files/fa/FaUserAlt"
import {FaPenNib} from "@react-icons/all-files/fa/FaPenNib"
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope"
import {FaPaperPlane} from "@react-icons/all-files/fa/FaPaperPlane"





const Contact = () => {




return (

<div className="w-full md:w-2/3 flex justify-center md:border-gray-700 md:border-solid md:border-l-2 ">

<form className="w-full max-w-lg" autoComplete="off">
<div className="pb-8">
<div className=" w-full relative input-effect">
  <input aria-labelledby="lblname" className="effect-16 appearance-none" type="text" name="name" placeholder=" " />
  <label id="lblname"><FaUserAlt className="float-left mr-3"/><span className="relative form-label-align">Name<sup>*</sup>:</span> </label>
  <span className="default-border" />
  <span className="focus-border" />
</div></div>

<div className="pb-8">
<div className=" w-full relative input-effect">
  <input aria-labelledby="lblemail" className="effect-16 appearance-none" type="email" name="email" placeholder=" " required/>
  <label id="lblemail"><FaEnvelope className="float-left mr-3"/><span className="relative form-label-align">Email<sup>*</sup>:</span></label>
  <span className="default-border" />
  <span className="focus-border" />
</div></div>

<div className="pb-8">
<div className=" w-full relative input-effect">
  <textarea aria-labelledby="lblemessage" className="effect-16 relative textarea-align appearance-none" name="message" rows="7" placeholder=" "></textarea>
  <label id="lblemessage"><FaPenNib className="float-left mr-3"/><span className="relative form-label-align">Message:</span></label>
  <span className="default-border" />
  <span className="focus-border" />
  
</div></div>

<div className="w-full pb-8">
<button className="shadow bg-stellar-dark stellarButton w-full transition ease-in-out duration-150 focus:shadow-outline focus:outline-none text-whitey font-bold py-2 px-4 rounded" type="button">
        <FaPaperPlane className="float-left mr-3"/>Send
</button></div>
</form>

</div>
























)
}

export default Contact