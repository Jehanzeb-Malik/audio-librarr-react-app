import openSocket from 'socket.io-client';
import config from '../config/config';

export const socket = openSocket(`${config.BASE_URL}:${config.SOCKET_PORT}`);