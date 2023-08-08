import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, interval, map } from 'rxjs';

interface MessageEvent{
  data: string | object; 
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('event')
  sendEvent() : Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: number) => ({
        data : 'hello' + num,
      }))
    ); 
  }

}
