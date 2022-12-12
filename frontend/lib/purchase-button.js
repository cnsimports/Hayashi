import { useEffect } from 'react';

export function useShopifyBuyButton(shopifyId) {
	useEffect(() => {
		if (typeof window == 'undefined' || !shopifyId || shopifyId.length == 0) return;
		var checkoutText1 =
			'Orders cannot be fulfilled to Alabama, Arkansas, Michigan, Mississippi, Oklahoma, South Dakota, Tennessee, Utah or Vermont.';
		var checkoutText2withLinks =
			"All sales processed and fulfilled by unaffiliated, third-party retailers on the Barcart network. <a href='https://www.getbarcart.com/terms/' target='_blank' class='link-dark' style='text-decoration: underline; color: #000000;'>Learn More</a>";
		(function () {
			// Get window location URL params
			var regex = /[?&]([^=#]+)=([^&#]*)/g,
				url = window.location.href,
				url_params = {},
				match;
			// Loop through the parameters
			while ((match = regex.exec(url))) {
				url_params[match[1]] = match[2];
			}

			// Build string to be appended as parameter for shopify cart get URL
			var theURLParamsForShopify = Object.keys(url_params)
				.map(function (k) {
					return encodeURIComponent(k) + '=' + encodeURIComponent(url_params[k]);
				})
				.join('&');

			var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
			if (window.ShopifyBuy) {
				if (window.ShopifyBuy.UI) {
					ShopifyBuyInit();
				} else {
					loadScript();
				}
			} else {
				loadScript();
			}

			function loadScript() {
				var script = document.createElement('script');
				script.async = true;
				script.src = scriptURL;
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
				script.onload = ShopifyBuyInit;
			}

			function ShopifyBuyInit() {
				let domain = 'mashandgrape.myshopify.com';

				var client = ShopifyBuy.buildClient({
					domain: domain,
					storefrontAccessToken: '4600909fb946cda37d4daf4615b5b762',
				});
				ShopifyBuy.UI.onReady(client).then(function (ui) {
					ui.createComponent('product', {
						id: shopifyId,
						node: document.getElementById(shopifyId),
						moneyFormat: '%24%7B%7Bamount%7D%7D',
						options: {
							product: {
								styles: {
									product: {
										'@media (min-width: 601px)': {
											'max-width': 'calc(25% - 20px)',
											'margin-bottom': '50px',
										},
									},
									title: {
										'font-weight': 'normal',
									},
									button: {
										color: '#000',
										'font-family': "'freight-sans-pro',  sans-serif",
										'font-weight': '500',
										'font-size': '16px',
										'font-style': 'italic',
										':hover': {
											'background-color': '#5f93f7',
											color: '#ffffff',
										},
										'border-radius': '0px',
										'padding-left': '20px',
										'padding-right': '20px',
									},
									quantityInput: {
										'font-size': '18px',
										'padding-top': '17px',
										'padding-bottom': '17px',
									},
								},
								DOMEvents: {
									'click .shopify-buy__btn-wrapper .shopify-buy__btn': function (evt, target) {},
								},
								contents: {
									img: false,
									title: false,
									price: false,
									button: true,
									buttonWithQuantity: false,
								},
								text: {
									button: 'Add to cart',
								},
								googleFonts: ['Lato'],
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
							option: {},
							cart: {
								styles: {
									button: {
										color: '#ffffff',
										'font-family': "'Gill Sans',  sans-serif",
										'font-weight': 'normal',
										'font-size': '18px',
										'border-color': '#5f93f7',
										'border-width': '1px',
										'border-style': 'solid',
										'padding-top': '17px',
										'padding-bottom': '17px',
										'padding-left': '20px',
										'padding-right': '20px',
										':hover': {
											'background-color': '#5f93f7',
											color: '#ffffff',
										},
										'background-color': '#5f93f7',
										':focus': {
											'background-color': '#5f93f7',
										},
										'border-radius': '0px',
									},
									title: {
										color: '#000000',
									},
									header: {
										color: '#000000',
									},
									lineItems: {
										color: '#000000',
									},
									subtotalText: {
										color: '#000000',
									},
									total: {
										flex: '0 0 auto',
										'font-family': 'Lato, sans-serif',
										'text-transform': 'none',
										'font-size': '0.85rem',
									},
									subtotal: {
										color: '#000000',
										flex: '0 0 auto',
										width: '50%',
										'font-family': 'Lato, sans-serif',
										'font-size': '0.85rem',
										'text-align': 'right',
									},
									notice: {
										color: '#000000',
										'text-align': 'center',
										'margin-bottom': '1rem',
										'font-family': 'Lato, sans-serif',
									},
									currency: {
										color: '#000000',
									},
									close: {
										color: '#000000',
										'padding-left': '7px',
										'border-color': '#00000000',
										'border-radius': '1.5rem',
										'font-size': '1.5rem',
										border: '1px solid #00000000',
										':hover': {
											color: '#000000',
										},
									},
									empty: {
										color: '#000000',
									},
									noteTextArea: {
										display: 'block',
										width: '100%',
										padding: '0.375rem 0.75rem',
										'font-size': '1rem',
										'font-weight': '400',
										'line-height': '1.5',
										color: '212529',
										'background-color': '#fff',
										'background-clip': 'padding-box',
										border: '1px solid #ced4da',
										'-webkit-appearance': 'none',
										'-moz-appearance': 'none',
										appearance: 'none',
										'border-radius': '0.375rem',
										transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
									},
									discountText: {
										color: '#000000',
									},
									discountIcon: {
										fill: '#000000',
									},
									discountAmount: {
										color: '#000000',
									},
									footer: {
										flex: '0 0 auto',
										'font-family': 'Lato, sans-serif',
										'text-transform': 'none',
										'font-size': '0.875rem',
									},
									noteDescription: {
										'font-family': 'Lato, sans-serif',
										'font-size': '0.875rem',
									},
								},
								text: {
									total: 'Subtotal',
									notice: '',
									button: 'Continue to Checkout',
									noteDescription: 'Add a gift note',
								},
								contents: {
									note: true,
								},
								popup: false,
								events: {
									afterInit: (cart) => {
										cart.onCheckout = () => {
											const checkoutUrl = cart.model.webUrl + '&' + theURLParamsForShopify;
											// we dynamically change the checkout function.
											cart.checkout.open(checkoutUrl);
										};
									},
								},
							},
							toggle: {
								styles: {
									toggle: {
										color: '#ffffff',
										'font-family': "'Gill Sans',  sans-serif",
										'background-color': '#5f93f7',
										':hover': {
											'background-color': '#5f93f7',
											color: '#ffffff',
										},
										':focus': {
											'background-color': '#5f93f7',
										},
									},
									count: {
										'font-size': '18px',
									},
									iconPath: {
										fill: '#ffffff',
									},
									googleFonts: ["'Gill Sans',  sans-serif"],
								},
							},
							lineItem: {
								styles: {
									lineItem: {
										height: '100px',
									},
									image: {
										'border-radius': '50%',
										border: '1px solid #dee2e6',
										'vertical-align': 'middle',
										'box-sizing': 'border-box',
										height: '64px',
									},
									variantTitle: {
										color: '#000000',
									},
									title: {
										color: '#000000',
									},
									price: {
										color: '#000000',
									},
									fullPrice: {
										color: '#000000',
									},
									discount: {
										color: '#000000',
									},
									discountIcon: {
										fill: '#000000',
									},
									quantity: {
										color: '#000000',
										height: '20px',
									},
									quantityIncrement: {
										color: '#000000',
										'border-color': '#000000',
									},
									quantityDecrement: {
										color: '#000000',
										'border-color': '#000000',
									},
									quantityInput: {
										color: '#000000',
										'border-color': '#000000',
									},
								},
							},
						},
					});
				});
			}
		})();
		/*]]>*/
		setTimeout(() => {
			setInterval(function () {
				var frameObj = document.getElementsByName('frame-cart')[0];
				var cartnotice = frameObj.contentWindow.document.getElementsByClassName('shopify-buy__cart__notice')[0];
				if (typeof cartnotice !== 'undefined') {
					var frameContent = cartnotice.innerHTML;
					var exist = frameObj.contentWindow.document.getElementsByClassName('cart-bold-text')[0];

					if (typeof exist === 'undefined') {
						var ModifyDiv = "<div class='cart-bold-text'>";

						if (checkoutText1 != '') {
							ModifyDiv = ModifyDiv + "<div class='cart-bold-text1'>" + checkoutText1 + '</div><br><br>';
						}

						if (checkoutText2withLinks != '') {
							ModifyDiv = ModifyDiv + "<div class='cart-bold-text2'>" + checkoutText2withLinks + '</div><br>';
						}

						ModifyDiv = ModifyDiv + frameContent;

						ModifyDiv = ModifyDiv + '</div>';

						frameObj.contentWindow.document.getElementsByClassName('shopify-buy__cart__notice')[0].innerHTML =
							ModifyDiv;
					}
				}
			}, 100);
		}, 1000);
	}, []);
}
