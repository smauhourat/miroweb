"use client";
import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { motion } from 'motion/react';

export type HeroProps = unknown

const Hero: React.FC<HeroProps>  = () => {
	return (
		<div className={`${styles.hero} container mx-auto`}>
			<div className={styles.textSection}>
				<div className={styles.information}>
					<motion.h1 
					// transition={{ duration: 0.25 }} whileInView={{ opacity: 1 }}  initial={{ scale: 0 }} animate={{scale:1}} 
					className={`${styles.headline} font-[inter] font-bold leading-[56px] tracking-[-0.5px] text-[38px]`}>Take <span>ideas</span> from better <span>to best</span></motion.h1>
					<p>Miro is your teams visual platform to connect, collaborate, and create — together.</p>
					<a href=""></a>
				</div>
				<div className={styles.signUp}>
					<input type="text" placeholder="Enter your work email" />
					<input type="button" value="Sign up free ->"/>
					<p>Collaborate with your team within minutes</p>
				</div>
			</div>
			<motion.div className={styles.image} 
				// transition={{ duration: 0.05 }}
				// initial={{ opacity: 0, scale: 0 }}
				// animate={{ opacity: 1, scale: 1 }}
				>
				<Image src="/headerimage.png" width={640} height={463} style={{ width: "100%", height: "auto" }} alt="hero image" />
			</motion.div>
 		</div>
	);
};

export default Hero;
