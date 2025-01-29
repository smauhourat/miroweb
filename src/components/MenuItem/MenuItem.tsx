"use client";
import React from 'react';
import styles from './MenuItem.module.scss';


export type MenuItemProps = {
	href: string, 
	label: string, 
	activeItem: React.ReactNode, 
	onClick: (item: string) => void//React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

const MenuItem: React.FC<MenuItemProps>  = ({ href, label, activeItem, onClick }) => {

	return (
		<li className={activeItem === label?.toLowerCase() ? styles.active : ''}
			onClick={() => onClick(label.toLowerCase())}
			>
				<a href={href}>
					{label}
				</a>
		</li>
	)
};

export default MenuItem;
