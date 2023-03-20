import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {
  posts: Post[];
  constructor(
    private router: Router,
    private postService: PostService) {
    this.posts = [];
  }

  ngOnInit() {
    this.posts = this.postService.getAll();
  }

  onChange($event: any) {
    console.log($event.target.value)
    if ($event.target.value === 'todos') {
      this.posts = this.postService.getAll();
    } else {
      this.posts = this.postService.getByCategory($event.target.value)
    }
  }
}
