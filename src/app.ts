import server from './server';
import 'reflect-metadata';

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}! ❤`)
})