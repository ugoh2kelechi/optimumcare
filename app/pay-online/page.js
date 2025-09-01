'use client'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function PayOnline() {
	return (
		<>
			<Layout breadcrumbTitle="Pay Online">
				<section className="section-box-about page-about">
					<div className="tf-container">
						<div className="row ">
							<div className="col-12 ">
								<div className="heading-section  ">
									<h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Secure Online Payments</h2>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										Pay your invoices online quickly and securely. We accept major credit/debit cards and HSA/FSA cards.
									</p>
								</div>

								<div className="grid-layout-3 gap-20">
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<h5 className="title">How It Works</h5>
										<ol className="list-decimal text-1">
											<li>Locate your invoice number on your statement.</li>
											<li>Click the payment button below.</li>
											<li>Enter your details and complete payment.</li>
										</ol>
									</div>
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										<h5 className="title">Payment Options</h5>
										<ul className="list-disc text-1">
											<li>Visa, MasterCard, American Express, Discover</li>
											<li>HSA/FSA Cards</li>
											<li>Secure processing via our PCI-compliant provider</li>
										</ul>
									</div>
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
										<h5 className="title">Questions About a Bill?</h5>
										<p className="text-1 lh-30">Our billing team is here to help clarify charges, apply credits, and set up payment plans when needed.</p>
										<Link href="/contact-us" className="tf-btn style-default btn-color-secondary pd-20 mt-16"><span>Contact Billing</span></Link>
									</div>
								</div>

								<div className="tf-divider mt-40 mb-24" />
								<div className="heading-section ">
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Make a Payment</h3>
									<p className="text-1 lh-30">Click below to proceed to our secure payment portal.</p>
									<Link href="/contact-us" className="tf-btn style-default btn-color-secondary pd-28 mt-8"><span>Pay Now</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
