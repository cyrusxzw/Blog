import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import BlockContent from '@sanity/block-content-to-react';
import styles from '../../styles/Post.module.css';
import client from '../../lib/sanity.js';
import Menu from '../../components/menu.js';

const Post = ({ title, body, image }) => {

    const imageProps = useNextSanityImage(
        client,
        image
    );

    return (
        <div className='lg:container lg:mx-auto'>
            <Menu />
            <div className='md:text-2xl mt-8 mb-8 text-center tracking-wide font-semibold font-sans'>{title}</div>
            {image && <Img {...imageProps} alt='main img' className={styles.postImg} />}
            <BlockContent blocks={body} projectId='ypoob9sl' dataset='production' imageOptions={{
                with: 500,
                height: 500
            }} />
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;
    if (!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]`);
    const url = `https://ypoob9sl.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then(data => data.json());
    const post = res.result[0];

    if (!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                image: post.mainImage ? post.mainImage : ""
            }
        }
    }
}

export default Post;