import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function LearningReferencePage() {
	return (
		<>
			<Layout breadcrumbTitle="Learning Reference">
				<section className="section-blog tf-spacing-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-center">
									<p className="text-2 sub">Educational Resources</p>
									<h3>Guides, Articles, and Tools</h3>
									<p className="description text-1 lh-30">Explore helpful reading to support mental wellness and informed care.</p>
								</div>

								<div className="wrap-list grid-layout-3 gap-30">
									<div className="box-listings">
										<div className="image-wrap"><img src="/images/blog/blog-details-list-1.jpg" alt="occws" /></div>
										<div className="content">
											<ul className="meta"><li className="text-2">Guide</li></ul>
											<h5 className="title text-1 fw-5"><Link href="/blog-details" className="line-clamp-2">Understanding Anxiety: Practical Steps</Link></h5>
											<p className="text-1">Recognize signs and build routines that promote calm and resilience.</p>
										</div>
									</div>

									<div className="box-listings">
										<div className="image-wrap"><img src="/images/blog/blog-details-list-2.jpg" alt="occws" /></div>
										<div className="content">
											<ul className="meta"><li className="text-2">Article</li></ul>
											<h5 className="title text-1 fw-5"><Link href="/blog-details-2" className="line-clamp-2">CBT Basics: Reframing Thought Patterns</Link></h5>
											<p className="text-1">A simple framework for noticing and reshaping unhelpful thoughts.</p>
										</div>
									</div>

									<div className="box-listings">
										<div className="image-wrap"><img src="/images/blog/blog-details-list-4.jpg" alt="occws" /></div>
										<div className="content">
											<ul className="meta"><li className="text-2">Checklist</li></ul>
											<h5 className="title text-1 fw-5"><Link href="/blog-grid" className="line-clamp-2">Preparing for Your First Session</Link></h5>
											<p className="text-1">What to bring, what to expect, and how to get the most from therapy.</p>
										</div>
									</div>
								</div>

								<div className="heading-section text-center mt-40">
									<p className="description text-1 lh-30">Looking for more? Explore our news & blog for additional insights.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="/blog-grid"><span>Browse Articles</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
