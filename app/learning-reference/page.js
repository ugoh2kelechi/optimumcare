import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function LearningReferencePage() {
	return (
		<>
			<Layout breadcrumbTitle="Learning Reference">
				<section className="section-learning-reference tf-spacing-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-center">
									<p className="text-2 sub">Learning Reference</p>
									<h3>Reference Links</h3>
									<p className="description text-1 lh-30">Curated publications and studies related to ADHD assessment, treatment, and objective measures.</p>
								</div>

								<div className="ref-table">
									<div className="ref-header text-1 fw-6">Reference</div>
									<div className="ref-header text-1 fw-6">Links</div>

									{[
										{ pub: 'BMC Psychiatry', title: 'Study of user experience of an objective test (QbTest) to aid ADHD assessment and medication management: a multi-methods approach.', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5301349/' },
										{ pub: 'CHILD AND ADOLESCENT MENTAL HEALTH', title: 'Innovations in Practice: an objective measure of attention, impulsivity and activity reduces time to confirm attention deficit/hyperactivity disorder diagnosis in children – a completed audit cycle.', href: 'https://acamh.onlinelibrary.wiley.com/doi/abs/10.1111/camh.12140' },
										{ pub: 'JOURNAL OF CHILD PSYCHOLOGY AND PSYCHIATRY AND ALLIED DISIPLINES', title: 'The impact of a computerized test of attention and activity (QbTest) on diagnostic decision-making in children and young people with suspected attention deficit hyperactivity disorder: single-blind randomized controlled trial.', href: 'https://pubmed.ncbi.nlm.nih.gov/29700813/' },
										{ pub: 'EAST MIDLANDS ACADEMIC HEALTH NETWORK', title: 'Faster and more cost-effective ADHD diagnosis for children', href: 'https://www.ahsnnetwork.com/case-study/transforming-adhd-care-in-the-east-midlands-qbtest' },
										{ pub: 'BEHAVIORAL AND BRAIN FUNNCTIONS', title: 'Attention-deficit hyperactivity disorder (ADHD) and glial integrity: An exploration of associations of cytokines and kynurenine metabolites with symptoms and attention.', href: 'https://behavioralandbrainfunctions.biomedcentral.com/articles/10.1186/1744-9081-6-32' },
										{ pub: 'JOURNALS OF ATTENTION DISORDER', title: 'ADHD and the QbTest: Diagnostic Validity of QbTest.' },
										{ pub: 'THE PSYCHIATRIST', title: 'Assessments for attention-deficit hyperactivity disorder: use of objective measurements.' },
										{ pub: 'BEHAVIORAL AND BRAIN FUNCTIONS', title: 'Preliminary evidence for altered motion tracking based hyperactivity in ADHD siblings.' },
										{ pub: 'ACTA PSYCHIATRICA SCANDINAVICA', title: 'Objective measurement of motor activity during cognitive performance in adults with attention-deficit/ hyperactivity disorder.' },
										{ pub: 'BEHAVIORAL AND BRAIN FUNCTIONS', title: 'Assessing ADHD symptoms in children and adults: evaluating the role of objective measures.' },
										{ pub: 'PSYCHIATRY RESEARCH', title: 'The incremental validity of a computerized assessment added to clinical rating scales to differentiate adult ADHD from autism spectrum disorder.' },
										{ pub: 'PSYCH JOURNAL', title: 'Measuring adult Attention Deficit Hyperactivity Disorder using the Quantified Behavior Test Plus.' },
										{ pub: 'JOURNAL OF CLINICAL PSYCHOPHARMACOLOGYY', title: 'Does atomoxetine improve executive function, inhibitory control, and hyperactivity? Results from a placebo-controlled trial using quantitative measurement technology.' },
										{ pub: 'JOURNAL OF CHILD AND ADOLESCENT PSYCHOPHARMACOLOGY', title: 'Modulation of attention-deficit/hyperactivity disorder symptoms by short- and long-acting methylphenidate over the course of a day.' },
										{ pub: 'CHILD AND ADOLESCENT MENTAL HEALTH', title: 'Early identification of stimulant treatment responders, partial responders and non-responders using objective measures in children and adolescents with hyperkinetic disorder.' },
									].map((item, idx) => (
										<>
											<div className="ref-cell text-1" key={`pub-${idx}`}>{item.pub}</div>
											<div className="ref-cell text-1" key={`title-${idx}`}>
												{item.href ? (
													<Link href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</Link>
												) : (
													item.title
												)}
											</div>
										</>
									))}
								</div>

								<div className="heading-section text-center mt-40">
									<p className="description text-1 lh-30">If you have official links for these references, share them and we will attach them here.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
