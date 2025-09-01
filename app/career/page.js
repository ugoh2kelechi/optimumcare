import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function CareerPage() {
	return (
		<>
			<Layout breadcrumbTitle="Career">
				<section className="section-career tf-spacing-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-center">
									<p className="text-2 sub">Join Our Team</p>
									<h3>Build a Meaningful Career in Mental Health</h3>
									<p className="description text-1 lh-30">We’re committed to compassionate care, professional growth, and a supportive culture.</p>
								</div>
								<div className="grid-layout-3 gap-30">
									<div className="box-listings">
										<div className="content">
											<h5 className="title text-1 fw-5">Licensed Therapist (LPC/LCSW/LMFT)</h5>
											<ul className="meta"><li className="text-2">Full-time</li><li className="text-2">Allentown, PA</li></ul>
											<p className="text-1">Provide individual and family counseling, develop treatment plans, and collaborate on client care.</p>
											<Link className="tf-btn-link" href="/contact-us"><span data-text="Apply now">Apply now</span><i className="icon-ArrowRight" /></Link>
										</div>
									</div>
									<div className="box-listings">
										<div className="content">
											<h5 className="title text-1 fw-5">Child & Adolescent Therapist</h5>
											<ul className="meta"><li className="text-2">Part-time</li><li className="text-2">Hybrid</li></ul>
											<p className="text-1">Deliver age-appropriate interventions and partner with families and schools to support progress.</p>
											<Link className="tf-btn-link" href="/contact-us"><span data-text="Apply now">Apply now</span><i className="icon-ArrowRight" /></Link>
										</div>
									</div>
									<div className="box-listings">
										<div className="content">
											<h5 className="title text-1 fw-5">Intake Coordinator</h5>
											<ul className="meta"><li className="text-2">Full-time</li><li className="text-2">On-site</li></ul>
											<p className="text-1">Support new clients through intake, scheduling, and care coordination with empathy and precision.</p>
											<Link className="tf-btn-link" href="/contact-us"><span data-text="Apply now">Apply now</span><i className="icon-ArrowRight" /></Link>
										</div>
									</div>
								</div>
								<div className="heading-section text-center mt-40">
									<p className="description text-1 lh-30">Don’t see a role? We’re always interested in meeting passionate professionals.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="/contact-us"><span>Send Your Resume</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
