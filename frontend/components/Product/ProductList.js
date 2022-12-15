import { Product } from './Product';

export const ProductList = ({ products }) =>
	products.data.map(
		({
			attributes: {
				ProductImage,
				ProductPhoto,
				ProductName,
				ProductBlurb,
				ProductDescription,
				product_notes,
				ShopifyID,
			},
		}) => (
			<Product
				key={ProductName}
				name={ProductName}
				blurb={ProductBlurb}
				desc={ProductDescription}
				notes={product_notes}
				image={
					ProductPhoto.data
						? ProductPhoto.data.attributes
						: ProductImage.data
						? ProductImage.data.attributes
						: { alternativeText: '', url: 'https://source.unsplash.com/random/?whisky' }
				}
				shopifyId={ShopifyID}
			/>
		)
	);
