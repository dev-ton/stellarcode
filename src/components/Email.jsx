import React, { useRef, useState, useEffect }  from "react"
import { FaEnvelope, FaCopy } from "react-icons/fa"
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast('Copied to the clipboard!');

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

    return (
<div>

      {data.map((text, index) => (
          <div className="flex space-between" onClick={notify} onKeyDown={notify} role="button" tabIndex={-1} key={index}>
     <FaEnvelope className="float-left mr-2 relative top-3" style={{fill:'#ffc857'}}/><a href={`mailto:${text}?subject=Quote&body=I%20would%20like%20to%20accept%20this%20quote`} className="relative form-label-align text-stellar underline hover:no-underline">
         {text}</a> <FaCopy className="mx-4 relative top-3 copyIcon" onClick={() => setCopyText(text)} onKeyDown={() => setCopyText(text)} role="button" tabIndex={0}/>
         </div>
      ))}
      <CopyToClipElement text={copyText} />
    




<Toaster position="bottom-right" />


</div>
    )}

export default Email