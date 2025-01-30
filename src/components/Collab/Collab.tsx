"use client";
import React from 'react';
import styles from './Collab.module.scss';
import { TextCard } from '../TextCard';
import { motion } from 'motion/react';

export type CollabProps = unknown

const Collab: React.FC<CollabProps>  = () => {
	return (
		<div className={`${styles.collab} container mx-auto`}>
 			<motion.div
				transition={{ duration: 0.1 }}
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}			
			className={styles.banner}>
				<span className={styles.sticker}>YOUR IDEA START HERE</span>
			</motion.div>
			<div className={styles.titleSection}>
				Collaborate without constraints
			</div>
			<div id="solutions" className={styles.textCards}>
				<TextCard title="Free forever">
					Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
					pricing plans for more features.
				</TextCard>
				<TextCard title="Easy integrations">
					Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace.
				</TextCard>
				<TextCard title="Security First">
					We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center.
				</TextCard>
			</div>
			<div className={styles.signUp}>
				<input type="button" value="Sign up free ->" />
			</div>
			
 		</div>
	);
};

export default Collab;
