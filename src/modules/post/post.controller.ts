import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  // fetch posts
  @Get()
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }

  // get post by id
  @Get('/:id')
  async getSinglePost(@Param('id') id: string) {
    return await this.postService.getSinglePost(id);
  }

  // create post
  @Post('/')
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  // update post
  @Put('/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postService.updatePost(id, updatePostDto);
  }

  // delete post
  @Delete('/:id')
  async deletePost(@Param('id') id: string) {
    return await this.postService.deletePost(id);
  }
}
