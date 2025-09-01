import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function About() {
	return (
		<>

			<Layout breadcrumbTitle="About">
				<section className="section-box-about page-about tf-spacing-3">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-start">
									<p className="text-2 sub">About Us</p>
									<h3>Our Goal Is To Help</h3>
									<p className="description text-1 lh-30">
										We specialize in the treatment of Mood Disorders (depression, bipolar, anxiety), Neurodevelopmental Disorders (autism, ADD, ADHD, ODD), and Behavioral Disorders (addictions, marriage & family conflicts). We use effective, evidence-based treatment methods, such as Cognitive-Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and Applied Behavioral Analysis (ABA).
									</p>
									<p className="description text-1 lh-30">
										Our licensed clinicians — including PhD-level therapists, Licensed Professional Counselors, Psychiatrists, and Board Certified Psychiatric Mental Health Nurse Practitioners — work together with clients to identify negative thought patterns and transform them into realistic, healthy, and positive patterns.
									</p>
								</div>

								<div className="about-welcome bg-1">
									<h5 className="mb-16">Welcome To Optimum Care</h5>
									<p className="text-1 lh-30 mb-16">The greatest gift you can give yourself is the freedom to be yourself.</p>
									<p className="text-1 lh-30 mb-24">Therapy is not about escaping your problems, it’s about learning to navigate them.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="/book-appointment">
										<span>Book Appointment</span>
									</Link>
								</div>

								<div className="row mt-40 mission-vision">
									<div className="col-md-6 mb-24">
										<h4 className="mb-12">OUR MISSION</h4>
										<p className="text-1 lh-30">
											To provide compassionate, evidence-based mental health care that empowers individuals to overcome challenges and achieve lasting well-being.
										</p>
									</div>
									<div className="col-md-6 mb-24">
										<h4 className="mb-12">OUR VISION</h4>
										<p className="text-1 lh-30">
											To be a leading provider of accessible, personalized mental health services, fostering hope, resilience, and positive change in the lives of our clients.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-video tf-spacing-3">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-md-10">
								<div className="video-embed">
									<iframe src="https://www.youtube.com/embed/j38-vcCKcWQ" title="About video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="tf-spacing-3 about-approach">
					<div className="tf-container">
						<div className="heading-section text-start">
							<p className="text-2 sub">OUR APPROACH</p>
							<h3>A comprehensive, client-centered model</h3>
						</div>
						<div className="grid-layout-4 gap-30">
							<div className="approach-item p-24 br-12 bg-1">
								<h6 className="mb-12">A collaborative and client-centered</h6>
								<p className="text-1 lh-30">We combine therapeutic techniques and psychiatric expertise to address a wide range of mental health concerns.</p>
							</div>
							<div className="approach-item p-24 br-12 bg-1">
								<h6 className="mb-12">Utilizing evidence-based methods</h6>
								<p className="text-1 lh-30">We utilize CBT, DBT, and ABA to promote effective and sustainable outcomes.</p>
							</div>
							<div className="approach-item p-24 br-12 bg-1">
								<h6 className="mb-12">A team-based approach</h6>
								<p className="text-1 lh-30">Our team includes psychologists, psychiatrists, and mental health nurse practitioners to provide comprehensive, tailored care.</p>
							</div>
							<div className="approach-item p-24 br-12 bg-1">
								<h6 className="mb-12">Challenging negative thoughts</h6>
								<p className="text-1 lh-30">We focus on identifying and challenging negative patterns, building healthier coping skills, and promoting positive change.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="tf-spacing-3 therapy-benefits">
					<div className="tf-container">
						<div className="heading-section text-start">
							<p className="text-2 sub">Need For Therapy</p>
							<h3>Why Therapy Helps</h3>
						</div>
						<ul className="list mt-12">
							<li>Process emotions: Therapy provides a safe space to understand and manage emotions.</li>
							<li>Gain new perspectives: A therapist can offer fresh insights and alternative ways of thinking.</li>
							<li>Develop coping skills: Learn tools to handle stress, anxiety, and other challenges.</li>
							<li>Improve relationships: Therapy can help strengthen relationships with loved ones.</li>
							<li>Self-discovery: Explore personal values, goals, and aspirations.</li>
						</ul>
					</div>
				</section>

				<section className="section-video tf-spacing-3">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-md-10">
								<div className="video-embed">
									<iframe src="https://www.youtube.com/embed/o6D7up6YgBE" title="About video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}
