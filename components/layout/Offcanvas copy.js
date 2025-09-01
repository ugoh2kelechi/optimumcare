'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function OffcanvasMobileMenu({ isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()

	const checkCurrentMenuItem = (path) => (pathname === path ? 'current-item' : '')
	const checkParentActive = (paths) => (paths.some((path) => pathname.startsWith(path)) ? 'current-menu-item' : '')
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<div
			className="offcanvas offcanvas-start mobile-nav-wrap"
			tabIndex={-1}
			id="menu-mobile"
			aria-labelledby="menu-mobile"
		>
			<div className="offcanvas-header top-nav-mobile">
				<div className="offcanvas-title">
					<Link href="/">
						<img src="/images/logo/Logo.png" alt="healingy" />
					</Link>
				</div>
				<div data-bs-dismiss="offcanvas" aria-label="Close">
					<i className="icon-close" />
				</div>
			</div>
			<div className="offcanvas-body inner-mobile-nav">
				<div className="mb-body">
					<ul id="menu-mobile-menu">
						<li className={`menu-item ${pathname === '/' || pathname === '/home' ? 'current-item' : ''}`}>
							<Link href="/" className="item-menu-mobile">
								Home
							</Link>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/our-service',
								'/service-details',
							])}`}
						>
							<a

								className="item-menu-mobile collapsed"
								onClick={() => handleAccordion(2)}
								aria-expanded="true"
								aria-controls="dropdown-menu-two"
							>
								Services
							</a>
							<div id="dropdown-menu-two" className={`collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/our-service')}`}>
										<Link href="/our-service">Our Service</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/service-details')}`}>
										<Link href="/service-details">Service Details</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className={`menu-item ${checkCurrentMenuItem('/about')}`}>
							<Link href="/about" className="item-menu-mobile">
								About
							</Link>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/book-appointment')}`}>
							<Link href="/book-appointment" className="item-menu-mobile">
								Appointment Form
							</Link>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/our-product',
								'/shop-cart',
								'/shop-check-out',
								'/product-details',
							])}`}
						>
							<a

								className="item-menu-mobile collapsed"
								onClick={() => handleAccordion(3)}
								aria-expanded="true"
								aria-controls="dropdown-menu-three"
							>
								Billing
							</a>
							<div id="dropdown-menu-three" className={`collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/accepted-insurances')}`}>
										<Link href="/accepted-insurances">Accepted Insurances</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/patient-online-portal')}`}>
										<Link href="/patient-online-portal">Patient Online Portal</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/pay-online')}`}>
										<Link href="/pay-online">Pay Online</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${pathname.startsWith('/blog') ? 'current-item' : ''}`}>
							<Link href="/blog-grid" className="item-menu-mobile">
								News & Blog
							</Link>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/contact-us')}`}>
							<Link href="/contact-us" className="item-menu-mobile">
								Contact
							</Link>
						</li>
					</ul>

					<div className="support">
						<Link href="/#" className="text-need">
							Need help?
						</Link>
						<ul className="mb-info">
							<li>
								Call Us Now: <span className="number">(610) 670-8800</span>
							</li>
							<li>
								Support 24/7: <Link href="mailto:servicerequests@optimumcarecounseling.com">servicerequests@optimumcarecounseling.com</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
