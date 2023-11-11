import React, { useEffect } from "react";
import mqtt from "mqtt";

export default function MqttClient(){
  const options = {
    protocol: "wss",
    hostname: " xace626b.ala.us-east-1.emqxsl.com",
    clientId: "mqttx_c7210f57" + Math.random().toString(16).substr(2, 8),
    port: 8884,
    path: "/mqtt",
    username: "aqshal",
    password: "Aqshal4321",
    protocolId: "MQTT",
    protocolVersion: 5,
    keepalive: 60,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    clean: true,
    will: {
      topic: "home/status",
      payload: "offline",
      qos: 0,
      retain: false,
    },
  };

  useEffect(() => {
    const client = mqtt.connect(options);

    client.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    client.on("disconnect", (packet) => {
      console.log("Disconnected from MQTT broker");
      client.reconnect();
    });

    client.on("error", (error) => {
      console.error("Error:", error);
    });

    client.on("message", (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
    });

    client.on("close", () => {
      console.log("Connection to MQTT broker closed");
    });

    client.on("offline", () => {
      console.log("Connection to MQTT broker lost");
    });

    client.on("reconnect", () => {
      console.log("Attempting to reconnect to MQTT broker");
    });

    client.on("end", () => {
      console.log("Connection to MQTT broker ended");
    });
  }, []);

  return <div></div>;
};

