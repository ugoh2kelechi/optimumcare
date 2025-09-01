import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ReviewsPage() {
	return (
		<>
			<Layout breadcrumbTitle="Reviews">
				<section className="section-testimonials tf-spacing-1">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-center">
									<p className="text-2 sub">Client Testimonials</p>
									<h3>Real Stories. Real Progress.</h3>
									<p className="description text-1 lh-30">Feedback from individuals and families who trusted us on their healing journey.</p>
								</div>

								<div className="grid-layout-3 gap-30">
									<div className="wg-testimonial style-text-center ">
										<div className="rating">
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
										</div>
										<div className="content">
											<p className="text text-1 lh-30  fw-4 mb-16">“The team truly listened and tailored support to my needs. I feel more confident and hopeful.”</p>
											<div className="bot">
												<div className="info">
													<h6 className="title "><Link href="/#">Alex P.</Link></h6>
													<p>Philadelphia, PA</p>
												</div>
											</div>
										</div>
									</div>
									<div className="wg-testimonial style-text-center ">
										<div className="rating">
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
										</div>
										<div className="content">
											<p className="text text-1 lh-30  fw-4 mb-16">“Compassionate and professional care. I learned tools that help me every day.”</p>
											<div className="bot">
												<div className="info">
													<h6 className="title "><Link href="/#">Jasmine K.</Link></h6>
													<p>Allentown, PA</p>
												</div>
											</div>
										</div>
									</div>
									<div className="wg-testimonial style-text-center ">
										<div className="rating">
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
											<i className="icon-favorite_major" />
										</div>
										<div className="content">
											<p className="text text-1 lh-30  fw-4 mb-16">“Supportive guidance that helped our family communicate and reconnect.”</p>
											<div className="bot">
												<div className="info">
													<h6 className="title "><Link href="/#">The R. Family</Link></h6>
													<p>Bethlehem, PA</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="heading-section text-center mt-40">
									<p className="text-2 sub">Share Your Experience</p>
									<p className="description text-1 lh-30">We welcome your feedback. It helps us continue to improve our services.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="/contact-us"><span>Contact Us</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
