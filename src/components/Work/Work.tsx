"use client";
import React from 'react';
import styles from './Work.module.scss';
import { TextCard } from '../TextCard';
import Image from 'next/image';

export type WorkProps = {
	// types...
}

const Work: React.FC<WorkProps>  = ({}) => {
	return (
		<div className={`${styles.work} container mx-auto`}>
			<div className={styles.workText}>
				<div className="titleSection">
					Work together,
					wherever you work
				</div>
				<TextCard title="">
					In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
				</TextCard>
			</div>
			<div className={styles.image}>
				<Image src="/hybridwork.png" width={640} height={463} style={{ width: "100%", height: "auto" }} alt="work image" />
			</div>
 		</div>
	);
};

export default Work;
