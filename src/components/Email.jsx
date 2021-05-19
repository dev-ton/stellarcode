import React, { useRef, useState, useEffect }  from "react"
import { FaEnvelope } from "react-icons/fa"
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
          <div onClick={notify} onKeyDown={notify} role="button" tabIndex={-1} key={index}>
     <FaEnvelope className="float-left mr-2 relative top-3" style={{fill:'#ffc857'}}/><span className="relative form-label-align cursor-pointer text-stellar underline hover:no-underline" onClick={() => setCopyText(text)} onKeyDown={() => setCopyText(text)} role="button" tabIndex={0}>
         {text}</span>
         </div>
      ))}
      <CopyToClipElement text={copyText} />
    




<Toaster position="bottom-right" />


</div>
    )}

export default Email