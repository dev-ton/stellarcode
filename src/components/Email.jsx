import React, { useRef, useState, useEffect }  from "react"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaCopy } from "@react-icons/all-files/fa/FaCopy"
import toast, { Toaster } from 'react-hot-toast';




const CopyToClipElement = ({ text }) => {
  
  const myRef = useRef(null);
  const [data, setData] = useState(text);
  useEffect(() => setData(text), [text]);

  useEffect(() => {
    if (myRef.current && data) {
      myRef.current.select();
      document.execCommand("copy");
      setData(null);
    }
  }, [data]);

  return <div>{data && <textarea ref={myRef} defaultValue={data}></textarea>}</div>;
};


const Email = () => {
    const [copyText, setCopyText] = useState("");
    const data = ["tony@stellarcode.io"];
    const notify = () => toast('Copied to the clipboard!'); 
    return (
<div>

      {data.map((text, index) => (
          <div className="flex space-between" key={index}>
     <FaEnvelope className="float-left mr-2 relative top-3" style={{fill:'#ffc857'}}/><a href={`mailto:${text}?subject=Quote&body=I%20would%20like%20to%20accept%20this%20quote`} className="relative form-label-align text-stellar fade_underlink">
         {text}</a> <a onClick={notify} onKeyPress={notify} role="button" tabIndex={0} title="Copy to clipboard"><FaCopy className="mx-4 relative top-3 copyIcon" onClick={() => setCopyText(text)} onKeyDown={() => setCopyText(text)} role="button" tabIndex={0}/></a>
         </div>
      ))}
      <CopyToClipElement text={copyText} />
    




<Toaster position="bottom-left" />


</div>
    )}

export default Email