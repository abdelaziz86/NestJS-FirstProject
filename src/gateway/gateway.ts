import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import {OnModuleInit} from "@nestjs/common"; 

@WebSocketGateway({ cors: { origin: 'http://localhost:3001' } })
export class MyGateway implements OnModuleInit{

    @WebSocketServer()
    server: Server; 

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log('connected'); 
            console.log(socket.id);
        });
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {
        console.log(body); 
        this.server.emit('newMessage', body);
    }
}