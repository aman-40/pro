import React from 'react'
import "./Loading.css"
import { useState, useEffect } from "react";



const Loading = () => {
    
    const commands = [
        " ",
        "ping 127.0.0.1:0007",
        "Checking connection security...",
        "Connection secured...",
        "exiting...",
        " "
    ];

    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentCommand, setCurrentCommand] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < commands.length) {
            if (charIndex < commands[lineIndex].length) {
                setTimeout(() => {
                    setCurrentCommand((prev) => prev + commands[lineIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, 150); // Typing speed
            } else {
                setTimeout(() => {
                    setDisplayedLines((prev) => [...prev, commands[lineIndex]]);
                    setCurrentCommand("");
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 800);
            }
        }
    }, [charIndex, lineIndex, commands]);

    const [time, setTime] = useState(5); // Timer starts from 5 seconds

  useEffect(() => {
    if (time < 0) return; // Stop when time goes below 0

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [time]);
    return (
        <div id='loading'>
            <div className="terminal">
                {displayedLines.map((cmd, index) => (
                    <pre key={index}>
                        <span className="username">root@server:~# </span>
                        {cmd}
                    </pre>
                ))}
                {lineIndex < commands.length && (
                    <pre>
                        <span className="username">root@server:~# </span>
                        {currentCommand}
                        <span className="cursor">█</span>
                    </pre>
                )}
            </div>
            <div id="bCircle">{time >= 0 ? time : ""}</div>
            <div id='sCircle'>
                <div id="circle1"></div>
                <div id="circle2"></div>
                <div id="circle3"></div>
                <div id="circle4"></div>
                <div id="circle5"></div>
                <div id="circle6"></div>
                <div id="circle7"></div>
                <div id="circle8"></div>
            </div>
            <div id='bar'>
                <div id="bar1" className='barr'></div>
                <div id="bar2" className='barr'></div>
                <div id="bar3" className='barr'></div>
                <div id="bar4" className='barr'></div>
            </div>
        </div>
    )
}

export default Loading