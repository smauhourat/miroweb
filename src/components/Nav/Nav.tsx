"use client";
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from './Nav.module.scss';
import { openSans, inter } from '@/utils';
import Image from 'next/image';
import { MenuItem } from '../MenuItem';

export type NavProps = {
	// types...
}

const Nav: React.FC<NavProps>  = ({}) => {
	
	const pathname = usePathname();
	const [menuIsVisible, setMenuIsVisible] = useState(false)
	const toggleMenu = () => {
		console.log('toggle')
		setMenuIsVisible(!menuIsVisible)
	}

	// Actualiza el ítem activo basado en la ruta actual
	useEffect(() => {
		if (pathname === '/') setActiveItem('products');
			else if (pathname === '/solutions') setActiveItem('solutions');
			else if (pathname === '/resources') setActiveItem('resources');
			else if (pathname === '/enterprise') setActiveItem('enterprise');
			else if (pathname === '/pricing') setActiveItem('pricing');
	}, [pathname]);

	// Estado para guardar el ítem activo
	const [activeItem, setActiveItem] = useState('');

	// Función para manejar el clic en un ítem del menú
	const handleClick = (item) => {
		setActiveItem(item);
	};


	return (
		<div className={styles.nav}>
			{menuIsVisible ? (
				<div className={styles.navMobile}>
					<span className={`${styles.close} icon icon-x-circle`} onClick={toggleMenu}></span>
					<div className={styles.container}>
						<div className={styles.menu}>
							<ul className={openSans.className}>
								<MenuItem 
									href="/products"
									label="Products"
									activeItem={activeItem}
									onClick={handleClick}
								 />
								<MenuItem 
									href="/solutions"
									label="Solutions"
									activeItem={activeItem}
									onClick={handleClick}
								/>
								<MenuItem 
									href="/resources"
									label="Resources"
									activeItem={activeItem}
									onClick={handleClick}								
								/>
								<MenuItem 
									href="/enterprise"
									label="Enterprise"
									activeItem={activeItem}
									onClick={handleClick}								
								/>
								<MenuItem 
									href="/pricing"
									label="Pricing"
									activeItem={activeItem}
									onClick={handleClick}								
								/>
							</ul>
						</div>
						<div className={styles.contact}>
							<ul>
								<li>+54 11 5487 6598</li>
								<li>info@miro.com</li>
							</ul>
						</div>
						<div className={styles.address}>
							<ul>
								<li>Viamonte 4887 - CABA</li>
								<li>Argentina</li>
							</ul>
						</div>
						<div className={styles.social}>
							<ul>
								<li>
									<span className={`${styles.icon} icon icon-twitter`}></span>
								</li>
								<li>
									<span className={`${styles.icon} icon icon-facebook`}></span>
								</li>
								<li>
									<span className={`${styles.icon} icon icon-linkedin`}></span>
								</li>
								<li>
									<span className={`${styles.icon} icon icon-instagram`}></span>
								</li>
								<li>
									<span className={`${styles.icon} icon icon-youtube `}></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : (
				null
			)}
			<div className={styles.navDesktop}>
				<div className={styles.containerDesktop}>
					<Image src="logo.svg" alt="logo" width={91} height={32} />
					<div className={styles.menuDesktop}>
						<ul className={inter.className}>
							<MenuItem
								href="/products"
								label="Products"
								activeItem={activeItem}
								onClick={handleClick}
							/>
							<MenuItem
								href="/solutions"
								label="Solutions"
								activeItem={activeItem}
								onClick={handleClick}
							/>
							<MenuItem
								href="/resources"
								label="Resources"
								activeItem={activeItem}
								onClick={handleClick}
							/>
							<MenuItem
								href="/enterprise"
								label="Enterprise"
								activeItem={activeItem}
								onClick={handleClick}
							/>
							<MenuItem
								href="/pricing"
								label="Pricing"
								activeItem={activeItem}
								onClick={handleClick}
							/>
						</ul>
					</div>
					<span className={`${styles.burguer} icon icon-burguer`} onClick={toggleMenu}></span>
				</div>
			</div>			
 		</div>
	);
};

export default Nav;
