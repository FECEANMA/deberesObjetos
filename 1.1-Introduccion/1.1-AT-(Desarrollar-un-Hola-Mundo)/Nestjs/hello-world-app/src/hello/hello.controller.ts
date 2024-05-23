import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
    @Get()
    getHelloPeople(): string {
      return 'Hello World, people!';
    }
  }