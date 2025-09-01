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
									<p className="text-2 sub">HOW WAS YOUR EXPERIENCE?</p>
									<h3>Leave A Google Review</h3>
									<p className="description text-1 lh-30">If you have time, please leave us a Google review about your experience with Optimum Care Counseling! It would be much appreciated. Like you, we’re striving to make improvements every day.</p>
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
									<p className="description text-1 lh-30">Your feedback helps us improve every day.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="https://www.google.com/maps/place/Optimum+Care+Counseling+%26+Wellness+Solutions,+LLC/@40.3464489,-75.9578904,17z/data=!3m1!4b1!4m6!3m5!1s0x89c673a3400bd545:0xe6dcee4b4e70729!8m2!3d40.3464489!4d-75.9578904!16s%2Fg%2F1263wt163?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><span>Leave A Review</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
