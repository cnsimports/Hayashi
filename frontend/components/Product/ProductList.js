import { Product } from './Product';

export const ProductList = ({ products }) =>
	products.data.map(
		({ attributes: { ProductImage, ProductName, ProductBlurb, ProductDescription, product_notes } }) => (
			<Product
				key={ProductName}
				name={ProductName}
				blurb={ProductBlurb}
				desc={ProductDescription}
				notes={product_notes}
				image={
					ProductImage.data
						? ProductImage.data.attributes
						: { alternativeText: '', url: 'https://source.unsplash.com/random/?whisky' }
				}
			/>
		)
	);
