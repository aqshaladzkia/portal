import React, { useEffect, useState } from "react";
import DeviceCard from "../../Components/Device Card/DeviceCard";
import Hero from "../../Assets/Image/hero.svg";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import devicesData from "../../Components/Device/dataDevice.json";
import blueIcon from "../../Assets/Icons/blue-icon.png";
import redIcon from "../../Assets/Icons/red-icon.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [commands, setCommands] = useState([])
  const { listening, resetTranscript, transcript } = useSpeechRecognition();
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(commands)

  }, [commands])
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData.map((device) => ({
      ...device,
      isMuted: false,
      isDeviceOn: false,
    })))
  }, [])
  useEffect(() => {
    if (devices) {
      devicesData.forEach(e => {
        setCommands(prevCommands => [
          ...prevCommands,
          {
            command: "Hidupkan " + e.name,
            callback: () => {
              setMessage(`${e.name} Hidup`);
              toggleDevice(e.id, true);
            },
          },
          {
            command: "Matikan " + e.name,
            callback: () => {
              setMessage(`${e.name} Mati`);
              toggleDevice(e.id, false);
            },
          }
        ]);
      });
    }
  }, [devices])
  const toggleMute = (id, state) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, isMuted: state ? id : false } : device
      )
    );
    setShowPopup(id);

    // Menyembunyikan popup setelah 2 detik
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const toggleDevice = (id, state) => {
    setDevices(devices.map((device) =>
      device.id === id
        ? { ...device, isDeviceOn: state ? id : false }
        : device
    ))
    setShowPopup(id);
    // Menyembunyikan popup setelah 2 detik
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const { browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: false, language: "id" });
  useEffect(() => {
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser tidak mendukung pengenalan suara.</span>;
  } else {
    return (
      <div className="mt-5 mx-4 " style={{ paddingTop: "60px" }}>
        {/* Tambahkan kotak untuk menampilkan transkrip suara pengguna */}
       

        {/* Settingan untuk gambar di samping */}
        <div className="row">

          {/* Settingan untuk grid item */}
          <div className="col">
            <DeviceCard
              devices={devices}
              setDevices={setDevices}
              toggleDevice={toggleDevice}
              toggleMute={toggleMute}
              showPopup={showPopup}
            />
            <button
              className={`position-absolute btn circle end-0 bottom-0 m-4 rounded-pill border border-2 fw-bold`}
              onClick={() =>
                listening ? SpeechRecognition.stopListening() : startListening()
              }
            >
              {listening ? <span className="me-2 ps-2">Silahkan Bicara</span> : <span className="me-2 ps-2">Tekan Untuk Bicara</span>}
              {listening ? <img src={redIcon} alt="Device Icon"
                width="50"
                height="50"
              /> : <img src={blueIcon} alt="Device Icon"
                width="50"
                height="50"
              />}
            </button>
          </div>
        </div>
        <div className="p-3 border" style={{width:'45%',marginTop:'70px'}}>
          {transcript || "Mulai berbicara..."}
        </div>
      </div>
    );
  }
}