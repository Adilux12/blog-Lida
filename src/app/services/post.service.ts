import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[];
  constructor() {
    this.arrPosts = []
  }


  getAll() {
    return this.arrPosts;
  }

  create(pPost: any) {
    this.arrPosts.push(pPost);
  }

  getByCategory(category: string) {
    return this.arrPosts.filter(post => post.categoria === category)
  }


}
