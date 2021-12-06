import { GetStaticProps } from 'next'
import Head from "next/head";
import Image from "next/image";

import homeImg from '../../public/images/avatar.svg'
import SubscribeButton from "../componentes/SubscribeButton";
import { formatPrice } from '../helpers/functions';

import { stripe } from '../services/stripe'

import styles from './Home.module.scss';

interface HomeProps {
	product: {
		priceId: string;
		amount: number;
	}
}

export default function Home({ product }: HomeProps) {
	return (
		<>
			<Head>
				<title>Home IG-News</title>
			</Head>

			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<span>👏 Hey, Welcome</span>
					<h1>News about the <span>React</span> world.</h1>

					<p>
						get access to all the publications <br />
						<span>for {formatPrice(product.amount / 100)} month</span>
					</p>
					<SubscribeButton priceId={product.priceId} />
				</section>

				<Image src={homeImg} alt="avatar home" />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve('price_1Jyh2IEfdm57IRW2ZXR2aoxv')

	const product = {
		priceId: price.id,
		amount: price.unit_amount,
	}

	return {
		props: {
			product
		},
		revalidate: 60 * 60 * 24, // 24 hours 
	}
}