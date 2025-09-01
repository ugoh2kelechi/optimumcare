'use client'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function AcceptedInsurances() {
	return (
		<>
			<Layout breadcrumbTitle="Accepted Insurances">
				<section className="section-box-about page-about">
					<div className="tf-container">
						<div className="row ">
							<div className="col-12 ">
								<div className="heading-section  ">
									<h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Insurance Plans We Accept</h2>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										We work with a variety of insurance providers. Coverage may vary by plan. Please contact
										us or your insurer to verify eligibility and benefits before your first visit.
									</p>
								</div>
								<div className="grid-layout-3 gap-20">
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<h5 className="title">Commercial Plans</h5>
										<ul className="list-disc text-1">
											<li>Aetna</li>
											<li>Blue Cross Blue Shield</li>
											<li>Cigna</li>
											<li>UnitedHealthcare/Optum</li>
										</ul>
									</div>
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										<h5 className="title">Government Programs</h5>
										<ul className="list-disc text-1">
											<li>Medicare (select plans)</li>
											<li>Medicaid (state-specific)</li>
											<li>Tricare</li>
										</ul>
									</div>
									<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
										<h5 className="title">Out-of-Network & Self-Pay</h5>
										<p className="text-1 lh-30">We provide itemized receipts (superbills) for out-of-network reimbursement. Flexible self-pay options are available.</p>
										<Link href="/contact-us" className="tf-btn style-default btn-color-secondary pd-20 mt-16"><span>Verify Coverage</span></Link>
									</div>
								</div>

								<div className="tf-divider mt-40 mb-24" />
								<div className="heading-section ">
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Important Notes</h3>
									<ul className="list-disc text-1 lh-30">
										<li>Copays, deductibles, and coinsurance may apply based on your plan.</li>
										<li>Authorization or referrals may be required by some insurers.</li>
										<li>Please bring your insurance card and photo ID to your first appointment.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}
