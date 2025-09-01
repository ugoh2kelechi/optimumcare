'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Footer2() {
	const [isAccordion1, setIsAccordion1] = useState(0)
	const [isAccordion2, setIsAccordion2] = useState(0)
	const [isAccordion3, setIsAccordion3] = useState(0)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768)
		}

		handleResize() // Run on initial load
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleAccordion1 = (key) => {
		if (!isDesktop) {
			setIsAccordion1((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion2 = (key) => {
		if (!isDesktop) {
			setIsAccordion2((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion3 = (key) => {
		if (!isDesktop) {
			setIsAccordion3((prev) => (prev === key ? null : key))
		}
	}

	const getDisplayStyle1 = (key) => {
		return isDesktop ? 'block' : isAccordion1 === key ? 'block' : 'none'
	}
	const getDisplayStyle2 = (key) => {
		return isDesktop ? 'block' : isAccordion2 === key ? 'block' : 'none'
	}
	const getDisplayStyle3 = (key) => {
		return isDesktop ? 'block' : isAccordion3 === key ? 'block' : 'none'
	}
	return (
		<>

			<footer id="footer">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="footer-main">
								<div className="footer-left">
									<div className="footer-logo">
										<Link href="/">
											<img id="logo_footer" src="/images/logo/footer-logo.png" data-retina="./images/logo/footer-logo@2x.png" alt="healingy" />
										</Link>
									</div>
									<p className="description">We provide a safe space where you can find peace within yourself.
										Our
										expert therapists guide you through overcoming mental challenges with personalized
										care.
									</p>
									<ul className="footer-info">
										<li>Office: 1011 Brookside Road Suite 304 Allentown, PA 18106, US</li>
										<li>Support 24/7: <Link href="mailto:servicerequests@optimumcarecounseling.com">servicerequests@optimumcarecounseling.com</Link></li>
										<li>Call Us Now: (610) 670-8800</li>
									</ul>
									<ul className="tf-social">
										<li><Link href="/#"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_11089_880)">
												<path d="M6.25 11.25L8.75 8.75L11.25 11.25L13.75 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.24382 16.4932C7.81923 17.405 9.67248 17.7127 11.458 17.359C13.2436 17.0053 14.8396 16.0143 15.9484 14.5708C17.0573 13.1273 17.6033 11.3298 17.4847 9.51341C17.3662 7.69704 16.5911 5.98577 15.304 4.69866C14.0169 3.41156 12.3056 2.63646 10.4892 2.51789C8.67284 2.39932 6.87533 2.94537 5.43182 4.05422C3.98831 5.16308 2.99733 6.75906 2.64363 8.54461C2.28993 10.3302 2.59766 12.1834 3.50944 13.7588L2.5321 16.6768C2.49538 16.7869 2.49005 16.9051 2.51671 17.0181C2.54337 17.131 2.60097 17.2344 2.68306 17.3165C2.76514 17.3985 2.86847 17.4561 2.98145 17.4828C3.09443 17.5095 3.2126 17.5041 3.32273 17.4674L6.24382 16.4932Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</g>
											<defs>
												<clipPath id="clip0_11089_880">
													<rect width={20} height={20} fill="white" />
												</clipPath>
											</defs>
										</svg>
										</Link>
										</li>
										<li><Link href="/#">
											<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_11089_1677)">
													<path d="M3.75 3.125H7.5L16.25 16.875H12.5L3.75 3.125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M8.89687 11.2129L3.75 16.8746" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M16.2484 3.125L11.1016 8.78672" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</g>
												<defs>
													<clipPath id="clip0_11089_1677">
														<rect width={20} height={20} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</Link></li>
										<li><Link href="/#"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_11089_891)">
												<path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M13.75 2.5H6.25C4.17893 2.5 2.5 4.17893 2.5 6.25V13.75C2.5 15.8211 4.17893 17.5 6.25 17.5H13.75C15.8211 17.5 17.5 15.8211 17.5 13.75V6.25C17.5 4.17893 15.8211 2.5 13.75 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M14.0625 6.71875C14.494 6.71875 14.8438 6.36897 14.8438 5.9375C14.8438 5.50603 14.494 5.15625 14.0625 5.15625C13.631 5.15625 13.2812 5.50603 13.2812 5.9375C13.2812 6.36897 13.631 6.71875 14.0625 6.71875Z" fill="white" />
											</g>
											<defs>
												<clipPath id="clip0_11089_891">
													<rect width={20} height={20} fill="white" />
												</clipPath>
											</defs>
										</svg>
										</Link></li>
										<li><Link href="/#"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_11089_897)">
												<path d="M7.5 11.875C7.5 12.9102 8.61953 13.75 10 13.75C11.3805 13.75 12.5 12.9102 12.5 11.875C12.5 9.375 7.63906 10.3125 7.63906 8.125C7.63906 7.08984 8.61953 6.25 10 6.25C11.0352 6.25 11.8461 6.71875 12.1875 7.39531" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M16.7185 11.4602C17.2734 12.1819 17.5469 13.0809 17.4877 13.9894C17.4286 14.8978 17.0411 15.7538 16.3973 16.3976C15.7536 17.0413 14.8976 17.4289 13.9891 17.488C13.0806 17.5471 12.1817 17.2737 11.4599 16.7188C10.3352 16.9619 9.16735 16.9191 8.06341 16.5941C6.95947 16.2692 5.95465 15.6726 5.14094 14.8589C4.32722 14.0452 3.7306 13.0403 3.40567 11.9364C3.08074 10.8325 3.03789 9.66466 3.28103 8.53987C2.72612 7.81813 2.45272 6.91917 2.51182 6.01069C2.57093 5.10221 2.95851 4.24626 3.60226 3.6025C4.24601 2.95875 5.10197 2.57117 6.01045 2.51207C6.91893 2.45296 7.81789 2.72636 8.53963 3.28128C9.66441 3.03813 10.8322 3.08098 11.9362 3.40591C13.0401 3.73084 14.0449 4.32747 14.8586 5.14118C15.6723 5.9549 16.269 6.95971 16.5939 8.06365C16.9188 9.16759 16.9617 10.3354 16.7185 11.4602Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</g>
											<defs>
												<clipPath id="clip0_11089_897">
													<rect width={20} height={20} fill="white" />
												</clipPath>
											</defs>
										</svg>
										</Link></li>
										<li><Link href="/#"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_11089_902)">
												<path d="M6.24939 10.5366L13.301 16.7186C13.3822 16.7903 13.4806 16.8396 13.5867 16.8618C13.6927 16.8839 13.8027 16.8781 13.9058 16.845C14.0089 16.8118 14.1016 16.7524 14.1749 16.6726C14.2481 16.5928 14.2994 16.4953 14.3236 16.3897L17.4994 2.59521C17.5025 2.58138 17.5018 2.56696 17.4973 2.55351C17.4928 2.54006 17.4848 2.52807 17.474 2.51884C17.4633 2.50961 17.4502 2.50348 17.4362 2.5011C17.4223 2.49873 17.4079 2.5002 17.3947 2.50537L1.56189 8.70146C1.4636 8.73929 1.38023 8.80798 1.3243 8.89722C1.26837 8.98646 1.2429 9.09143 1.2517 9.19638C1.26051 9.30133 1.30312 9.4006 1.37313 9.47927C1.44315 9.55794 1.5368 9.61178 1.64001 9.63271L6.24939 10.5366Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.25 10.5375L17.4539 2.50781" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.71641 13.577L7.325 16.0582C7.23859 16.1479 7.12737 16.2097 7.00561 16.2357C6.88384 16.2617 6.75708 16.2507 6.64157 16.2042C6.52607 16.1577 6.42709 16.0778 6.35732 15.9747C6.28755 15.8715 6.25018 15.7499 6.25 15.6254V10.5371" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</g>
											<defs>
												<clipPath id="clip0_11089_902">
													<rect width={20} height={20} fill="white" />
												</clipPath>
											</defs>
										</svg>
										</Link>
										</li></ul>
								</div>
								<div className="footer-right">
									<div className="wrap-footer-menu-list">
										<div className={`footer-menu-list footer-col-block ${isAccordion1 === 1 ? 'open' : ''}`}>
											<h6 className="title title-desktop">Our Therapists</h6>
											<h6 className="title title-mobile" onClick={() => handleAccordion1(1)}>Our Therapists</h6>
											<ul className="tf-collapse-content" style={{ display: getDisplayStyle1(1) }}>
												<li><Link href="/therapists-details">Annette Black</Link></li>
												<li><Link href="/therapists-details">Jane Cooper</Link></li>
												<li><Link href="/therapists-details">Brooklyn Simmons</Link></li>
											</ul>
										</div>

										<div className={`footer-menu-list footer-col-block ${isAccordion2 === 2 ? 'open' : ''}`}>
											<h6 className="title title-desktop">Our Services</h6>
											<h6 className="title title-mobile" onClick={() => handleAccordion2(2)}>Our Services</h6>
											<ul className="tf-collapse-content" style={{ display: getDisplayStyle2(2) }}>
												<li><Link href="/service-details">Individual Counseling</Link></li>
												<li><Link href="/service-details">Family Therapy</Link></li>
												<li><Link href="/service-details">Couples Therapy</Link></li>
												<li><Link href="/service-details">Group Therapy</Link></li>
											</ul>
										</div>
									</div>

									<div className={`wrap-form footer-col-block ${isAccordion3 === 3 ? 'open' : ''}`}>
										<h6 className="title title-desktop">Subscribe Newsletter</h6>
										<h6 className="title title-mobile" onClick={() => handleAccordion3(3)}>Subscribe Newsletter</h6>
										<div className="tf-collapse-content" style={{ display: getDisplayStyle3(3) }}>
											<form className="form-send-email">
												<fieldset>
													<input type="email" placeholder="Your email address" name="text" aria-required="true" required />
												</fieldset>
												<div className="button-submit">
													<button type="submit">
														<i className="icon-PaperPlaneTilt" />
													</button>
												</div>
											</form>
											<p>
												Please sign up to follow the latest news and events from us. We promise not to spam your inbox.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="footer-bottom">
								<p>Copyright {new Date().getFullYear()} Healingy By <Link href="https://themeforest.net/user/themesflat" target="_blank">UgohSolutions.com</Link> All rights reserved</p>
								<ul className="content-right">
									<li><Link href="/shop">Terms Of Services</Link></li>
									<li><Link href="/contact-us"> Privacy Policy</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
