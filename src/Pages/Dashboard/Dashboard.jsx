import React, { useEffect, useState } from "react";
import DeviceCard from "../../Components/Device Card/DeviceCard";
import Hero from "../../Assets/Image/hero.svg";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import devicesData from "../../Components/Device/dataDevice.json";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Dashboard() {
  const {
    listening,
    resetTranscript,
  } = useSpeechRecognition();
  const [message, setMessage] = useState('')

  const [devices, setDevices] = useState(
    devicesData.map((device) => ({
      ...device,
      isMuted: false,
      isDeviceOn: false,
    }))
  );
  // const commands = [
  //   {
  //     command: 'I would like to order *',
  //     callback: (food) => setMessage(`Your order is for: ${food}`)
  //   },
  //   {
  //     command: 'The weather is :condition today',
  //     callback: (condition) => setMessage(`Today, the weather is ${condition}`)
  //   },
  //   {
  //     command: 'My top sports are * and *',
  //     callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
  //   },
  //   {
  //     command: 'Pass the salt (please)',
  //     callback: () => setMessage('My pleasure')
  //   },
  //   {
  //     command: ['Hello', 'Hi'],
  //     callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
  //     matchInterim: true
  //   },
  //   {
  //     command: 'Beijing',
  //     callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
  //     // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
  //     isFuzzyMatch: true,
  //     fuzzyMatchingThreshold: 0.2
  //   },
  //   {
  //     command: ['eat', 'sleep', 'leave'],
  //     callback: (command) => setMessage(`Best matching command: ${command}`),
  //     isFuzzyMatch: true,
  //     fuzzyMatchingThreshold: 0.2,
  //     bestMatchOnly: true
  //   },
  //   {
  //     command: 'clear',
  //     callback: ({ resetTranscript }) => resetTranscript()
  //   }
  // ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const startListening = () => SpeechRecognition.startListening({ continuous: true});
  useEffect(()=>{
    console.log(message)
  },[message])
  

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  } else {  
    return (
      <div className="mt-5 mx-4 " style={{ paddingTop: "60px" }}>

{/* Settingan untuk gambar di samping */}
        <div className="row">
          <div className="col-md-4 position-relative me-3">
            <div className="mx-5 mt-2 position-absolute">
              <p style={{ fontSize: "25px", fontWeight: "500" }}>Hello!</p>
              <h3 style={{ fontSize: "49px", fontWeight: "700" }}>User</h3>
              <p
                className="mt-3"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                Monitoring device mu sekarang dengan Dashboard kami!
              </p>
            </div>
            <img src={Hero} className=""  style={{height:550,width:400}}/>
          </div>
{/* Settingan untuk grid item */}
          <div className="col">
            <div className="d-flex justify-content-end p-4" style={{marginRight:30,marginBottom:10}}>
            <button type="button" className="btn btn-primary">
              <Link to="#">Add New Device</Link>
            </button>
            </div>
            <DeviceCard devices={devices} setDevices={setDevices} />
            <button
              className={`position-absolute btn ${
                listening ? "btn-success" : "btn-danger"
              } rounded-circle end-0 bottom-0 m-4`}
              onClick={() =>
                listening
                  ? SpeechRecognition.stopListening()
                  : startListening()
              }
            >
              {listening ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
