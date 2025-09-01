'use client'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function About() {
	return (
		<>
			<Layout breadcrumbTitle="About">
				<section className="section-about-intro tf-spacing-5">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-lg-10">
								<div className="heading-section text-center">
									<h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our Goal Is To Help</h2>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">
										We specialize in the treatment of Mood Disorders (depression, bipolar, anxiety), Neurodevelopmental Disorders (autism, ADD, ADHD, ODD), and Behavioral Disorders (addictions, marriage & family conflicts). We use effective, evidence-based treatment methods, such as Cognitive-Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and Applied Behavioral Analysis (ABA).
									</p>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										Our licensed clinicians — including PhD-level therapists, Licensed Professional Counselors, Psychiatrists, and Board Certified Psychiatric Mental Health Nurse Practitioners — work together with clients to identify negative thought patterns and transform them into more realistic, healthy, and positive perspectives.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-mission-vision tf-spacing-3">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="heading-section text-start">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">OUR MISSION</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">Compassionate, Evidence‑Based Care</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										To provide compassionate, evidence-based mental health care that empowers individuals to overcome challenges and achieve lasting well-being.
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="heading-section text-start">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">OUR VISION</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">Accessible, Personalized Support</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										To be a leading provider of accessible, personalized mental health services, fostering hope, resilience, and positive change in the lives of our clients.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-welcome-cta tf-spacing-3">
					<div className="tf-container">
						<div className="row align-items-center">
							<div className="col-lg-8">
								<div className="heading-section text-start">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Welcome To Optimum Care</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">The greatest gift you can give yourself is the freedom to be yourself.</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">Therapy is not about escaping your problems — it’s about learning to navigate them.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-28 mt-20 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.15s" href="/book-appointment">
										<span>Book Appointment <i className="icon-ArrowRight arr-1" /></span>
									</Link>
								</div>
							</div>
							<div className="col-lg-4"></div>
						</div>
					</div>
				</section>

				<section className="section-video-primary tf-spacing-3">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-lg-10">
								<div className="heading-section text-center">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Learn More</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">A Closer Look At Our Care</h3>
								</div>
								<div className="ratio ratio-16x9">
									<iframe className="video-embed" src="https://www.youtube.com/embed/j38-vcCKcWQ" title="Optimum Care Overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-approach tf-spacing-3">
					<div className="tf-container">
						<div className="heading-section text-center">
							<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our Approach</p>
							<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">How We Work With You</h3>
						</div>
						<div className="row gap-30">
							<div className="col-md-6">
								<div className="wg-box wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									<h5 className="mb-10">A collaborative and client‑centered approach</h5>
									<p className="text-1 lh-30">We combine therapeutic techniques and psychiatric expertise to address a wide range of mental health concerns.</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="wg-box wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">
									<h5 className="mb-10">Utilizing evidence‑based methods</h5>
									<p className="text-1 lh-30">We utilize proven treatments, including Cognitive‑Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and Applied Behavioral Analysis (ABA), to promote effective and sustainable outcomes.</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="wg-box wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
									<h5 className="mb-10">A team‑based model of care</h5>
									<p className="text-1 lh-30">Our team includes licensed clinicians such as psychologists, psychiatrists, and psychiatric mental health nurse practitioners to deliver comprehensive, tailored care.</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="wg-box wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.15s">
									<h5 className="mb-10">Challenging thoughts, fostering change</h5>
									<p className="text-1 lh-30">We focus on identifying and challenging negative thought patterns, building healthier coping strategies, and encouraging positive behavioral change.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-therapy-benefits tf-spacing-3">
					<div className="tf-container">
						<div className="heading-section text-center">
							<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Need For Therapy</p>
							<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.05s">Why Therapy Helps</h3>
						</div>
						<div className="row justify-center">
							<div className="col-lg-8">
								<ul className="list-style-1 text-1 lh-30">
									<li>Process emotions: Provides a safe space to understand and manage emotions.</li>
									<li>Gain new perspectives: Offers fresh insights and alternative ways of thinking.</li>
									<li>Develop coping skills: Learn tools to handle stress, anxiety, and other challenges.</li>
									<li>Improve relationships: Strengthen connections with loved ones.</li>
									<li>Self‑discovery: Explore personal values, goals, and aspirations.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="section-video-secondary tf-spacing-3">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-lg-10">
								<div className="ratio ratio-16x9">
									<iframe className="video-embed" src="https://www.youtube.com/embed/o6D7up6YgBE" title="Deeper Dive Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
