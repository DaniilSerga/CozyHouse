import React, { useRef, useState } from 'react';
import classes from './DonationSection.module.scss';
import donationImage from '../../assets/images/donationDog.webp';
import creditCardImage from '../../assets/icons/creditCard.svg';

const DonationSection = () => {
    const [isNotificationDisplayed, setNotificationDisplaying] = useState(false);
    const [notificationTimeoutId, setNotificationTimeoutId] = useState(0);
    const creditCard = useRef(null);

    const handleCopying = () => {
        clearTimeout(notificationTimeoutId);
        setNotificationDisplaying(false);
        navigator.clipboard.writeText(creditCard.current.textContent)
            .then(() => {   
                setNotificationDisplaying(true);
                setNotificationTimeoutId(setTimeout(() => {
                    setNotificationDisplaying(false);
                }, 3000));
            }, () => {
                alert('Some error occured while copying, try again later');
            })
    }

    return (
        <section className={classes.donationSectionContainer}>
            <div className={classes.contentContainer}>
                <div className={classes.imageContainer}>
                    <img src={donationImage} alt='Donation section'/>
                </div>
                <article className={classes.content}>
                    <h3 className={classes.header}>You can also make a donation</h3>
                    <p className={classes.subHeader}>Name of the bank / Type of bank account</p>
                    <div className={classes.creditCard} onClick={() => handleCopying()}>
                        <img src={creditCardImage} alt='Credit card'/>
                        <p className={classes.creditCardNumber} ref={creditCard} >8380 2880 8028 8791 7435</p>
                    </div>
                    <p className={classes.legalInfo} >Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </article>
            </div>

            { isNotificationDisplayed &&
                <div className={classes.notificationWrapper}>
                    <p>Copied to clipboard!</p>
                </div>
            }
        </section>
    )
}

export default DonationSection;