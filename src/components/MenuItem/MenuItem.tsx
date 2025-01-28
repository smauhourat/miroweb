"use client";
import React, { useState } from 'react';
import styles from './MenuItem.module.scss';
import Link from 'next/link';

export type MenuItemProps = {
	href: string, 
	label: string, 
	activeItem: any, 
	onClick: any
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
