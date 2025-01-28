"use client";
import React from 'react';
import styles from './TextCard.module.scss';

export type TextCardProps = {
	title: string,
	children: string
}

const TextCard: React.FC<TextCardProps>  = ({ title, children }) => {
	return (
		<div className={styles.textcard}>
			<h1>{title}</h1>
			<p>
				{children}
			</p>
 		</div>
	);
};

export default TextCard;
