import { createSignal, createEffect } from 'solid-js'
import './App.css'

function App() {
  // 記事一覧を取得する
  const [articles, setArticles] = createSignal([{}]);

  createEffect(() => {
    const url = `https://cms.codecodeweb.com/wp-json/wp/v2/posts?_embed&per_page=10`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            setArticles(responseData);
        })
        .catch((error)=>{
            //fetch自体が失敗したとき
            console.log("取得に失敗しました。" + "error: " + error);
        })
  });
  
  // 記事一覧を表示する
  return (
    <div>
      {articles().map((article) => (
        <article key={article.id}>
          <h1>{article.title?.rendered}</h1>
        </article>
      ))}
    </div>
  );
}

export default App