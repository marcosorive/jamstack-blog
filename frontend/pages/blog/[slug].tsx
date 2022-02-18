import type { NextPage } from 'next'
import Head from 'next/head'
import Markdownit from 'markdown-it'
import { GetStaticProps } from 'next';
import { Article } from "../../Entities";
import { fetchAPI } from "../../utils/api";
import { API_PATHS } from "../../constants/urls";
import styles from '../../styles/Home.module.css'

const BlogArticlePage: NextPage = (props: any) => {
    const article: Article = props.article;
    const mdit = new Markdownit({
        html: true
    });
    const body = mdit.render(article.content);
    return (
        <div className={styles.container}>
            <Head>
                <title>My blog - {article.title}</title>
                <meta name="description" content={article.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {article.title}
                </h1>

                <div className={styles.description} dangerouslySetInnerHTML={{ __html: body }}>

                </div>
            </main>

            <footer className={styles.footer}>
                <p>Boilerplate by <a href="https://marcos.orive.me"> Marcos Orive</a>. Done with Next.js and Strapi.</p>
            </footer>
        </div>
    )
}
export const getStaticProps: GetStaticProps = async (context) => {
    const possibleSlugs = context.params?.slug || "";
    const slug: string = Array.isArray(possibleSlugs) ? possibleSlugs[0] : possibleSlugs;
    const path = API_PATHS.articleWithSlug.replace("$slug", slug)
    const article: Article = (await fetchAPI<Array<Article>>(path))[0];
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const articles = await fetchAPI<Array<Article>>(API_PATHS.articles);
    const paths = articles.map((article: Article) => ({ params: { slug: article.slug } }))
    const finalResult = {
        paths: paths,
        fallback: false
    }
    return finalResult;
};

export default BlogArticlePage
