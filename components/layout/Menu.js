'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const checkCurrentMenuItem = (path) => pathname === path ? "current-item" : ""
	const checkParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>

			<ul className="navigation">
				<li className={`item ${pathname === "/" || pathname === "/home" ? "current-menu-item" : ""}`}>
					<Link href="/">Home</Link>
				</li>
				<li className={`has-child ${checkCurrentMenuItem("/our-service")}`}>
					<Link href="/our-service">Services</Link>
					<div className="sub-menu service-link">
						<div className="tf-container">
							<div className="row">
								<div className="col-12">
									<div className="wrap-cta">
										<div className="left">
											<h5 className="wg-title">Counseling &amp; Therapy Services
											</h5>
											<div className="wrap-service">
												<div className="service-item-list">
													<h6><Link href="/service-details">Family
														Therapy</Link></h6>
													<p className="text-2">
														Improve family relationships, resolve
														conflicts, and build a healthy living
														environment.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Child &amp;
														Adolescent
														Therapy</Link></h6>
													<p className="text-2">
														Specialized support for children and
														teens, helping them navigate emotional
														challenges.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Group
														Therapy</Link>
													</h6>
													<p className="text-2">
														Join others with similar challenges,
														sharing experiences and support in a
														guided group setting.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Couples
														Therapy</Link></h6>
													<p className="text-2">
														Enhance understanding affection between
														couples, helping to strengthen the
														relationship.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Trauma
														Counseling</Link></h6>
													<p className="text-2">
														Focused therapy to help you heal from
														past trauma and regain control over your
														life.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Individual
														Counseling</Link>
													</h6>
													<p className="text-2">
														Personal psychological support to help
														you overcome stress, anxiety, and regain
														confidence.
													</p>
												</div>
											</div>
										</div>
										<div className="right">
											<h5 className="wg-title">
												What’s New
											</h5>
											<div className="wrap-list">
												<div className="box-listings">
													<div className="image-wrap">
														<img src="/images/blog/blog-details-list-1.jpg" alt="occws" />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="text-2">Oct 17, 2024</li>
														</ul>
														<div className="title text-1 fw-5 line-clamp-2">
															<Link href="/blog-details" className="line-clamp-2">How
																Cognitive Behavioral
																Therapy
																Can Transform</Link>
														</div>
													</div>
												</div>
												<div className="box-listings">
													<div className="image-wrap">
														<img src="/images/blog/blog-details-list-2.jpg" alt="occws" />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="text-2">Oct 19, 2024</li>
														</ul>
														<div className="title text-1 fw-5 ">
															<Link className="line-clamp-2" href="/blog-details">Effective
																Strategies
																for
																Managing Anxiety</Link>
														</div>
													</div>
												</div>
												<div className="box-listings">
													<div className="image-wrap">
														<img src="/images/blog/blog-details-list-4.jpg" alt="occws" />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="text-2">Oct 26, 2024</li>
														</ul>
														<div className="title text-1 fw-5 ">
															<Link className="line-clamp-2" href="/blog-details">
																Techniques for Everyday
																Stress
																Relief</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</li>
				<li className={`item ${pathname === "/about" ? "current-menu-item" : ""}`}>
					<Link href="/about">About</Link>
				</li>
				<li className={`item ${pathname === "/book-appointment" ? "current-menu-item" : ""}`}>
					<Link href="/book-appointment">Appointment Form</Link>
				</li>
				<li className={`has-child relative ${checkParentActive(["/accepted-insurances", "/patient-online-portal", "/pay-online"])}`}>
					<Link href="/#">Resources</Link>
					<ul className="sub-menu">
						<li className={checkCurrentMenuItem("/accepted-insurances")}>
							<Link href="/accepted-insurances">Accepted Insurances</Link>
						</li>
						<li className={checkCurrentMenuItem("/patient-online-portal")}>
							<Link href="/patient-online-portal">Patient Online Portal</Link>
						</li>
						<li className={checkCurrentMenuItem("/pay-online")}>
							<Link href="/pay-online">Pay Online</Link>
						</li>
						<li className={checkCurrentMenuItem("/reviews")}>
							<Link href="/reviews">Reviews</Link>
						</li>
						<li className={checkCurrentMenuItem("/career")}>
							<Link href="/career">Career</Link>
						</li>
						<li className={checkCurrentMenuItem("/learning-reference")}>
							<Link href="/learning-reference">Learning Reference</Link>
						</li>
						<li className={checkCurrentMenuItem("/country-crisis-intervention")}>
							<Link href="/country-crisis-intervention">Country Crisis Intervention</Link>
						</li>
					</ul>
				</li>
				<li className={`item ${pathname.startsWith("/blog") ? "current-menu-item" : ""}`}>
					<Link href="/blog-grid">News & Blog</Link>
				</li>
				{/* <li className={checkCurrentMenuItem("/contact-us")}> */}
				<li className={`item ${pathname === "/contact-us" ? "current-menu-item" : ""}`}>
					<Link href="/contact-us">Contact</Link>
				</li>
			</ul>
		</>
	)
}
