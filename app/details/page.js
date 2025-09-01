'use client'
import Layout from "@/components/layout/Layout"
import { sliderLayout3 } from "@/utils/swiperOptions"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function BlogDetails2() {

	return (
		<>

			<Layout mainContentCls="main-content page-blog-details-2">
				<div className="page-title page-details-2">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<ul className="breadcrumbs">
									<li><Link href="/">Home</Link></li>
									<li><Link href="/blog-grid">News & Blog</Link></li>
									<li>Details</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="image-wrap">
						<img className="lazyload" data-src="/images/page-title/page-title-blog-details.jpg" src="/images/page-title/page-title-blog-details.jpg" alt="healingy" />
					</div>
				</div>

				{/* .section-blog-post */}
				<section className="section-blog-post blog-details-2">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="content-inner">
									<div className="heading-blog">
										<span className="tag text-2">Wellness</span>
										<h3 className="title">Mindfulness For Better Mental Health: Simple Practices for Daily
											Peace
										</h3>
										<ul className="meta">
											<li className="meta-item">
												<i className="icon-CalendarBlank" />
												<p>October 16, 2024</p>
											</li>
											<li className="meta-item">
												<i className="icon-User" />
												<p> by <Link href="/#"> Dr. Emily Stevens</Link></p>
											</li>
										</ul>
									</div>
									<div className="wrap-paragrahp">
										<p className="text-1 lh-30 fw-4 mb-13">Lorem ipsum dolor sit amet, consectetur
											adipiscing elit. Morbi interdum sed mauris eu imperdiet. Donec congue orci nec
											mi luctus, ut faucibus mauris scelerisque. Donec orci lorem, volutpat a mauris
											nec, sodales imperdiet urna. Sed dictum enim libero. Interdum et malesuada fames
											ac ante ipsum primis in faucibus. Maecenas ligula libero, pharetra non dolor et,
											tempor bibendum magna. Mauris a efficitur nisi.
										</p>
										<p className="text-1 lh-30 fw-4">Praesent interdum lacus ac est viverra hendrerit.
											Aliquam dapibus, ante vitae mattis gravida, purus sapien interdum magna,
											convallis volutpat est turpis pulvinar dui. Aenean eu turpis est. In hac
											habitasse platea dictumst. Integer at lobortis metus. Proin molestie eget massa
											vel gravida. Suspendisse nec ante vel
										</p>
									</div>
									<div className="group-image">
										<div className="image-wrap">
											<img className="lazyload" data-src="/images/blog/blog-details-3.jpg" src="/images/blog/blog-details-3.jpg" alt="healingy" />
										</div>
										<div className="image-wrap">
											<img className="lazyload" data-src="/images/blog/blog-details-2.jpg" src="/images/blog/blog-details-2.jpg" alt="healingy" />
										</div>
									</div>
									<h4 className="mb-16">How To Deal With Employee Quitting</h4>
									<p className="text-1 lh-30 fw-4 mb-16">Donec eu dui condimentum, laoreet nulla vitae,
										venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit
										amet urna fringilla tincidunt. Vestibulum ullamcorper nec lacus ac molestie.
										Curabitur congue neque sed nisi auctor consequat. Pellentesque rhoncus tortor vitae
										ipsum sagittis tempor.</p>
									<p className="text-1 lh-30 fw-4 mb-16">Vestibulum et pharetra arcu. In porta lobortis
										turpis. Ut faucibus fermentum posuere. Suspendisse potenti. Mauris a metus sed est
										semper vestibulum. Mauris tortor sem, consectetur vehicula vulputate id, suscipit
										vel leo.</p>
									<ul className="content-list">
										<li>15+ years of industry experience designing, building, and supporting large-scale
											distributed systems in production, with recent experience in building large
											scale cloud services.</li>
										<li>Deep knowledge and experience with different security areas like identity and
											access management, cryptography, network security, etc.
										</li>
										<li>Experience with database systems and database internals, such as query engines
											and optimizers are a big plus.
										</li>
										<li>Strong fundamentals in computer science skills.
										</li>
										<li>Expert-level development skills in Java or C++.
										</li>
										<li>Knowledge of industry standard security concepts and protocols like SAML, SCIM,
											OAuth, RBAC, cryptography is a plus.
										</li>
										<li>Advanced degree in Computer Science or related degree.
										</li>
										<li>Ph.D. in the related field is a plus
										</li>
									</ul>
									<p className="text-1 lh-30 fw-4">
										Curabitur aliquam ac arcu in mattis. Phasellus pulvinar erat at aliquam hendrerit.
										Nam ut velit dolor. Sed fermentum tempus odio, ac faucibus elit scelerisque
										consequat. Fusce ac malesuada elit. Nam at aliquam libero, quis lacinia erat. In hac
										habitasse platea dictumst. Suspendisse id dolor orci. Vivamus at aliquam tellus.
										Vestibulum a augue ac purus suscipit varius non eget lectus. Nam lobortis mauris
										luctus tristique feugiat. Nulla eleifend risus sit amet nisi feugiat, id eleifend
										sapien malesuada. Phasellus venenatis convallis mattis. Duis vel tempor eros. Mauris
										semper sollicitudin neque, imperdiet ultrices urna maximus id.
									</p>
								</div>
								<div className="wrap-tag">
									<div className="tags">
										<p>Tags:</p>
										<Link href="/#">Wellness</Link>,
										<Link href="/#">Therapy</Link>
									</div>
									<div className="wrap-social ">
										<p>Share this post:</p>
										<ul className="tf-social style-1">
											<li><Link href="/#">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_11072_5627)">
														<path d="M6.25 11.25L8.75 8.75L11.25 11.25L13.75 8.75" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M6.24382 16.4932C7.81923 17.405 9.67248 17.7127 11.458 17.359C13.2436 17.0053 14.8396 16.0143 15.9484 14.5708C17.0573 13.1273 17.6033 11.3298 17.4847 9.51341C17.3662 7.69704 16.5911 5.98577 15.304 4.69866C14.0169 3.41156 12.3056 2.63646 10.4892 2.51789C8.67284 2.39932 6.87533 2.94537 5.43182 4.05422C3.98831 5.16308 2.99733 6.75906 2.64363 8.54461C2.28993 10.3302 2.59766 12.1834 3.50944 13.7588L2.5321 16.6768C2.49538 16.7869 2.49005 16.9051 2.51671 17.0181C2.54337 17.131 2.60097 17.2344 2.68306 17.3165C2.76514 17.3985 2.86847 17.4561 2.98145 17.4828C3.09443 17.5095 3.2126 17.5041 3.32273 17.4674L6.24382 16.4932Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_11072_5627">
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											</li>
											<li><Link href="/#">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_11072_5632)">
														<path d="M3.75 3.125H7.5L16.25 16.875H12.5L3.75 3.125Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M8.89687 11.2129L3.75 16.8746" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M16.2484 3.125L11.1016 8.78672" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_11072_5632">
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</Link></li>
											<li><Link href="/#">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_11072_5638)">
														<path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M13.75 2.5H6.25C4.17893 2.5 2.5 4.17893 2.5 6.25V13.75C2.5 15.8211 4.17893 17.5 6.25 17.5H13.75C15.8211 17.5 17.5 15.8211 17.5 13.75V6.25C17.5 4.17893 15.8211 2.5 13.75 2.5Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M14.0625 6.71875C14.494 6.71875 14.8438 6.36897 14.8438 5.9375C14.8438 5.50603 14.494 5.15625 14.0625 5.15625C13.631 5.15625 13.2812 5.50603 13.2812 5.9375C13.2812 6.36897 13.631 6.71875 14.0625 6.71875Z" fill="#3C210E" />
													</g>
													<defs>
														<clipPath id="clip0_11072_5638">
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</Link></li>
											<li><Link href="/#">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_11072_5644)">
														<path d="M7.5 11.875C7.5 12.9102 8.61953 13.75 10 13.75C11.3805 13.75 12.5 12.9102 12.5 11.875C12.5 9.375 7.63906 10.3125 7.63906 8.125C7.63906 7.08984 8.61953 6.25 10 6.25C11.0352 6.25 11.8461 6.71875 12.1875 7.39531" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M16.7224 11.4599C17.2774 12.1817 17.5508 13.0806 17.4917 13.9891C17.4325 14.8976 17.045 15.7536 16.4012 16.3973C15.7575 17.0411 14.9015 17.4286 13.993 17.4877C13.0845 17.5469 12.1856 17.2734 11.4638 16.7185C10.3391 16.9617 9.17125 16.9188 8.06731 16.5939C6.96337 16.269 5.95856 15.6723 5.14484 14.8586C4.33113 14.0449 3.7345 13.0401 3.40957 11.9362C3.08465 10.8322 3.04179 9.66441 3.28494 8.53963C2.73003 7.81789 2.45662 6.91893 2.51573 6.01045C2.57483 5.10197 2.96242 4.24601 3.60617 3.60226C4.24992 2.95851 5.10587 2.57093 6.01436 2.51182C6.92284 2.45272 7.8218 2.72612 8.54353 3.28103C9.66832 3.03789 10.8361 3.08074 11.9401 3.40567C13.044 3.7306 14.0488 4.32722 14.8625 5.14094C15.6763 5.95465 16.2729 6.95947 16.5978 8.06341C16.9227 9.16735 16.9656 10.3352 16.7224 11.4599Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_11072_5644">
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</Link></li>
											<li><Link href="/#">
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_11072_5649)">
														<path d="M6.24939 10.5366L13.301 16.7186C13.3822 16.7903 13.4806 16.8396 13.5867 16.8618C13.6927 16.8839 13.8027 16.8781 13.9058 16.845C14.0089 16.8118 14.1016 16.7524 14.1749 16.6726C14.2481 16.5928 14.2994 16.4953 14.3236 16.3897L17.4994 2.59521C17.5025 2.58138 17.5018 2.56696 17.4973 2.55351C17.4928 2.54006 17.4848 2.52807 17.474 2.51884C17.4633 2.50961 17.4502 2.50348 17.4362 2.5011C17.4223 2.49873 17.4079 2.5002 17.3947 2.50537L1.56189 8.70146C1.4636 8.73929 1.38023 8.80798 1.3243 8.89722C1.26837 8.98646 1.2429 9.09143 1.2517 9.19638C1.26051 9.30133 1.30312 9.4006 1.37313 9.47927C1.44315 9.55794 1.5368 9.61178 1.64001 9.63271L6.24939 10.5366Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M6.25 10.5375L17.4539 2.50781" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M9.71641 13.577L7.325 16.0582C7.23859 16.1479 7.12737 16.2097 7.00561 16.2357C6.88384 16.2617 6.75708 16.2507 6.64157 16.2042C6.52607 16.1577 6.42709 16.0778 6.35732 15.9747C6.28755 15.8715 6.25018 15.7499 6.25 15.6254V10.5371" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_11072_5649">
															<rect width={20} height={20} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</Link></li>
										</ul>
									</div>
								</div>
								<div className="next-blog">
									<div className="previous">
										<Link href="/#">Previous</Link>
										<h6 className="title"><Link href="/#">Self-Care for Emotional Well-being: Key Steps to
												Feeling Balanced</Link>
										</h6>
									</div>
									<div className="next">
										<Link href="/#">Next</Link>
										<h6 className="title"><Link href="/#">How Therapy Helps: Pathways to Long-Term Healing</Link>
										</h6>
									</div>
								</div>
								<div className="comment-list-wrap">
									<h5 className="title ">Conversation (3 comments)</h5>
									<ul className="comment-list">
										<li>
											<div className="comment-blog">
												<div className="author">
													<div className="avatar">
														<img src="/images/avatar/avatar-1.jpg" alt="healingy" />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="name text-3 fw-6"> <Link href="/#">Guy Hawkins</Link></li>
															<li className="rating">
																<i className="icon-favorite_major" />
																<i className="icon-favorite_major" />
																<i className="icon-favorite_major" />
																<i className="icon-favorite_major" />
																<i className="icon-favorite_major" />
															</li>
														</ul>
														<p className="time text-2">
															1 days ago
														</p>
													</div>
												</div>
												<p className="comments">
													Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu
													quam turpis risus amet turpis. Facilisis elementum tincidunt
													pellentesque sed rutrum enim.
												</p>
												<Link href="/#" className="comment-reply">
													<div className="icon"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="#3C210E" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
													</div>Reply
												</Link>
											</div>
											<ul className="children">
												<li>
													<div className="comment-blog">
														<div className="author">
															<div className="avatar">
																<img src="/images/avatar/avatar-2.jpg" alt="healingy" />
															</div>
															<div className="content">
																<ul className="meta">
																	<li className="name text-3 fw-6"><Link href="/#">Tony Nguyen</Link>
																	</li>
																	<li className="rating">
																		<i className="icon-favorite_major" />
																		<i className="icon-favorite_major" />
																		<i className="icon-favorite_major" />
																		<i className="icon-favorite_major" />
																		<i className="icon-favorite_major" />
																	</li>
																</ul>
																<p className="time text-2">
																	2 days ago
																</p>
															</div>
														</div>
														<p className="comments">
															Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra
															arcu
															quam turpis risus amet turpis. Facilisis elementum tincidunt
															pellentesque sed rutrum enim.
														</p>
														<Link href="/#" className="comment-reply">
															<div className="icon"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="#3C210E" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
															</div>Reply
														</Link>
													</div>
												</li>
											</ul>
									</div>
									<div className="box-send ">
										<h5 className="title fw-7">Leave A comment</h5>
										<form className="form-add-review">
											<fieldset className="message">
												<textarea id="message" className="tf-input" name="message" rows={4} placeholder="What do you think?" tabIndex={4} aria-required="true" required />
											</fieldset>
											<div className="cols">
												<fieldset className="name">
													<input type="text" className="tf-input " placeholder="Your Name*" tabIndex={2} aria-required="true" required />
												</fieldset>
												<fieldset className="email">
													<input type="email" className="tf-input " placeholder="Your Email*" tabIndex={2} aria-required="true" required />
												</fieldset>
											</div>
											<button className="tf-btn  style-default btn-color-secondary pd-40" type="submit">
												<span>
													Submit
													Comment</span>
												</button>
										</form>
									</div>
								</div>
							</div>
							<div className="wrap-share ">
								<p>Share:</p>
								<ul className="tf-social style-1">
									<li><Link href="/#">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_11072_5627)">
												<path d="M6.25 11.25L8.75 8.75L11.25 11.25L13.75 8.75" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.24382 16.4932C7.81923 17.405 9.67248 17.7127 11.458 17.359C13.2436 17.0053 14.8396 16.0143 15.9484 14.5708C17.0573 13.1273 17.6033 11.3298 17.4847 9.51341C17.3662 7.69704 16.5911 5.98577 15.304 4.69866C14.0169 3.41156 12.3056 2.63646 10.4892 2.51789C8.67284 2.39932 6.87533 2.94537 5.43182 4.05422C3.98831 5.16308 2.99733 6.75906 2.64363 8.54461C2.28993 10.3302 2.59766 12.1834 3.50944 13.7588L2.5321 16.6768C2.49538 16.7869 2.49005 16.9051 2.51671 17.0181C2.54337 17.131 2.60097 17.2344 2.68306 17.3165C2.76514 17.3985 2.86847 17.4561 2.98145 17.4828C3.09443 17.5095 3.2126 17.5041 3.32273 17.4674L6.24382 16.4932Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</g>
												<defs>
													<clipPath id="clip0_11072_5627">
														<rect width={20} height={20} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</Link>
										</li>
										<li><Link href="/#">
											<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_11072_5632)">
													<path d="M3.75 3.125H7.5L16.25 16.875H12.5L3.75 3.125Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M8.89687 11.2129L3.75 16.8746" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M16.2484 3.125L11.1016 8.78672" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</g>
												<defs>
													<clipPath id="clip0_11072_5632">
														<rect width={20} height={20} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</Link></li>
										<li><Link href="/#">
											<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_11072_5638)">
													<path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M13.75 2.5H6.25C4.17893 2.5 2.5 4.17893 2.5 6.25V13.75C2.5 15.8211 4.17893 17.5 6.25 17.5H13.75C15.8211 17.5 17.5 15.8211 17.5 13.75V6.25C17.5 4.17893 15.8211 2.5 13.75 2.5Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M14.0625 6.71875C14.494 6.71875 14.8438 6.36897 14.8438 5.9375C14.8438 5.50603 14.494 5.15625 14.0625 5.15625C13.631 5.15625 13.2812 5.50603 13.2812 5.9375C13.2812 6.36897 13.631 6.71875 14.0625 6.71875Z" fill="#3C210E" />
												</g>
												<defs>
													<clipPath id="clip0_11072_5638">
														<rect width={20} height={20} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</Link></li>
										<li><Link href="/#">
											<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_11072_5644)">
													<path d="M7.5 11.875C7.5 12.9102 8.61953 13.75 10 13.75C11.3805 13.75 12.5 12.9102 12.5 11.875C12.5 9.375 7.63906 10.3125 7.63906 8.125C7.63906 7.08984 8.61953 6.25 10 6.25C11.0352 6.25 11.8461 6.71875 12.1875 7.39531" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M16.7224 11.4599C17.2774 12.1817 17.5508 13.0806 17.4917 13.9891C17.4325 14.8976 17.045 15.7536 16.4012 16.3973C15.7575 17.0411 14.9015 17.4286 13.993 17.4877C13.0845 17.5469 12.1856 17.2734 11.4638 16.7185C10.3391 16.9617 9.17125 16.9188 8.06731 16.5939C6.96337 16.269 5.95856 15.6723 5.14484 14.8586C4.33113 14.0449 3.7345 13.0401 3.40957 11.9362C3.08465 10.8322 3.04179 9.66441 3.28494 8.53963C2.73003 7.81789 2.45662 6.91893 2.51573 6.01045C2.57483 5.10197 2.96242 4.24601 3.60617 3.60226C4.24992 2.95851 5.10587 2.57093 6.01436 2.51182C6.92284 2.45272 7.8218 2.72612 8.54353 3.28103C9.66832 3.03789 10.8361 3.08074 11.9401 3.40567C13.044 3.7306 14.0488 4.32722 14.8625 5.14094C15.6763 5.95465 16.2729 6.95947 16.5978 8.06341C16.9227 9.16735 16.9656 10.3352 16.7224 11.4599Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</g>
												<defs>
													<clipPath id="clip0_11072_5644">
														<rect width={20} height={20} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</Link></li>
										<li><Link href="/#">
											<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_11072_5649)">
													<path d="M6.24939 10.5366L13.301 16.7186C13.3822 16.7903 13.4806 16.8396 13.5867 16.8618C13.6927 16.8839 13.8027 16.8781 13.9058 16.845C14.0089 16.8118 14.1016 16.7524 14.1749 16.6726C14.2481 16.5928 14.2994 16.4953 14.3236 16.3897L17.4994 2.59521C17.5025 2.58138 17.5018 2.56696 17.4973 2.55351C17.4928 2.54006 17.4848 2.52807 17.474 2.51884C17.4633 2.50961 17.4502 2.50348 17.4362 2.5011C17.4223 2.49873 17.4079 2.5002 17.3947 2.50537L1.56189 8.70146C1.4636 8.73929 1.38023 8.80798 1.3243 8.89722C1.26837 8.98646 1.2429 9.09143 1.2517 9.19638C1.26051 9.30133 1.30312 9.4006 1.37313 9.47927C1.44315 9.55794 1.5368 9.61178 1.64001 9.63271L6.24939 10.5366Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M6.25 10.5375L17.4539 2.50781" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M9.71641 13.577L7.325 16.0582C7.23859 16.1479 7.12737 16.2097 7.00561 16.2357C6.88384 16.2617 6.75708 16.2507 6.64157 16.2042C6.52607 16.1577 6.42709 16.0778 6.35732 15.9747C6.28755 15.8715 6.25018 15.7499 6.25 15.6254V10.5371" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</g>
												<defs>
													<clipPath id="clip0_11072_5649">
														<rect width={20} height={20} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</Link></li>
									</ul>
								</div>
							</div>
							{/* .section-blog-news */}
							<section className="section-blog-news blog-details-2">
								<div className="tf-container">
									<div className="row">
										<div className="col-12">
											<div className="heading-blog ">
													<h3 className="title ">Related Articles</h3>
													<p className="text-1 lh-30 fw-4">Your go-to source for mental health insights, tools, and
														advice.</p>
												</div>
											<Swiper {...sliderLayout3} className="swiper-container slider-layout-3">
												<div className="swiper-wrapper">
													<SwiperSlide>
														<div className="article-blog-item  hover-img ">
															<div className="image-wrap">
																<Link href="/blog-details">
																	<img className="lazyload" data-src="/images/blog/blog-1.jpg" src="/images/blog/blog-1.jpg" alt="healingy" />
																</Link>
																<div className="date-time">
																	<div className="content">
																		<p className="entry-day ">12</p>
																		<p className="entry-month fw-book">SEP</p>
																	</div>
																</div>
															</div>
															<div className="content">
																<p className="sub">Therapy</p>
																<h5 className="title"><Link href="/blog-details">Mindfulness For Better
																	Mental
																	Health: Simple Practices for Daily Peace
																</Link>
																</h5>
																<p>Learn how mindfulness techniques can reduce stress and improve your
																	mental
																	well-being daily.</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="article-blog-item  hover-img ">
															<div className="image-wrap">
																<Link href="/blog-details">
																	<img className="lazyload" data-src="/images/blog/blog-3.jpg" src="/images/blog/blog-3.jpg" alt="healingy" />
																</Link>
																<div className="date-time">
																	<div className="content">
																		<p className="entry-day ">14</p>
																		<p className="entry-month fw-book">SEP</p>
																	</div>
																</div>
															</div>
															<div className="content">
																<p className="sub">Wellness</p>
																<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
																	Well-being: Key Steps to Feeling Balanced
																</Link>
																</h5>
																<p>Explore how CBT techniques help manage stress and build resilience
																for a
																calmer life.</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="article-blog-item  hover-img ">
															<div className="image-wrap">
																<Link href="/blog-details">
																	<img className="lazyload" data-src="/images/blog/blog-4.jpg" src="/images/blog/blog-4.jpg" alt="healingy" />
																</Link>
																<div className="date-time">
																	<div className="content">
																		<p className="entry-day ">18</p>
																		<p className="entry-month fw-book">SEP</p>
																	</div>
																</div>
															</div>
															<div className="content">
																<p className="sub">Wellness</p>
																<h5 className="title"><Link href="/blog-details">How Therapy Helps with
																	Trauma:
																	Pathways to Long-Term Healing
																</Link>
																</h5>
																<p>Find out how therapy can guide you through trauma recovery and foster
																long-term healing.</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="article-blog-item  hover-img ">
															<div className="image-wrap">
																<Link href="/blog-details">
																	<img className="lazyload" data-src="/images/blog/blog-1.jpg" src="/images/blog/blog-1.jpg" alt="healingy" />
																</Link>
																<div className="date-time">
																	<div className="content">
																		<p className="entry-day ">12</p>
																		<p className="entry-month fw-book">SEP</p>
																	</div>
																</div>
															</div>
															<div className="content">
																<p className="sub">Therapy</p>
																<h5 className="title"><Link href="/blog-details">Mindfulness For Better
																	Mental
																	Health: Simple Practices for Daily Peace
																</Link>
																</h5>
																<p>Learn how mindfulness techniques can reduce stress and improve your
																	mental
																	well-being daily.</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="article-blog-item  hover-img ">
															<div className="image-wrap">
																<Link href="/blog-details">
																	<img className="lazyload" data-src="/images/blog/blog-3.jpg" src="/images/blog/blog-3.jpg" alt="healingy" />
																</Link>
																<div className="date-time">
																	<div className="content">
																		<p className="entry-day ">14</p>
																		<p className="entry-month fw-book">SEP</p>
																	</div>
																</div>
															</div>
															<div className="content">
																<p className="sub">Wellness</p>
																<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
																	Well-being: Key Steps to Feeling Balanced
																</Link>
																</h5>
																<p>Explore how CBT techniques help manage stress and build resilience
																for a
																calmer life.</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="article-blog-item  hover-img ">
															<div className="image-wrap">
																<Link href="/blog-details">
																	<img className="lazyload" data-src="/images/blog/blog-4.jpg" src="/images/blog/blog-4.jpg" alt="healingy" />
																</Link>
																<div className="date-time">
																	<div className="content">
																		<p className="entry-day ">18</p>
																		<p className="entry-month fw-book">SEP</p>
																	</div>
																</div>
															</div>
															<div className="content">
																<p className="sub">Wellness</p>
																<h5 className="title"><Link href="/blog-details">How Therapy Helps with
																	Trauma:
																	Pathways to Long-Term Healing
																</Link>
																</h5>
																<p>Find out how therapy can guide you through trauma recovery and foster
																long-term healing.</p>
															</div>
														</div>
													</SwiperSlide>
											</div>
										</Swiper>
										<div className="swiper-pagination pagination-layout">
										</div>
									</div>
								</div>
							</div>
						</section>{/* /.section-blog-news */}

			</Layout>
		</>
	)
}