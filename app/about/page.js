import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function AboutPage() {
    return (
        <>
            <Layout breadcrumbTitle="About Us">
                <section className="section-box-about page-about">
                    <div className="tf-container">
                        <div className="row ">
                            <div className="col-12 ">
                                <div className="heading-section  ">
                                    <h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Welcome The
                                        Optimum Care Counseling and Wellness Solutions
                                    </h2>
                                    <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
                                        It is a trusted counseling and therapy center,
                                        staffed by experienced professionals dedicated to listening, <br /> supporting, and
                                        guiding you. We believe in everyone's potential to heal and grow with the right
                                        care.
                                    </p>
                                </div>
                                <div className="grid-layout-3 gap-20">
                                    <div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
                                        <div className="item wow fadeInLeft" data-wow-duration={1000} data-wow-delay="0s">
                                            <h3>Our Mission</h3>
                                            <p>At Optimum Care Counseling and Wellness Solutions, our mission is to provide compassionate, personalized mental
                                                health care that helps individuals and families overcome challenges. We are
                                                committed to creating a safe, supportive space for healing and growth, using
                                                evidence-based therapy to guide clients toward mental well-being.</p>
                                            <p>Our team of experienced therapists works with each client to develop tailored
                                                strategies for resilience and self-awareness. We aim to equip individuals
                                                with the tools they need to build healthier relationships, manage stress,
                                                and create lasting change.</p>
                                        </div>
                                    </div>
                                    <div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
                                        <div className="item wow fadeInLeft" data-wow-duration={1000} data-wow-delay="0.1s">
                                            <h3>Our Vision</h3>
                                            <p>Our vision is to be a leading center for mental health, where everyone has
                                                access to the care and support they need. We strive to create a world where
                                                mental health is prioritized, free from stigma, and where people feel
                                                empowered to seek help.</p>
                                            <p>We aim to build a community where seeking therapy is encouraged and
                                                supported. By promoting mental health awareness and providing high-quality
                                                care, we hope to make a lasting positive impact on the lives of our clients.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="wg-card wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
                                        <div className="item wow fadeInLeft" data-wow-duration={1000} data-wow-delay="0.2s">
                                            <h3>Welcome To Optimum care</h3>
                                            <p>The greatest gift you can give yourself is the freedom to be yourself.</p>
                                            <p>Therapy is not about escaping your problems, it’s about learning to navigate them.</p>
                                            <Link className="tf-btn style-default btn-color-secondary pd-20 mt-16" href="/book-appointment"><span>Book Appointment</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-divider mt-40 mb-24" />
                                <div className="heading-section ">
                                    <h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Important Notes</h3>
                                    <ul className="list-disc text-1 lh-30">
                                        <li>Copays, deductibles, and coinsurance may apply based on your plan.</li>
                                        <li>Authorization or referrals may be required by some insurers.</li>
                                        <li>Please bring your insurance card and photo ID to your first appointment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
