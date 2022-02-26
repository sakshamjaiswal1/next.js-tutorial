import React from 'react'
import Head from 'next/head'
const Meta = ({title,keywords,description}) => {
  return (
   <Head>
 <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>

   </Head>
  )

}

Meta.defaultProps={
    title:"Webdev News",
    keywords:'Web development, programming',
    description:'get the latest news in webdev'


}

export default Meta