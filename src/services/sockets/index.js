import io from "socket.io-client";

const socket = io(process.env.REACT_APP_BASE_URL); // Replace with your server URL

export const useSocket = () => socket;

export default socket;
