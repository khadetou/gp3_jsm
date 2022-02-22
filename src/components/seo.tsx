import Head from 'next/head';
import { FC } from 'react';

interface SeoProps{
    description?: string;
    author?: string;
    title?: string;
    meta?: any[];
    lang?: string;
}



const SEO:FC<SeoProps> = ({description, author, title, meta}) => {
    const metaData = [
        {
            name: 'description',
            content: description
        },
        {
            property: 'og:title',
            content: title
        },
        {
            property: "og:type",
            content: "website"
        },
        {
            name: "twitter:card",
            content: "summary"
        },
        {
            name: "twitter:creator",
            content: author
        },
        {
            name: "twitter:description",
            content: description
        }
    ].concat(meta!);
  return (
   <Head>
       <title>{title}</title>
       {metaData.map(({name, content}, i)=>(
           <meta key={i} name={name} content={content}/>
       ))}
   </Head>
  )
}

SEO.defaultProps ={
    description: "Gp3 jsm website landing page",
    author:"KD",
    title: "Gp3 Jsm",
    meta: [],
    lang: "en"
}

export default SEO;