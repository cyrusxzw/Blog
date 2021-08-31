/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from "../components/menu";
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';


export default function Home({ posts }) {

  const reversePosts = posts.reverse();
  const router = useRouter();
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'ypoob9sl',
      dataset: 'production'
    });
    if (reversePosts.length) {
      setRecentPosts(
        reversePosts.map(post => {
          return {
            ...post,
            mainImage: imgBuilder.image(post.mainImage).width(500).height(250)
          }
        })
      )
    }
  }, [])

  const convertDate = (date) => {
    const subDate = date.split('T');
    const tempDate = new Date(subDate[0]);
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth() + 1;
    const day = tempDate.getDate();
    const convertDate = `${day}/${month}/${year}`;
    return convertDate;
  }

  return (
    <div className='lg:container lg:mx-auto'>
      <Menu />
      <div>
        <h1 className='p-8 text-center antialiased text-indigo-900 text-xl md:text-4xl tracking-wider'>WELCOME TO MY BLOG</h1>
        <hr />
        <div className='block md:flex'>
          <div className='w-full sm:w-8/12'>
            <h3 className='px-4 sm:px-2 py-6'>Recent Posts:</h3>
            <hr />
            <ul className='list-disc p-6'>
              {recentPosts.length ? recentPosts.map((p, index) =>
                <li className='py-2' key={index} style={{ cursor: 'pointer' }} onClick={() => router.push(`/post/${p.slug.current}`)}>
                  <h5 className='text-gray-500 tracking-wide'>{`${convertDate(p.publishedAt)}`}  <span className='text-xs'>{'--'}</span><span className='text-blue-900'> {`${p.title}`}</span></h5>
                </li>
              ) : <p>No Posts</p>}
            </ul>
          </div>
          <div className='w-1/12 hidden sm:block'>
          </div>
          <div className='w-full sm:w-3/12'>
            <div className='m-6 border border-gray-400 rounded-lg'>
              <h5 className='p-6'>title</h5>
              <hr />
              <ul className='px-6 py-4'>
                <li>1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async context => {
  const query = encodeURIComponent('*[_type == "post"]');
  const url = `https://ypoob9sl.api.sanity.io/v1/data/query/production?query=${query}`;

  const res = await fetch(url).then(data => data.json());
  if (!res.result || !res.result.length) {
    return {
      props: {
        posts: []
      }
    }
  } else {
    return {
      props: {
        posts: res.result
      }
    }
  }
}
