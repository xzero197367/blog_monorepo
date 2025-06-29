import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field()
  content: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => Int)
  authorId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => User)
  author: User;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];
}
