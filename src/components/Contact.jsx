import React from "react"
import {FaUserAlt} from "@react-icons/all-files/fa/FaUserAlt"
import {FaPenNib} from "@react-icons/all-files/fa/FaPenNib"
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope"
import {FaPaperPlane} from "@react-icons/all-files/fa/FaPaperPlane"
import Button from "./Button"





const Contact = () => {




return (

<div className="w-full md:w-7/12 lg:w-2/3 flex justify-center md:border-white-whiteyDarker md:border-solid md:border-l-[1px] px-6">

<form className="w-full max-w-lg relative z-10" autoComplete="off">
<div className="pb-8">
<div className=" w-full relative input-effect">
  <input aria-labelledby="lblname" id="sender" className="effect-16 appearance-none" type="text" name="name" placeholder=" " />
  <label id="lblname" htmlFor="sender"><FaUserAlt className="float-left mr-3"/><span className="relative form-label-align">Name<sup>*</sup>:</span> </label>
  <span className="default-border" />
  <span className="focus-border" />
</div></div>

<div className="pb-8">
<div className=" w-full relative input-effect">
  <input aria-labelledby="lblemail" id="email" className="effect-16 appearance-none" type="email" name="email" placeholder=" " required/>
  <label id="lblemail" htmlFor="email"><FaEnvelope className="float-left mr-3"/><span className="relative form-label-align">Email<sup>*</sup>:</span></label>
  <span className="default-border" />
  <span className="focus-border" />
</div></div>

<div className="pb-8">
<div className=" w-full relative input-effect">
  <textarea aria-labelledby="lblemessage" id="message" className="effect-16 relative textarea-align appearance-none" name="message" rows="7" placeholder=" "></textarea>
  <label id="lblemessage" htmlFor="message"><FaPenNib className="float-left mr-3"/><span className="relative form-label-align">Message:</span></label>
  <span className="default-border" />
  <span className="focus-border" />
  
</div></div>

<div className="w-full pb-8">
<Button
 icon={<FaPaperPlane/>}
 title="Send"
 primary
 full
 />
</div>
</form>

</div>


)
}

export default Contact