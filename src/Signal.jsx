import { createSignal } from 'solid-js'

// 記事一覧を取得する
export const [articles, setArticles] = createSignal([{}]);