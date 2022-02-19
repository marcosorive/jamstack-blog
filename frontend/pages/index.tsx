import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import { GetStaticProps } from 'next';
import { Article } from "../Entities";
import { fetchAPI } from "../utils/api";
import { API_PATHS } from "../constants/urls";
import styles from '../styles/Home.module.css'

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog - { }</title>
        <meta name="description" content="A super cool blog! By Marcos Orive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my blog!
        </h1>

        <p className={styles.description}>
          Check my posts here
        </p>

        <div className={styles.grid}>
          {
            props.articles.map((article: Article) => {
              return <Link href={`/blog/${article.slug}`} key={article.slug}>
                <a className={styles.card}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </a>
              </Link>
            })
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Boilerplate by <a href="https://marcos.orive.me"> Marcos Orive</a>. Done with Next.js and Strapi.</p>
      </footer>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const articles: Array<Article> = await fetchAPI<Array<Article>>(API_PATHS.articles);
  return {
    props: {
      articles
    }
  }
}

export default Home
