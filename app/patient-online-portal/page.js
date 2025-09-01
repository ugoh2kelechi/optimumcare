'use client'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function PatientOnlinePortal() {
	return (
		<>
			<Layout breadcrumbTitle="Patient Online Portal">
				<section className="section-box-about page-about">
					<div className="tf-container">
						<div className="row ">
							<div className="col-12 ">
								<div className="heading-section  ">
									<h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Manage Your Care Online</h2>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										Access your appointments, forms, and secure messages anytime.
									</p>
								</div>

								<div className="grid-layout-3 gap-20">
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<h5 className="title">Portal Features</h5>
										<ul className="list-disc text-1">
											<li>View and manage appointments</li>
											<li>Complete intake and consent forms</li>
											<li>Secure messaging with our team</li>
											<li>Update insurance and billing information</li>
										</ul>
									</div>
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
										<h5 className="title">Existing Patients</h5>
										<p className="text-1 lh-30">Already registered? Log in to view upcoming visits and messages.</p>
										<a href="https://patientonlineportal.com/idp/account/signin?ReturnUrl=%2Fidp%2Fissue%2Fwsfed%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253a%252f%252fpatientonlineportal.com%252f%26wctx%3Drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3D2022-06-27T19%253a08%253a33Z%26wreply%3Dhttps%253a%252f%252fpatientonlineportal.com%252f&wa=wsignin1.0&wct=2022-06-27T19%3A08%3A33Z&wctx=rm%3D0%26id%3Dpassive%26ru%3D%252f&wreply=https%3A%2F%2Fpatientonlineportal.com%2F&wtrealm=https%3A%2F%2Fpatientonlineportal.com%2F" className="tf-btn style-default btn-color-secondary pd-20 mt-16" target="_blank" rel="noopener noreferrer"><span>Request Portal Access</span></a>
									</div>
								</div>

								<div className="tf-divider mt-40 mb-24" />
								<div className="heading-section ">
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Need Help?</h3>
									<p className="text-1 lh-30">If you have trouble accessing the portal, please contact our support team and we’ll assist you promptly.</p>
									<Link href="/contact-us" className="tf-btn style-default btn-color-secondary pd-20 mt-16"><span>Contact Support</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
