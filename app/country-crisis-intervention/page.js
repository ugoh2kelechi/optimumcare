import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function CountryCrisisInterventionPage() {
	const usNationals = [
		{ label: "Emergency", value: "911", href: "tel:911", icon: "icon-PhoneCall" },
		{ label: "988 Suicide & Crisis Lifeline", value: "988", href: "tel:988", icon: "icon-PhoneCall" },
		{ label: "National Suicide Prevention Lifeline", value: "1-800-273-8255", href: "tel:18002738255", icon: "icon-PhoneCall" },
		{ label: "National Crisis Text Line", value: "Text 741-741", href: "sms:741741", icon: "icon-PhoneCall" },
		{ label: "Lifeline", value: "988lifeline.org", href: "https://988lifeline.org", icon: "icon-Globe", external: true },
	]

	const paContacts = [
		{ name: "Allegheny County Department Of Human Services", phone: ["(412) 350-5701"], crisis: ["1-(888) 796-8226"], website: null },
		{ name: "Armstrong/Indiana Behavioral & Developmental Health Program", phone: ["(724) 548-3451"], crisis: ["1-(877) 333-2470"], website: null },
		{ name: "Beaver County Behavioral Health", phone: ["(724) 891-2827"], crisis: ["1-(800) 400-6180"], website: null },
		{ name: "Bedford-Somerset Developmental and Behavioral Health Services", phone: ["Bedford (814) 623-5166", "Somerset (814) 443-4891"], crisis: ["1-(866) 611-6467"], website: null },
		{ name: "Berks County MH/DD", phone: ["(610) 478-3271"], crisis: ["(610) 236-0530"], website: null },
		{ name: "Blair County MH/BH/ID Programs", phone: ["(814) 693-3023"], crisis: ["(814) 889-2141 Choose Option 1"], website: null },
		{ name: "Bradford/Sullivan MH/ID", phone: ["(570) 265-1760", "1-(800)-588-1828"], crisis: ["1-(800) 588-1828"], website: null },
		{ name: "Bucks County Dept. Of Mental Health/Developmental Programs", phone: ["Central & Upper Bucks (215) 345-2273", "Lower Bucks (215) 785-9765"], crisis: ["1-(800) 499-7455"], website: null },
		{ name: "Butler County MH/EI/ID Program", phone: ["(724) 284-5114"], crisis: ["1-(800) 292-3866"], website: null },
		{ name: "Cambria County Behavioral Health/Intellectual Disabilities Program", phone: ["(814) 535-8531", "Ebensburg Satellite Office (814) 472-4400"], crisis: ["1-(877) 268-9463"], website: null },
		{ name: "Cameron/Elk Counties Behavioral & Development Programs", phone: ["(814) 772-8016"], crisis: ["1-(800) 652-0562"], website: null },
		{ name: "Carbon-Monroe-Pike MH/DS", phone: ["Monroe County (570) 421-2901", "Carbon County (610) 377-0773", "Pike County (570) 296-6484"], crisis: ["1-(800) 652-0562"], website: null },
		{ name: "Centre County MH/ID/EI", phone: ["(814) 355-6786", "(814) 355-6744"], crisis: ["1-(800) 643-5432"], website: null },
		{ name: "Chester County Dept. Of Mental Health/Intellectual & Developmental", phone: ["(610) 344-6265"], crisis: ["Valley Creek Crisis Center (610) 280-3270"], website: null },
		{ name: "Clarion County MH/DD", phone: ["(814) 226-1080"], crisis: ["1-(800) 226-7223"], website: null },
		{ name: "CMSU Behavioral Health & Developmental Services", phone: ["(570) 275-5422"], crisis: ["1-(800) 222-9016"], website: null },
		{ name: "Community Connections of Clearfield/Jefferson Counties", phone: ["(814) 371-5100"], crisis: ["1-(800) 341-5040"], website: null },
		{ name: "Crawford County Human Services", phone: ["(814) 724-8380", "1-(877) 334-8793"], crisis: ["(814) 724-2732", "1-(800) 275-7009 Choose Option 2"], website: null },
		{ name: "Cumberland/Perry MH/IDD", phone: ["Cumberland County (717) 240-6320", "Perry County (866) 240-6320"], crisis: ["Camp Hill (717) 763-2222", "Carlisle Crisis (717) 243-6005", "All other Areas Crisis 1-(866) 350-4357"], website: null },
		{ name: "Dauphin County Mental Health/Intellectual Disabilities Program", phone: ["(717) 780-7050"], crisis: ["(717) 232-7511", "1-(888) 596-4447"], website: null },
		{ name: "Delaware County BH/ID", phone: ["(610) 713-2365"], crisis: ["1-(855) 889-7827"], website: null },
		{ name: "Erie County MH/ID", phone: ["(814) 451-6000"], crisis: ["(814) 456-2014", "1-(800) 300-9558"], website: null },
		{ name: "Fayette County Behavioral Health Administration", phone: ["(724) 430-1370"], crisis: ["(724) 437-1003"], website: null },
		{ name: "Forest/Warren Human Services", phone: ["Warren 1-(866) 641-3488", "Forest (814) 755-7995"], crisis: ["Weekdays 8:30 a.m. – 5:00 p.m. (814) 726-2100", "(814) 726-8413", "After 5:00 p.m./weekends/holidays (814) 723-2800", "1-(800) 406-1255"], website: null },
		{ name: "Franklin/Fulton MH/ID/EI", phone: ["(800) 841-3593"], crisis: ["Keystone (717) 264-2555", "True North Wellness 1-(866) 918-2555"], website: null },
		{ name: "Greene County Human Services", phone: ["1-(888) 317-7106"], crisis: ["1-(800) 417-9460"], website: null },
		{ name: "Juniata Valley – Juniata, Mifflin, Huntingdon Counties", phone: ["(717) 242-6467"], crisis: ["1-(800) 929-9583"], website: null },
		{ name: "Lackawanna/Susquehanna BH/ID/EI Programs", phone: ["(570) 346-5741"], crisis: ["Lackawanna County: (570) 348-6100", "Susquehanna County: (570) 278-6822"], website: null },
		{ name: "Lancaster County BH/DS", phone: ["(717) 299-8021"], crisis: ["(717) 394-2631"], website: null },
		{ name: "Lawrence County Mental Health & Developmental Services", phone: ["(724) 658-2538"], crisis: ["(724) 652-9000"], website: null },
		{ name: "Lebanon County MH/ID/EI", phone: ["(717) 274-3415"], crisis: ["(717) 274-3363"], website: null },
		{ name: "Lehigh County MH/ID/D&A/EI", phone: ["(610) 782-3200"], crisis: ["(610) 782-3127"], website: null },
		{ name: "Luzerne-Wyoming Counties Mental Health & Developmental Services", phone: ["1-(800) 816-1880"], crisis: ["Community Counseling Services (570) 552-6000"], website: null },
		{ name: "Lycoming/Clinton MH/ID", phone: ["Lycoming County: (570) 326-7895", "Clinton County: (570) 748-2262"], crisis: ["(570) 326-7895"], website: null },
		{ name: "McKean County Mental Health Services", phone: ["(814) 887-3350"], crisis: ["1-(800) 459-6568"], website: null },
		{ name: "Mercer County MH/DS", phone: ["(724) 662-2230"], crisis: ["(724) 662-2227"], website: null },
		{ name: "Montgomery County MH/DD/EI Program Office", phone: ["(610) 278-3642"], crisis: ["1-(855) 634-4673"], website: null },
		{ name: "Northampton County MH/EI/Dev. Prog. Div.", phone: ["(610) 829-4840"], crisis: ["(610) 252-9060"], website: null },
		{ name: "Northumberland County BH/ID Services", phone: ["(570) 495-2040"], crisis: ["1-(855) 313-4387"], website: null },
		{ name: "Philadelphia Dept Of BH & Intellectual Disability Svcs.", phone: ["1-(888) 545-2600"], crisis: ["(215) 686-6440"], website: null },
		{ name: "Potter County Human Services", phone: ["1-(800) 800-2560"], crisis: ["1-(877) 724-7142"], website: null },
		{ name: "Schuylkill County Administrative Offices Of MH/DS/D&A", phone: ["(570) 621- 2890"], crisis: ["1-(877) 993-4357"], website: null },
		{ name: "Tioga County Dept. Of Human Services", phone: ["(570) 724-5766"], crisis: ["(877) 724-7142"], website: null },
		{ name: "Venango County Mental Health & Developmental Services", phone: ["(814) 432-9100"], crisis: ["(814) 432-9111"], website: null },
		{ name: "Washington County BH/DS", phone: ["(724) 228-6832"], crisis: ["1-(877) 225-3567"], website: null },
		{ name: "Wayne County Office of Behavioral & Developmental Programs/EI", phone: ["1-(800) 353-6467"], crisis: ["1-(800) 836-6010"], website: null },
		{ name: "York/Adams MH/IDD", phone: ["(717) 771-9618", "1-(800) 441-2025"], crisis: ["Wellspan York Hospital Crisis (717) 851-5320", "Wellspan Gettysburg Hospital Crisis (717) 334-2121", "TrueNorth Hanover Hospital Crisis (717) 637-3711", "TrueNorth Memorial Hospital Crisis (717) 632-4900", "TrueNorth Mobile Crisis (717) 637-7633 or 1-(866) 325-0339"], website: null },
	]

	const telHref = (str) => `tel:${str.replace(/[^0-9+]/g, "")}`

	return (
		<>
			<Layout breadcrumbTitle="Country Crisis Intervention">
				<section className="section-contact tf-spacing-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section text-center">
									<p className="text-2 sub">Immediate Support</p>
									<h3>Emergency and Crisis Resources</h3>
									<p className="description text-1 lh-30">If you or someone you know is in danger, call local emergency services right away.</p>
								</div>
								<div className="grid-layout-3 gap-30">
									<div className="box-contact">
										<h5 className="title">United States</h5>
										<ul className="list-info">
											{usNationals.map((item, i) => (
												<li key={`us-${i}`}><i className={item.icon} />{item.label}: {item.href ? (
													<Link href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{item.value}</Link>
												) : (
													<span>{item.value}</span>
												)}</li>
											))}
										</ul>
									</div>
									<div className="box-contact">
										<h5 className="title">Canada</h5>
										<ul className="list-info">
											<li><i className="icon-PhoneCall" />Emergency: <Link href="tel:911">911</Link></li>
											<li><i className="icon-PhoneCall" />Talk Suicide Canada: <Link href="tel:18334564566">1-833-456-4566</Link></li>
											<li><i className="icon-Globe" />talksuicide.ca: <Link href="https://www.talksuicide.ca" target="_blank">talksuicide.ca</Link></li>
										</ul>
									</div>
									<div className="box-contact">
										<h5 className="title">United Kingdom</h5>
										<ul className="list-info">
											<li><i className="icon-PhoneCall" />Emergency: <Link href="tel:999">999</Link></li>
											<li><i className="icon-PhoneCall" />Samaritans: <Link href="tel:116123">116 123</Link></li>
											<li><i className="icon-Globe" />samaritans.org: <Link href="https://www.samaritans.org" target="_blank">samaritans.org</Link></li>
										</ul>
									</div>
								</div>

								<div className="heading-section text-center mt-40">
									<p className="text-2 sub">Pennsylvania County Crisis Contacts</p>
									<h3>Local County Crisis Services</h3>
									<p className="description text-1 lh-30">Contact your county for non-emergency behavioral health support and crisis response.</p>
								</div>

								<div className="grid-layout-3 gap-30 mt-30">
									{paContacts.map((c, idx) => (
										<div className="box-contact" key={`pa-${idx}`}>
											<h5 className="title">{c.name}</h5>
											<ul className="list-info">
												{c.phone && c.phone.length > 0 && (
													<li><i className="icon-PhoneCall" />Phone: {c.phone.map((p, i) => (
														<span key={`p-${i}`}>{i > 0 ? " | " : ""}<Link href={telHref(p)}>{p}</Link></span>
													))}</li>
												)}
												{c.crisis && c.crisis.length > 0 && (
													<li><i className="icon-PhoneCall" />Crisis Services: {c.crisis.join(" | ")}</li>
												)}
												{c.website && (
													<li><i className="icon-Globe" />Visit Website: <Link href={c.website} target="_blank" rel="noopener noreferrer">Open</Link></li>
												)}
											</ul>
										</div>
									))}
								</div>

								<div className="heading-section text-center mt-40">
									<p className="description text-1 lh-30">If your area is not listed, contact local emergency services for immediate assistance or reach out to us for guidance.</p>
									<Link className="tf-btn style-default btn-color-secondary pd-40" href="/contact-us"><span>Get Non‑Emergency Support</span></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
