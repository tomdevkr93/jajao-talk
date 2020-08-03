import io from 'socket.io-client';

const socket = io.connect(process.env.NEXT_PUBLIC_BASE_SOCKET_URL as string);
export default socket;
