import { Article } from "./article";

export interface APIResponse {
    average_polarity: number,
    top_articles: Article[],
    bottom_articles: Article[]
}
