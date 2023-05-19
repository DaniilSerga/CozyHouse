import React from 'react';
import classes from './Footer.module.scss';
import footerImg from '../../assets/images/footerPuppy.webp';
import pinIcon from '../../assets/icons/pinIcon.svg';
import phoneIcon from '../../assets/icons/phoneIcon.svg';
import mailIcon from '../../assets/icons/mailIcon.svg';

const Footer = () => {
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerWrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.contactsSection}>
                        <h3 className={classes.title}>For questions and suggestions</h3>

                        <div className={classes.mailContainer}>
                            <div className={classes.iconContainer}>
                                <img src={mailIcon} alt='Mail' />
                            </div>
                            <p className={classes.descriptionText}>email@shelter.com</p>
                        </div>

                        <div className={classes.phoneContainer}>
                            <div className={classes.iconContainer}>
                                <img src={phoneIcon} alt='Phone number' />
                            </div>
                            <p className={classes.descriptionText}>+13 674 567 75 54</p>
                        </div>
                    </div>

                    <div className={classes.locationsSection}>
                        <h3 className={classes.title}>We are waiting for your visit</h3>

                        <div className={classes.locationContainer}>
                            <div className={classes.iconContainer}>
                                <img src={pinIcon} alt='Location' />
                            </div>
                            <p className={classes.descriptionText}>1 Central Street, Boston <br /> (entrance from the store)</p>
                        </div>

                        <div className={classes.locationContainer}>
                            <div className={classes.iconContainer}>
                                <img src={pinIcon} alt='Location' />
                            </div>
                            <p className={classes.descriptionText}>18 South Park, London</p>
                        </div>
                    </div>

                    <div className={classes.imageContainer}>
                        <img src={footerImg} alt='Footer section' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;