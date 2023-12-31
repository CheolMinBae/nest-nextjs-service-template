import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './server/app.service';
import { map, toArray } from 'rxjs';
import { ParamsInterceptor } from './server/params.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(ParamsInterceptor)
  home() {
    return this.appService.getBlogPosts().pipe(
      toArray(),
      map((blogPosts) => ({ blogPosts })),
    );
  }

  @Get(':id')
  @Render('[id]')
  @UseInterceptors(ParamsInterceptor)
  public blogPost() {
    return {};
  }

  @Get('/api/blog-posts')
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get('/api/blog-posts/:id')
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getBlogPost(id);
  }
}
