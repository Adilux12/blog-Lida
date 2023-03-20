import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: Post[];
  constructor() {
    this.arrPosts = [
      {
        titulo: 'Hamburguesa Delicioso',
        texto: 'Receta hamburguesa',
        autor: 'Lida',
        imagen: 'https://cdn.pixabay.com/photo/2017/02/09/14/01/kebab-2052339_960_720.jpg',
        fecha: new Date(22 / 3 / 2022),
        categoria: "Comida"
      },
      {
        titulo: 'Mi primera web',
        texto: 'Enseña paso a paso la creación de web',
        autor: 'Lida',
        imagen: 'https://www.uplers.com/wp-content/uploads/2022/05/AngularJs-Frameworks-891x505.jpg',
        fecha: new Date(22 / 3 / 2022),
        categoria: "Informatica"
      }
    ]
  }


  getAll() {
    return this.arrPosts;
  }

  create(pPost: Post) {
    this.arrPosts.push(pPost);
  }

  getByCategory(category: string) {
    return this.arrPosts.filter(post => post.categoria === category)
  }


}
