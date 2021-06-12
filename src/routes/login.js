import server from '@config/server';
import {login, logout} from 'controller/auth'

server.post('/login', login)
server.post('/logout', logout)
