import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function About() {
	return (
		<>
			<Layout breadcrumbTitle="About Us">
				{/* Intro */}
				<section className="section-box-about page-about about-intro-section">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">About Us</p>
									<h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our Goal Is To Help</h2>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										We specialize in the treatment of Mood Disorders (depression, bipolar, anxiety), Neurodevelopmental Disorders (autism, ADD, ADHD, ODD), and Behavioral Disorders (addictions, marriage &amp; family conflicts). We use effective, evidence-based treatment methods, such as Cognitive-Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and Applied Behavioral Analysis (ABA). Our licensed clinicians — including PhD-level therapists, Licensed Professional Counselors, Psychiatrists, and Board-Certified Psychiatric Mental Health Nurse Practitioners — work collaboratively with clients to identify unhelpful thought patterns and transform them into realistic, healthy, and positive ones.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Middle Video */}
				<section className="section-video tf-spacing-3 about-video-middle">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="video-embed">
									<iframe src="https://www.youtube.com/embed/j38-vcCKcWQ" title="About video introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Mission & Vision */}
				<section className="tf-spacing-3 about-mission-vision">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<h3>Our Mission</h3>
										<p>To provide compassionate, evidence-based mental health care that empowers individuals to overcome challenges and achieve lasting well-being.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
									<div className="item">
										<h3>Our Vision</h3>
										<p>To be a leading provider of accessible, personalized mental health services, fostering hope, resilience, and positive change in the lives of our clients.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Welcome Callout */}
				<section className="tf-spacing-3 about-welcome">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-start">
									<p className="text-2 sub">Welcome To Optimum Care</p>
									<h3>The greatest gift you can give yourself is the freedom to be yourself.</h3>
									<p className="description text-1 lh-30">Therapy is not about escaping your problems, it’s about learning to navigate them.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-28" href="/book-appointment"><span>Book Appointment</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Our Approach */}
				<section className="tf-spacing-3 about-approach">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section">
									<p className="text-2 sub">Our Approach</p>
									<h3>A collaborative, client-centered model</h3>
								</div>
								<ul className="list-disc text-1 lh-30">
									<li>We combine therapeutic techniques and psychiatric expertise to address a wide range of mental health concerns.</li>
									<li>Utilize evidence-based methods such as CBT, DBT, and ABA to promote effective and sustainable outcomes.</li>
									<li>Team-based care involving licensed clinicians — psychologists, psychiatrists, and mental health nurse practitioners — providing comprehensive, tailored support.</li>
									<li>Focus on identifying and challenging negative thought patterns to build healthier coping skills and foster positive behavioral change.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Need For Therapy */}
				<section className="tf-spacing-3 about-need-therapy">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-md-8">
								<div className="heading-section text-center">
									<p className="text-2 sub">Need For Therapy</p>
									<h3>Why therapy can help</h3>
								</div>
								<ul className="list-disc text-1 lh-30">
									<li>Process emotions: a safe space to understand and manage feelings.</li>
									<li>Gain new perspectives: fresh insights and alternative ways of thinking.</li>
									<li>Develop coping skills: tools to handle stress, anxiety, and other challenges.</li>
									<li>Improve relationships: strengthen connections with loved ones.</li>
									<li>Self-discovery: explore personal values, goals, and aspirations.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Bottom Video */}
				<section className="section-video tf-spacing-3 about-video-bottom">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="video-embed">
									<iframe src="https://www.youtube.com/embed/o6D7up6YgBE" title="About video – further insights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
