import { useParams } from "react-router";
import useGetArticle from "../hooks/useGetArticle";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";
type Param = {
  articleId: string;
};
const Article = () => {
  const { articleId } = useParams<Param>();

  const { article, isLoading } = useGetArticle(articleId);

  return <ArticleInfo article={article ?? null} isLoading={isLoading} />;
};

export default Article;
