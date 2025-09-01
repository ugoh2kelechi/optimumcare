import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function OurService() {

	return (
		<>

			<Layout breadcrumbTitle="Our Services">
				{/* .section-hero */}
				<section className="section-hero">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="image-wrap wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									<img className="lazyload" data-src="/images/section/section-hero.jpg" src="/images/section/section-hero.jpg" alt="healingy" />
								</div>
								<p className="text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Comprehensive therapy and psychiatry services for all ages—personalized counseling, evidence-based techniques like CBT, and expert medication management to support your mental wellness.</p>
							</div>
						</div>
					</div>
				</section>{/* /.section-hero */}
				{/* .section-service */}
				<section className="section-service page-our-service tf-spacing-3">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section ">
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Therapy &amp; Psychiatry Services</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">At Optimum Care Counseling and Wellness Solution, we offer therapy (psychotherapy/counseling) for all ages and diagnoses. Our diverse team uses evidence-based approaches—including Cognitive Behavioral Therapy (CBT)—and provides individual therapy, family therapy, and couples counseling. We treat Anxiety, Depression, Bipolar Disorder, Schizophrenia, Autism Spectrum Disorder (ASD), Obsessive-Compulsive Disorder (OCD), Eating Disorders, and more.</p>
									<h4 className="mb-16 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Psychiatry</h4>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our psychiatric team—Psychiatrists and Board-Certified Psychiatric Mental Health Nurse Practitioners—specializes in medication management across all drug classes. We help patients initiate, maintain, adjust, or discontinue psychiatric medications safely and effectively.</p>
									<h4 className="mb-16 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">We Are Specialized In</h4>
									<ul className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<li>Individual Therapy</li>
										<li>Family Therapy</li>
										<li>Couples Counseling</li>
										<li>Anxiety Disorders</li>
										<li>Depression</li>
										<li>Bipolar Disorder</li>
										<li>Schizophrenia</li>
										<li>Autism Spectrum Disorder (ASD)</li>
										<li>Obsessive-Compulsive Disorder (OCD)</li>
										<li>Eating Disorders</li>
									</ul>
									<h4 className="mb-16 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our Rates</h4>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Fees are subject to change and may be adjusted based on insurance contracts. Cash-paying customers, please contact our office at (610) 670-8800 for accurate rates.</p>
									<ul className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<li>Late Cancellation Fee: $40.00</li>
										<li>Missed Appointment / No Call No Show: $50.00</li>
									</ul>
								</div>
								<div className="grid-layout-3 multi-item">
									<div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<div className="content z-5">
											<h5 className="title">
												<Link href="/service-details"> Individual Counseling</Link>
											</h5>
											<p>Personal psychological support to help you overcome stress, anxiety, and
												regain
												confidence.</p>
										</div>
										<div className="image-wrap z-5 relative">
											<Link href="/service-details">
												<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt="healingy" />
											</Link>
										</div>
										<Link href="/service-details" className="tf-btn-link z-5">
											<span data-text="Read More">Read More</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										<div className="content z-5">
											<h5 className="title">
												<Link href="/service-details"> Family Therapy</Link>
											</h5>
											<p>Improve family relationships, resolve conflicts, and build a healthy living
												environment.</p>
										</div>
										<div className="image-wrap z-5 relative">
											<Link href="/service-details">
												<img className="lazyload" data-src="/images/section/service-item-2.jpg" src="/images/section/service-item-2.jpg" alt="healingy" />
											</Link>
										</div>
										<Link href="/service-details" className="tf-btn-link z-5">
											<span data-text="Read More">Read More</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
										<div className="content z-5">
											<h5 className="title">
												<Link href="/service-details">Couples Therapy</Link>
											</h5>
											<p>Enhance understanding affection between couples, helping to strengthen the
												relationship.</p>
										</div>
										<div className="image-wrap z-5 relative">
											<Link href="/service-details">
												<img className="lazyload" data-src="/images/section/service-item-3.jpg" src="/images/section/service-item-3.jpg" alt="healingy" />
											</Link>
										</div>
										<Link href="/service-details" className="tf-btn-link z-5">
											<span data-text="Read More">Read More</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<div className="content z-5">
											<h5 className="title">
												<Link href="/service-details"> Group Therapy</Link>
											</h5>
											<p>Join others with similar challenges, sharing experiences and support in a
												group setting.</p>
										</div>
										<div className="image-wrap z-5 relative">
											<Link href="/service-details">
												<img className="lazyload" data-src="/images/section/service-item-4.jpg" src="/images/section/service-item-4.jpg" alt="healingy" />
											</Link>
										</div>
										<Link href="/service-details" className="tf-btn-link z-5">
											<span data-text="Read More">Read More</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										<div className="content z-5">
											<h5 className="title">
												<Link href="/service-details">Child &amp; Adolescent Therapy</Link>
											</h5>
											<p>Specialized support for children and teens, helping them navigate emotional
												challenges.</p>
										</div>
										<div className="image-wrap z-5 relative">
											<Link href="/service-details">
												<img className="lazyload" data-src="/images/section/service-item-5.jpg" src="/images/section/service-item-5.jpg" alt="healingy" />
											</Link>
										</div>
										<Link href="/service-details" className="tf-btn-link z-5">
											<span data-text="Read More">Read More</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
										<div className="content z-5">
											<h5 className="title">
												<Link href="/service-details">Trauma Counseling</Link>
											</h5>
											<p>Focused therapy to help you heal from past trauma and regain control over
												your life.</p>
										</div>
										<div className="image-wrap z-5 relative">
											<Link href="/service-details">
												<img className="lazyload" data-src="/images/section/service-item-6.jpg" src="/images/section/service-item-6.jpg" alt="healingy" />
											</Link>
										</div>
										<Link href="/service-details" className="tf-btn-link z-5">
											<span data-text="Read More">Read More</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>{/* /.section-service */}
				{/* .section-contact */}
				<section className="section-contact">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="wrap-content">
									<div className="box-contact">
										<div className="heading-section text-start">
											<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
												Book a Consultation</p>
											<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Free
												Consultation - Begin Your Healing Journey</h3>
											<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Connect with a dedicated specialist today
												and
												take the first step towards a healthier, more fulfilling life.
											</p>
										</div>
										<ul className="list-info">
											<li className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><i className="icon-Envelope" /> <Link href="mailto:servicerequests@optimumcarecounseling.com">servicerequests@optimumcarecounseling.com</Link></li>
											<li className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><i className="icon-PhoneCall" />(610) 670-8800</li>
											<li className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><i className="icon-MapPin" />1011 Brookside Road Suite 304 Allentown, PA 18106, US
											</li>
										</ul>
										<Link href="/contact-us" className="tf-btn-link z-5 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<span data-text="Open map">Open map</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<form className="form-consultation wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s" method="post" id="contactform" action="./contact/contact-process.php">
										<h4 className="mb-20 text-center">Get A Free Consultation</h4>
										<fieldset className="name">
											<input type="text" name="name" className="tf-input style-1" placeholder="Your Name*" tabIndex={2} aria-required="true" required />
										</fieldset>
										<fieldset className="phone">
											<input type="number" name="phone" className="tf-input style-1" placeholder="Phone Number" tabIndex={2} aria-required="true" required />
										</fieldset>
										<div className="select-custom mb-20">
											<select id="service" data-default name="select">
												<option value="---">Choose Services</option>
												<option value="Individual Counseling">Individual Counseling</option>
												<option value="Family Therapy">Family Therapy</option>
												<option value="Couples Therapy">Couples Therapy</option>
												<option value="Group Therapy">Group Therapy</option>
												<option value="Child & Adolescent Therapy">Child &amp; Adolescent Therapy
												</option>
												<option value="Trauma Counseling">Trauma Counseling</option>
											</select>
										</div>
										<fieldset className="message">
											<textarea id="message" className="tf-input" name="message" rows={4} placeholder="Your mesage" tabIndex={4} aria-required="true" required />
										</fieldset>
										<button className="tf-btn style-default btn-color-secondary pd-40 boder-8 send-wrap" type="submit">
											<span>
												Submit
											</span>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section> {/* /.section-contact */}

			</Layout>
		</>
	)
}
