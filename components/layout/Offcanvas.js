'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function OffcanvasMobileMenu() {
	const pathname = usePathname()

	const checkCurrentMenuItem = (path) => (pathname === path ? 'current-item' : '')
	const checkParentActive = (paths) => (paths.some((path) => pathname.startsWith(path)) ? 'current-menu-item' : '')

	// Function to close the offcanvas
	const closeOffcanvas = () => {
		const offcanvas = document.getElementById('menu-mobile')
		const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop')
		if (offcanvas && offcanvasBackdrop) {
			offcanvas.classList.remove('show')
			offcanvasBackdrop.remove() // Corrected here
			document.body.classList.remove('offcanvas-open')
		}
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
							<Link href="/" className="item-menu-mobile" onClick={closeOffcanvas}>
								Home
							</Link>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/about')}`}>
							<Link href="/about" className="item-menu-mobile" onClick={closeOffcanvas}>
								About
							</Link>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/our-service',
								'/service-details',
							])}`}
						>
							<Link
								href="/#dropdown-menu-two"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-two"
							>
								Services
							</Link>
							<div id="dropdown-menu-two" className="collapse" data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/our-service')}`}>
										<Link href="/our-service" onClick={closeOffcanvas}>Our Service</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/service-details')}`}>
										<Link href="/service-details" onClick={closeOffcanvas}>Service Details</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/our-therapists')}`}>
							<Link href="/our-therapists" className="item-menu-mobile" onClick={closeOffcanvas}>
								Therapists
							</Link>
						</li>
						<li className={`menu-item ${checkCurrentMenuItem('/book-appointment')}`}>
							<Link href="/book-appointment" className="item-menu-mobile" onClick={closeOffcanvas}>
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
							<Link
								href="/#dropdown-menu-three"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-three"
							>
								Pages
							</Link>
							<div id="dropdown-menu-three" className="collapse" data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
								</ul>
							</div>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/blog-grid',
								'/blog-details',
								'/blog-details-2',
							])}`}
						>
							<Link
								href="/#dropdown-menu-four"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-four"
							>
								Blogs
							</Link>
							<div id="dropdown-menu-four" className="collapse" data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/blog-grid')}`}>
										<Link href="/blog-grid" onClick={closeOffcanvas}>Blog Grid</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/blog-details')}`}>
										<Link href="/blog-details" onClick={closeOffcanvas}>Blog Details 1</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/blog-details-2')}`}>
										<Link href="/blog-details-2" onClick={closeOffcanvas}>Blog Details 2</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/contact-us')}`}>
							<Link href="/contact-us" className="item-menu-mobile" onClick={closeOffcanvas}>
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
								Email Us: <span className="mail">servicerequests@optimumcarecounseling.com</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
