import server from '@config/server';
import { getUser, getUserById, deleteUser, createUser, updateUser } from '@controller/usersController';

server.get('/user', getUser);
server.get('/user/:id', getUserById);
server.post('/user', createUser);
server.del('/user/:id', deleteUser);
server.put('/user/:id', updateUser);
// server.head('/user/:id', send);
