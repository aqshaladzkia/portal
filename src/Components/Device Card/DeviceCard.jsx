import React, { useState } from "react";
import { BsVolumeMute, BsVolumeUp } from "react-icons/bs"; // Import Bootstrap icons
import lampIcon from "../../Assets/Icons/lamp.png";
import fanIcon from "../../Assets/Icons/fan.png";
import moskillerIcon from "../../Assets/Icons/moskiller.png";
import cctvIcon from "../../Assets/Icons/cctv.png";
import plugIcon from "../../Assets/Icons/plug.png";
import humidifierIcon from "../../Assets/Icons/humidifier.png";
import vacumIcon from "../../Assets/Icons/vacum.png";
import "../Device/DeviceCard.css";

const DeviceCard = ({ devices, toggleDevice, toggleMute, showPopup }) => {
  return (
    <div className="row flex-wrap">
      {devices &&
        devices.slice(0, 8).map((device) => (
          <div className="col-md-4 card-device" key={device.id}>
            <div className="card mt-4">
              <div className="card-body">
                <div className="d-flex flex-column align-items-start">
                  <div className="d-flex w-100 mb-3">
                    <div className="w-100">
                      <img
                        src={
                          device.type === "Fan"
                            ? fanIcon
                            : device.type === "Lamp"
                            ? lampIcon
                            : device.type === "Moskiller"
                            ? moskillerIcon
                            : device.type === "CCTV"
                            ? cctvIcon
                            : device.type == "Plug"
                            ? plugIcon
                            : device.type == "Humidifier"
                            ? humidifierIcon
                            : device.type == "Vacum"
                            ? vacumIcon
                            : ""
                        }
                        alt="Device Icon"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="form-check form-switch flex-shrink-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="switch"
                        checked={device.isDeviceOn}
                        onChange={() => {
                          toggleDevice(device.id, !device.isDeviceOn);
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="card-title display-7">{device.name}</h5>
                  <p className="card-text small mt-0">{device.type}</p>
                  <div className="d-flex justify-content-between w-100 mb-2">
                    <button
                      className={`btn btn-${
                        device.isMuted ? "success" : "danger"
                      }`}
                      onClick={() => {
                        toggleMute(device.id, !device.isMuted);
                      }}
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
            Device{" "}
            {devices.find((device) => showPopup === device.isMuted)
              ? "Unmuted"
              : "Muted"}{" "}
            <strong style={{ fontWeight: "bold" }}>
              [Status:{" "}
              {devices.find((device) => showPopup === device.isDeviceOn)
                ? "ON"
                : "OFF"}
              ]{" "}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default DeviceCard;
