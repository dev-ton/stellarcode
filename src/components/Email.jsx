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
          <div key={index}>
     <button className="mx-auto w-10 h-10 block mb-4" onClick={notify} onKeyPress={notify} tabIndex={0} title="Copy to clipboard">
     <FaEnvelope className="w-10 h-10 mb-4" style={{fill:'#ffc857'}} onClick={() => setCopyText(text)} onKeyDown={() => setCopyText(text)} role="button" tabIndex={0}/>
     </button>
     <div className="flex space-between">
     <a href={`mailto:${text}?subject=Quote&body=I%20would%20like%20to%20accept%20this%20quote`} className="relative form-label-align text-stellar fade_underlink">{text}</a>
      <button onClick={notify} onKeyPress={notify} tabIndex={0} title="Copy to clipboard">
      <FaCopy className="hidden mx-4 relative copyIcon" onClick={() => setCopyText(text)} onKeyDown={() => setCopyText(text)} role="button" tabIndex={0}/>
      </button>
      </div>
         </div>
      ))}
      <CopyToClipElement text={copyText} />
    




<Toaster position="bottom-left" />


</div>
    )}

export default Email