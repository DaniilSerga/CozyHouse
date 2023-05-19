import React from 'react';
import classes from './DonationSection.module.scss';
import donationImage from '../../assets/images/donationDog.webp';
import creditCardImage from '../../assets/icons/creditCard.svg';

const DonationSection = () => {
    return (
        <div className={classes.donationSectionContainer}>
            <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                    <img src={donationImage} alt='Donation section'/>
                </div>
                <div className={classes.content}>
                    <h3 className={classes.header}>You can also make a donation</h3>
                    <p className={classes.subHeader}>Name of the bank / Type of bank account</p>
                    <div className={classes.creditCard}>
                        <img src={creditCardImage} alt='Credit card'/>
                        <p>8380 2880 8028 8791 7435</p>
                    </div>
                    <p className={classes.legalInfo}>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
        </div>
    )
}

export default DonationSection;