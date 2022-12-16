import { useEffect } from 'react';

export function useShopifyBuyButton(shopifyId) {
	useEffect(() => {
		if (typeof window == 'undefined' || !shopifyId || shopifyId.length == 0) return;
		let scriptURL = 'https://checkout.getbarcart.com/barcart.js';

		var randomValue = new Date().getTime();
		scriptURL = scriptURL + '?ver=' + randomValue;

		/* eslint-disable-next-line */
		if (typeof window != "undefined" && window.bcInit) {
			BarcartBuyInit();
		} else {
			loadScript();
		}

		function loadScript() {
			var script = document.createElement('script');
			script.async = true;
			script.src = scriptURL;
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
			script.onload = function () {
				BarcartBuyInit();
			};
		}

		function BarcartBuyInit() {
			var product_id = shopifyId;
			var barcart_product_id = '15891';
			var component_id = `barcart-iframe--${shopifyId}`;
			var component = document.createElement('iframe');
			component.id = component_id;

			var productWrapperId = shopifyId;
			document.getElementById(productWrapperId).append(component);

			window.bcInit.bcCreateComponent('product', {
				id: product_id,
				barcart_product_id: barcart_product_id,
				button_id: 3580,
				fb_pixel_id: 'None',
				gaId: 'None',
				node: document.getElementById(component_id),
				moneyFormat: '100.00',
				currency: '$',
				options: {
					product: {
						styles: {
							product: {
								'@media (min-width: 601px)': {
									'max-width': 'calc(25% - 20px)',
									'margin-left': '20px',
									'margin-bottom': '50px',
								},
							},
							button: {
								align: 'left',
								'font-family': "freight-text-pro, serif",
								'font-weight': 'normal',
								'font-size': '18px',
								'padding-top': '17px',
								'padding-bottom': '17px',
								color: '#000',
								'background-color': '#C09C4C',
								':hover': {
									color: '#C09C4C',
									'background-color': '#000',
								},
								':focus': {
									'background-color': '#000000',
								},
								':before': {
									'content': '""',
									'display': 'block',
									'width': '100px',
									'aspect-ratio': '1',
									'background-color': '#000000',
								},
								'border-radius': '18px',
								'border-width': '0px',
								'border-style': 'solid',
								'border-color': 'transparent',
								'padding-left': '18px',
								'padding-right': '18px',
								width: 'auto',
							},
							quantityInput: {
								'font-size': '18px',
								display: 'none',
								'padding-top': '17px',
								'padding-bottom': '17px',
								'background-color': '',
							},
						},
						text: {
							button: 'Purchase Online',
						},
						googleFonts: ["'Gill Sans',  sans-serif"],
					},

					productSet: {
						styles: {
							products: {
								'@media (min-width: 601px)': {
									'margin-left': '-20px',
								},
							},
						},
					},

					modalProduct: {
						contents: {
							img: false,
							imgWithCarousel: true,
							button: false,
							buttonWithQuantity: true,
						},

						styles: {
							product: {
								'@media (min-width: 601px)': {
									'max-width': '100%',
									'margin-left': '0px',
									'margin-bottom': '0px',
								},
							},
							button: {
								'font-family': "'Gill Sans',  sans-serif",
								'font-weight': 'normal',
								'font-size': '18px',
								'padding-top': '16px',
								'padding-bottom': '16px',
								color: '#ffffff',
								':hover': {
									color: '#ffffff',
								},
								'border-radius': '0px',
								'padding-left': '44px',
								'padding-right': '44px',
							},
							quantityInput: {
								'font-size': '18px',
								'padding-top': '16px',
								'padding-bottom': '16px',
							},
						},
						googleFonts: ["'Gill Sans',  sans-serif"],
						text: {
							button: 'Purchase Online',
						},
					},
					cart: {
						styles: {
							button: {
								'font-family': "'Gill Sans',  sans-serif",
								'font-weight': 'normal',
								'font-size': '18px',
								'padding-top': '16px',
								'padding-bottom': '16px',
								color: '#ffffff',
								':hover': {
									color: '#ffffff',
								},
								'border-radius': '0px',
							},
						},
						text: {
							total: 'Subtotal',
							button: 'Checkout',
						},
						googleFonts: ["'Gill Sans',  sans-serif"],
					},
					toggle: {
						styles: {
							toggle: {
								'font-family': "'Gill Sans',  sans-serif",
								'font-weight': 'normal',
							},
							count: {
								'font-size': '18',
								color: '#ffffff',
								':hover': {
									color: '#ffffff',
								},
							},
							iconPath: {
								fill: '#ffffff',
							},
						},
						googleFonts: ["'Gill Sans',  sans-serif"],
					},
					checkoutText: {
						text1: '',
						text2:
							'All sales processed and fulfilled by unaffiliated, third-party retailers on the Barcart network. The checkout functionality is provided solely for the convenience of our consumers.',
					},
				},
			});
		}
	}, []);
}
