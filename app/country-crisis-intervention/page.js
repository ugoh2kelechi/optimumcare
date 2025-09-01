import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function CountryCrisisInterventionPage() {
	return (
		<>
			<Layout breadcrumbTitle="Country Crisis Intervention">
				<section className="section-contact tf-spacing-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-center">
									<p className="text-2 sub">Immediate Support</p>
									<h3>Emergency and Crisis Resources</h3>
									<p className="description text-1 lh-30">If you or someone you know is in danger, call local emergency services right away.</p>
								</div>
								<div className="grid-layout-3 gap-30">
									<div className="box-contact">
										<h5 className="title">United States</h5>
										<ul className="list-info">
											<li><i className="icon-PhoneCall" />Emergency: <Link href="tel:911">911</Link></li>
											<li><i className="icon-PhoneCall" />988 Suicide & Crisis Lifeline: <Link href="tel:988">988</Link></li>
											<li><i className="icon-Globe" />Lifeline: <Link href="https://988lifeline.org" target="_blank">988lifeline.org</Link></li>
										</ul>
									</div>
									<div className="box-contact">
										<h5 className="title">Canada</h5>
										<ul className="list-info">
											<li><i className="icon-PhoneCall" />Emergency: <Link href="tel:911">911</Link></li>
											<li><i className="icon-PhoneCall" />Talk Suicide Canada: <Link href="tel:18334564566">1-833-456-4566</Link></li>
											<li><i className="icon-Globe" />talksuicide.ca: <Link href="https://www.talksuicide.ca" target="_blank">talksuicide.ca</Link></li>
										</ul>
									</div>
									<div className="box-contact">
										<h5 className="title">United Kingdom</h5>
										<ul className="list-info">
											<li><i className="icon-PhoneCall" />Emergency: <Link href="tel:999">999</Link></li>
											<li><i className="icon-PhoneCall" />Samaritans: <Link href="tel:116123">116 123</Link></li>
											<li><i className="icon-Globe" />samaritans.org: <Link href="https://www.samaritans.org" target="_blank">samaritans.org</Link></li>
										</ul>
									</div>
								</div>

								<div className="heading-section text-center mt-40">
									<p className="description text-1 lh-30">If your country is not listed, contact local emergency services for immediate assistance.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="/contact-us"><span>Get Non‑Emergency Support</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
