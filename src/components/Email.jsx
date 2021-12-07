import React, { useRef, useState, useEffect }  from "react"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { motion } from "framer-motion";





const CopyToClipElement = ({ text }) => {
  
  const myRef = useRef(null);
  const [data, setData] = useState(text);
  useEffect(() => setData(text), [text]);

  useEffect(() => {
    if (myRef.current && data) {
      myRef.current.select();
      document.execCommand('copy');
      setData(null);
    }
  }, [data]);

  return <div>{data && <textarea className="opacity-0" ref={myRef} defaultValue={data}></textarea>}</div>;
};


const Email = () => {

    const envelope = {
      visible: {
        opacity: 1,

        scale: 1,
        display: "block",
        transition: {
          ease: "easeInOut"
        }
      },
      hidden: {
        opacity: 0,
        scale: 0,
        transitionEnd: { 
          display: "none"
      }
      }
    }

    const checkbox = {
      visible: {
        opacity: 1,
        display: "block",
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.25
        }
      },
      hidden: {
        opacity: 0,
        transitionEnd: { 
          display: "none"
      }
      }
    }

    const clickedBox = {
      visible: {
        opacity: [1, 0],
        x: 100,
        y: [null, -120],
        display: "block",
        transition: {
          duration: 2.5,
          ease: "easeInOut",
          delay: 0.25
        }
      },
      hidden: {
        opacity: 0,
        x: 100,
        y: -36,
        transitionEnd: { 
          display: "none"
      }
      }
    }

    const path = {
      visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 0.45,
          ease: "easeInOut",
          delay: 0.5
        }
      },
      hidden: {
        opacity: 0,
        pathLength: 0
      }
    }



    const [copyText, setCopyText] = useState("");
    const [isClicked, setClick] = useState(false);
    const text = ["tony@stellarcode.io"];
   

    useEffect(() => {
      if (copyText !== "") {
        setClick(true)
        setTimeout(() => setCopyText(""), 10000)
      } else {
        setClick(false)
      }
    }, [copyText, isClicked])

    return (

      <div>

  <div className="mb-4 relative">
    <div className="w-10 h-10 mx-auto overflow-hidden">
     <motion.button className="mx-auto w-10 h-10" onClick={() => setCopyText(text)} onKeyPress={() => setCopyText(text)} tabIndex={0} title="Copy to clipboard" variants={envelope} initial="hidden" animate={copyText ? "hidden" : "visible"}>
     <FaEnvelope className="w-10 h-10 mb-4" style={{fill:'#ffc857'}} role="button" tabIndex={0}/>
     </motion.button>

    
    <motion.svg 
    className="mx-auto w-full overflow-visible"
    viewBox="0 0 78 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={checkbox}
    initial="false"
    animate={isClicked ? "visible" : "hidden"}
    >
      <motion.path
      stroke="#8FFF57"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M25.094 33.094L38.7578 50.594L60.594 14.594"
      variants={path}
      initial="hidden"
      animate={isClicked ? "visible" : "hidden"}
      />

      <motion.path
      stroke="#8FFF57"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M67.4069 35.3059C68.0949 41.3338 66.8751 47.4256 63.9191 52.7238C60.9632 58.022 56.42 62.2597 50.9293 64.8403C45.4385 67.421 39.2766 68.2145 33.3111 67.1093C27.3456 66.0041 21.877 63.0558 17.6751 58.6794C13.4732 54.303 10.7497 48.719 9.888 42.7136C9.02628 36.7081 10.0697 30.5836 12.8715 25.2023C15.6733 19.8209 20.0922 15.4539 25.5062 12.7158C30.9202 9.97775 37.0566 9.00663 43.0515 9.93917"
      variants={checkbox}
      initial="hidden"
      animate={isClicked ? "visible" : "hidden"}
      />
    </motion.svg>
    </div>
    <motion.div
    className="absolute bg-space-darker px-2 py-1 rounded-md border-2 border-space-dark z-10"
    variants={clickedBox}
    initial="hidden"
    animate={isClicked ? "visible" : "hidden"}
    >
    <span className="text-stellar">Copied!</span>
    </motion.div>
    </div>

    <a href={`mailto:${text}?subject=Hello&body=Your%20message`} className="relative form-label-align text-stellar fade_underlink">{text}</a>
      
      <CopyToClipElement text={copyText} />
    






</div>
    )}

export default Email