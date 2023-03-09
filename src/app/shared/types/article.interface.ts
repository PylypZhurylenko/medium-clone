import { PopularTagType } from './popularTag.type';
import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: PopularTagType[];
  favorited: boolean;
  favoritesCount: number;
  author: ProfileInterface;
  description: string;
}
