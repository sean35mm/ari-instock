import '../WarehouseAdd/WarehouseAdd.scss';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import backLogo from "../../Assets/Icons/arrow_back-24px.svg"
import errorIcon from "../../Assets/Icons/error-24px.svg"

class WarehouseAdd extends React.Component {

    state = {
        warehousecheck: false,
        addresscheck: false,
        citycheck: false,
        countrycheck: false,
        namecheck: false,
        positioncheck: false,
        numbercheck: false,
        emailcheck: false,
        numbercheckStr: false,
        emailcheckStr: false
    }


    SubmitForm = (e) => {
        e.preventDefault();
        let expressURL = "http://localhost:8080"
        let addWarehouse = "/warehouse/add";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/

        if (e.target.warehouseName.value === "") {
            this.setState({ warehousecheck: true })
        } else if (e.target.address.value === "") {
            this.setState({ addresscheck: true })
        } else if (e.target.city.value === "") {
            this.setState({ citycheck: true })
        } else if (e.target.country.value === "") {
            this.setState({ countrycheck: true })
        } else if (e.target.contactName.value === "") {
            this.setState({ namecheck: true })
        } else if (e.target.contactPosition.value === "") {
            this.setState({ positioncheck: true })
        } else if (e.target.contactNumber.value === "") {
            this.setState({ numbercheck: true, numbercheckStr: false})
        } else if (e.target.contactEmail.value === "") {
            this.setState({ emailcheck: true, emailcheckStr: false })
        } else if (!emailRegex.test(e.target.contactEmail.value)) {
            this.setState({ emailcheckStr: true, emailcheck: false })
        } else if (!phoneRegex.test(e.target.contactNumber.value)) {
            this.setState({ numbercheckStr: true, numbercheck: false })
        } else {
            alert("Warehouse Created");

            this.setState({
                warehousecheck: false,
                addresscheck: false,
                citycheck: false,
                countrycheck: false,
                namecheck: false,
                positioncheck: false,
                numbercheck: false,
                emailcheck: false
            })

            axios.post(expressURL + addWarehouse,
                {
                    name: e.target.warehouseName.value,
                    address: e.target.address.value,
                    city: e.target.city.value,
                    country: e.target.country.value,
                    contactName: e.target.contactName.value,
                    position: e.target.contactPosition.value,
                    phone: e.target.contactNumber.value,
                    email: e.target.contactEmail.value
                })

            this.props.history.push("/warehouse");
        }
    }

    render() {
        return (
            <>
                <section className="warehouseAdd">
                    <div className="warehouseAdd__nav">
                        <Link to="/warehouse"><img className="warehouseAdd__nav-back-button" src={backLogo} alt="button for going back" /></Link>
                        <h2 className="warehouseAdd__nav-title">Add New Warehouse</h2>
                    </div>

                    <form className="warehouseAdd__form" onSubmit={(e) => this.SubmitForm(e)}>
                        <div className="warehouseAdd__form-container">

                            <div className="warehouseAdd__form-details">
                                <h3 className="warehouseAdd__sub-title">Warehouse Details</h3>

                                <div className="warehouseAdd__details-container">
                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">Warehouse Name</p>
                                        <input className="warehouseAdd__details-input" name="warehouseName" placeholder="Warehouse Name"></input>
                                        {this.state.warehousecheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}
                                    </div>

                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">Street Address</p>
                                        <input className="warehouseAdd__details-input" name="address" placeholder="Street Address"></input>
                                        {this.state.addresscheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}
                                    </div>

                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">City</p>
                                        <input className="warehouseAdd__details-input" name="city" placeholder="City"></input>
                                        {this.state.citycheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}
                                    </div>

                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">Country</p>
                                        <input className="warehouseAdd__details-input" name="country" placeholder="Country"></input>
                                        {this.state.countrycheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}
                                    </div>
                                </div>
                            </div>

                            <div className="warehouseAdd__form-contact">
                                <h3 className="warehouseAdd__sub-title">Contact Details</h3>

                                <div className="warehouseAdd__details-container">
                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">Contact Name</p>
                                        <input className="warehouseAdd__details-input" name="contactName" placeholder="Contact"></input>
                                        {this.state.namecheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}
                                    </div>

                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">Position</p>
                                        <input className="warehouseAdd__details-input" name="contactPosition" placeholder="Position"></input>
                                        {this.state.positioncheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}
                                    </div>

                                    <div className="warehouseAdd__details-subContainerr">
                                        <p className="warehouseAdd__details-title">Phone Number</p>
                                        <input className="warehouseAdd__details-input" name="contactNumber" placeholder="Phone Number"></input>
                                        {this.state.numbercheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}

                                        {this.state.numbercheckStr &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">Valid Phone Number Required</p>
                                            </div>}
                                    </div>

                                    <div className="warehouseAdd__details-subContainer">
                                        <p className="warehouseAdd__details-title">Email</p>
                                        <input className="warehouseAdd__details-input" name="contactEmail" placeholder="Email"></input>
                                        {this.state.emailcheck &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">This field is required</p>
                                            </div>}

                                        {this.state.emailcheckStr &&
                                            <div className="warehouseAdd__warning-container">
                                                <img src={errorIcon} alt="Error" className="warehouseAdd__warning-icon" />
                                                <p className="warehouseAdd__warning-field">Valid E-mail Required</p>
                                            </div>}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="warehouseAdd__buttons">
                            <div className="warehouseAdd__buttons-subContainer">
                                <Link to="/warehouse"><button className="warehouseAdd__cancel-button">Cancel</button></Link>
                                <button className="warehouseAdd__add-button" type="submit">+ Add Warehouse</button>
                            </div>
                        </div>
                    </form>


                </section>
            </>
        )
    }
}


export default WarehouseAdd;