import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';

const BLOG_POSTS = [
  { title: 'Lorem Ipsum', id: 1 },
  { title: 'Dolore Sit', id: 2 },
  { title: 'Ame', id: 3 },
];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBlogPosts() {
    return from(BLOG_POSTS);
  }
}
