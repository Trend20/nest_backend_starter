import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './interfaces/post.inteface';
import { CreatePostDto } from './dto/create-post.dto';
import { v4 as uuid } from 'uuid';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  private posts: Post[] = [];

  // add post
  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const post: Post = {
      ...createPostDto,
      id: uuid() as string,
    };
    this.posts.push(post);
    return post;
  }

  // get all posts
  async getAllPosts(): Promise<Post[]> {
    return this.posts;
  }

  // get a single post by id
  async getSinglePost(id: string): Promise<Post> {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException(`Post with this id: ${id} is not found`);
    }
    return post;
  }

  // update post by id
  async updatePost(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    const updatedPost = Object.assign(post, updatePostDto);
    const postIndex = this.posts.findIndex((p) => p.id === post.id);
    this.posts[postIndex] = updatedPost;
    return updatedPost;
  }

  // delete posts
  async deletePost(id: string): Promise<void> {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex < 0) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    this.posts.splice(postIndex, 1);
  }
}
