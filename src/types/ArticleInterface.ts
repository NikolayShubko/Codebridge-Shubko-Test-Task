export interface ArticleInterface {
  id: number;
  title: string;
  authors: authors[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches?: [];
  event?: [];
}
type authors = {
  name: string;
  socials: string | null;
};
