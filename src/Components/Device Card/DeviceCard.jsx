import React, { useState } from "react";
import { BsVolumeMute, BsVolumeUp } from "react-icons/bs"; // Import Bootstrap icons
import lampIcon from "../../Assets/Icons/lamp.png";
import fanIcon from "../../Assets/Icons/fan.png";
import moskillerIcon from "../../Assets/Icons/moskiller.png";
import cctvIcon from "../../Assets/Icons/cctv.png";
import "../Device/DeviceCard.css";

const DeviceCard = ({devices,setDevices}) => {
 
  const [showPopup, setShowPopup] = useState(false);
  
  const toggleMute = (id) => {
    setDevices(devices.map(device => device.id === id ? { ...device, isMuted: !device.isMuted ? id : false } : device));
    setShowPopup(id);
    // Menyembunyikan popup setelah 2 detik
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const toggleDevice = (id) => {
    setDevices(devices.map(device => device.id === id ? { ...device, isDeviceOn: !device.isDeviceOn ? id : false } : device));
    setShowPopup(id);

    // Menyembunyikan popup setelah 2 detik
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="d-flex flex-wrap">
      {devices.slice(0, 4).map(device => (
        <div className="col-md-5 card-device" key={device.id}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex w-100 mb-3">
                  <div className="w-100">
                    <img src={device.type === 'Fan'? fanIcon: device.type === 'Lamp' ? lampIcon : device.type === 'Moskiller' ? moskillerIcon: device.type === 'CCTV'?cctvIcon : ""} alt="Device Icon" width="50" height="50" />
                  </div>
                  <div className="form-check form-switch flex-shrink-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="switch"
                      checked={device.isDeviceOn}
                      onChange={() => toggleDevice(device.id)}
                    />
                  </div>
                </div>
                <h5 className="card-title display-7">{device.name}</h5>
                <p className="card-text small mt-0">{device.type}</p>
                <div className="d-flex justify-content-between w-100 mb-2">
                  <button
                    className={`btn btn-${device.isMuted ? "success" : "danger"}`}
                    onClick={() => toggleMute(device.id)}
                  >
                    {device.isMuted === device.id ? (
                      <>
                        <BsVolumeUp /> Unmute
                      </>
                    ) : (
                      <>
                        <BsVolumeMute /> Mute
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showPopup && (
        <div className="popup">
          <p>
            Device {devices.find(device  => showPopup === device.isMuted) ? "Unmuted" : "Muted"} <strong style={{fontWeight:"bold"}}>[Status: {devices.find(device => showPopup === device.isDeviceOn) ? "ON" : "OFF"}] </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default DeviceCard;