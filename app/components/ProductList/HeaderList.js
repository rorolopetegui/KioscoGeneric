import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PromosContent from '../../content/PromosContent';
import Promos from '../Promos/Promos';
import SendButton from '../Buttons/SendButton';
import { BackButton, PromoButton, CategoryTitle, ProductsTitle, CheckoutTitle } from '../../texts/productListHeader';

class HeaderList extends Component {
    state = {
        menuName: "Name Of Category",
    };
    backButton = () => {
        window.location.assign("/");
    }

    render() {
        const { classes } = this.props;
        const { menuName } = this.state;
        return (
            <div style={classes.container}>
                <div style={classes.containerPromos}>
                    <Promos classes={classes} promos={PromosContent} maxPage={PromosContent.length} />
                </div>
                <div style={classes.containerSubHeader}>
                    <div style={classes.containerLogo}>
                        <img
                            src={require(`../../images/Logo.png`)}
                            style={classes.imgLogo}
                        />
                    </div>
                    <div style={classes.containerTitleSection}>
                        <h1 style={classes.menuName}>{menuName}</h1>
                    </div>
                    <div style={classes.containerButtonBack}>
                        <SendButton classes={classes.button} action={this.backButton.bind(this)} enabled={true}>
                            {BackButton}
                        </SendButton>
                        <SendButton classes={classes.button} action={this.backButton.bind(this)} enabled={true}>
                            {PromoButton}
                        </SendButton>
                    </div>
                </div>
                <div
                    style={classes.containerHeaderHelper}
                >
                    <div
                        style={classes.categoryTitleContainer}
                    >
                        <span
                            style={classes.textTitle}
                        >
                            {CategoryTitle}
                        </span>
                    </div>
                    <div
                        style={classes.productsTitleContainer}
                    >
                        <span
                            style={classes.textTitle}
                        >
                            {ProductsTitle}
                        </span>
                        <img
                            src={require(`../../images/bannerTitlesList.jpg`)}
                            alt="Banner"
                            style={classes.imgBanner}
                        />
                    </div>
                    <div
                        style={classes.checkoutTitleContainer}
                    >
                        <span
                            style={classes.textTitle}
                        >
                            {CheckoutTitle}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default HeaderList;
