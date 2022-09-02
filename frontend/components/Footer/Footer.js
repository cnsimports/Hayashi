import Link from 'next/link';

import { Logo } from '@svg/Logo';
import { CopySocial } from './CopySocial';

import styles from './Footer.module.css';

export const Footer = () => (
	<footer className={`${styles.footer} footer`}>
		<div className="container">
			<ul className={styles['foot-nav']}>
				<li>
					<Link href="/whisky">
						<a>Rykyu Whisky</a>
					</Link>
				</li>
				<li>
					<Link href="/craft">
						<a>Our Craft</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>

			<div className={styles.subscribe}>
				<>
					{/*Zoho Campaigns Web-Optin Form's Header Code Ends Here*/}
					{/*Zoho Campaigns Web-Optin Form Starts Here*/}
					<div
						id="sf3z5fb2122fba895524fb95f5eb7bc1e05e8d1492518627420aa5e5dd518c37d62a"
						data-type="signupform"
						style={{ opacity: 1 }}
					>
						<div id="customForm">
							<div className="quick_form_8_css" name="SIGNUP_BODY">
								<div>
									<label htmlFor="EMBED_FORM_EMAIL_LABEL" id="SIGNUP_HEADING">
										Hear more from Hayashi
									</label>
									<div style={{ position: 'relative' }}>
										<div
											id="Zc_SignupSuccess"
											style={{
												display: 'none',
												position: 'absolute',
												marginLeft: '4%',
												width: '90%',
												backgroundColor: 'white',
												padding: 3,
												border: '3px solid rgb(194, 225, 154)',
												marginTop: 10,
												marginBottom: 10,
												wordBreak: 'break-all',
											}}
										>
											<table width="100%" cellPadding={0} cellSpacing={0} border={0}>
												<tbody>
													<tr>
														<td width="10%">
															<img
																className="successicon"
																src="https://hqepw-zglp.maillist-manage.com/images/challangeiconenable.jpg"
																align="absmiddle"
															/>
														</td>
														<td>
															<span
																id="signupSuccessMsg"
																style={{
																	color: 'rgb(73, 140, 132)',
																	fontFamily: 'sans-serif',
																	fontSize: 14,
																	wordBreak: 'break-word',
																}}
															>
																&nbsp;&nbsp;Thank you for Signing Up
															</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<form
										method="POST"
										id="zcampaignOptinForm"
										style={{ margin: 0, width: '100%' }}
										action="https://hqepw-zglp.maillist-manage.com/weboptin.zc"
										target="_zcSignup"
										className={styles.mailchimp}
									>
										<div
											style={{
												backgroundColor: 'rgb(255, 235, 232)',
												padding: 10,
												color: 'rgb(210, 0, 0)',
												fontSize: 11,
												margin: '20px 10px 0px',
												border: '1px solid rgb(255, 217, 211)',
												opacity: 1,
												display: 'none',
											}}
											id="errorMsgDiv"
										>
											Please correct the marked field(s) below.
										</div>
										<div className="SIGNUP_FLD">
											<input
												type="email"
												placeholder="Enter e-mail"
												changeitem="SIGNUP_FORM_FIELD"
												name="CONTACT_EMAIL"
												id="EMBED_FORM_EMAIL_LABEL"
											/>

											<button type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin">
												&rarr;
											</button>
										</div>
										<input type="hidden" id="fieldBorder" defaultValue="" />
										<input type="hidden" id="submitType" name="submitType" defaultValue="optinCustomView" />
										<input type="hidden" id="emailReportId" name="emailReportId" defaultValue="" />
										<input type="hidden" id="formType" name="formType" defaultValue="QuickForm" />
										<input type="hidden" name="zx" id="cmpZuid" defaultValue="12e1ad3ac" />
										<input type="hidden" name="zcvers" defaultValue={3.0} />
										<input type="hidden" name="oldListIds" id="allCheckedListIds" defaultValue="" />
										<input type="hidden" id="mode" name="mode" defaultValue="OptinCreateView" />
										<input type="hidden" id="zcld" name="zcld" defaultValue="1cfb060ce16235e5" />
										<input type="hidden" id="zctd" name="zctd" defaultValue="1cfb060ce15fe411" />
										<input type="hidden" id="document_domain" defaultValue="" />
										<input type="hidden" id="zc_Url" defaultValue="hqepw-zglp.maillist-manage.com" />
										<input type="hidden" id="new_optin_response_in" defaultValue={0} />
										<input type="hidden" id="duplicate_optin_response_in" defaultValue={0} />
										<input type="hidden" name="zc_trackCode" id="zc_trackCode" defaultValue="ZCFORMVIEW" />
										<input
											type="hidden"
											id="zc_formIx"
											name="zc_formIx"
											defaultValue="3z5fb2122fba895524fb95f5eb7bc1e05e8d1492518627420aa5e5dd518c37d62a"
										/>
										<input type="hidden" id="viewFrom" defaultValue="URL_ACTION" />
										<span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">
											1,true,6,Contact Email,2
										</span>
									</form>
								</div>
							</div>
						</div>
						<img
							src="https://hqepw-zglp.maillist-manage.com/images/spacer.gif"
							id="refImage"
							style={{ display: 'none' }}
						/>
					</div>
					<input type="hidden" id="signupFormType" defaultValue="QuickForm_Horizontal" />
					<div
						id="zcOptinOverLay"
						style={{
							display: 'none',
							textAlign: 'center',
							backgroundColor: 'rgb(0, 0, 0)',
							opacity: '0.5',
							zIndex: 100,
							position: 'fixed',
							width: '100%',
							top: 0,
							left: 0,
							height: 988,
						}}
					/>
					<div
						id="zcOptinSuccessPopup"
						style={{
							display: 'none',
							zIndex: 9999,
							width: 800,
							height: '40%',
							top: 84,
							position: 'fixed',
							left: '26%',
							backgroundColor: '#FFFFFF',
							borderColor: '#E6E6E6',
							borderStyle: 'solid',
							borderWidth: 1,
							boxShadow: '0 1px 10px #424242',
							padding: 35,
						}}
					>
						<span
							style={{
								position: 'absolute',
								top: '-16px',
								right: '-14px',
								zIndex: 99999,
								cursor: 'pointer',
							}}
							id="closeSuccess"
						>
							<img src="https://hqepw-zglp.maillist-manage.com/images/videoclose.png" />
						</span>
						<div id="zcOptinSuccessPanel" />
					</div>
					{/*Zoho Campaigns Web-Optin Form Ends Here*/}
				</>
			</div>

			<Logo width={85} height={15} />

			<div className={styles['copy-social']}>
				<CopySocial />
			</div>
		</div>
	</footer>
);
