'use client'
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Hero1 from "../sections/Hero1"
import Hero2 from "../sections/Hero2"
import Hero3 from "../sections/Hero3"
import Hero4 from "../sections/Hero4"
import Hero5 from "../sections/Hero5"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header4 from "./header/Header4"
import OffcanvasMobileMenu from "./Offcanvas"
import Search from "./Search"
const Accordion = dynamic(() => import("../elements/collapseFunc"), { ssr: false })

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, hero, mainContentCls, breadcrumbAlt }) {
	const [scroll, setScroll] = useState(0)
	// Moblile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => setSearch(!isSearch)

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		const onDocClick = (e) => {
			const anchor = e.target.closest('a')
			if (!anchor) return
			const href = anchor.getAttribute('href') || ''
			// If using Bootstrap toggles (offcanvas, dropdown, etc.), prevent navigation to avoid page jumps
			if (anchor.hasAttribute('data-bs-toggle')) {
				e.preventDefault()
				return
			}
			// Only handle hash-only navigations that can cause jump-to-top
			if (href === '#' || href === '/#' || href === '') {
				e.preventDefault()
				return
			}
			// If the link is an in-page hash (e.g., '/#id' or '#id'), prevent default if target element does not exist
			if (href.startsWith('#') || href.startsWith('/#')) {
				const hash = href.split('#')[1]
				if (!hash) {
					e.preventDefault()
					return
				}
				const target = document.getElementById(hash)
				if (!target) {
					e.preventDefault()
				}
			}
		}

		window.addEventListener("scroll", onScroll)
		// Use capture phase so we can prevent default before React/Next.js handles the click
		document.addEventListener('click', onDocClick, true)
		return () => {
			window.removeEventListener("scroll", onScroll)
			document.removeEventListener('click', onDocClick, true)
		}
	}, [])
	return (
		<><div id="top" />
			<Accordion />
			<div id="wrapper">
				<Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />

				{hero == 1 && <Hero1 />}
				{hero == 2 && <Hero2 />}
				{hero == 3 && <Hero3 />}
				{hero == 4 && <Hero4 />}
				{hero == 5 && <Hero5 />}
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbAlt={breadcrumbAlt} />}

				<div className={mainContentCls ? mainContentCls : "main-content-2"}>
					{children}
				</div>

				{!footerStyle && < Footer2 />}
				{footerStyle == 1 ? < Footer1 /> : null}
				{footerStyle == 2 ? < Footer2 /> : null}
			</div>
			<OffcanvasMobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			<Search isSearch={isSearch} handleSearch={handleSearch} />
			<BackToTop target="#top" />
		</>
	)
}
