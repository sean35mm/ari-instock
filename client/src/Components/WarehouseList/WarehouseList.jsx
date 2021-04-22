import React from 'react';
import WarehouseCard from '../WarehouseCard/WarehouseCard';
import '../WarehouseList/WarehouseList.scss';
import SortIcon from '../../Assets/Icons/sort-24px.svg';
import axios from 'axios';


class WarehouseList extends React.Component {
    expressURL = "http://localhost:8080"
    warehouseListURL = "/warehouse"

    state = {
        warehouselist: []
    }

    componentDidMount() {
        document.title = "Warehouses in North America"

        axios.get(this.expressURL + this.warehouseListURL)
            .then(res => this.setState(
                {
                    warehouselist: res.data
                }
            ))

            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (!this.state.warehouselist) {
            return <div></div>
        }

        return (
            <>
                <section className="warehouseList">
                    <div className="warehouseList__title-container">
                        <h2 className="warehouseList__title">Warehouses</h2>
                        <div className="warehouseList__search-subcontainer">
                            <input className="warehouseList__search-bar" placeholder="Search..."></input>
                            <button className="warehouseList__add-button">+ Add New Warehouse</button>
                        </div>
                    </div>

                    <div className="warehouseList__tablet-title-container">
                        <div className="warehouseList__tablet-text-container">
                            <div className="warehouseList__tablet-sub-container">
                                <h3 className="warehouseList__tablet-title">WAREHOUSE</h3>
                                <img className="warehouseList__tablet-title-image" src={SortIcon}></img>
                            </div>

                            <div className="warehouseList__tablet-sub-container">
                                <h3 className="warehouseList__tablet-title">ADDRESS</h3>
                                <img className="warehouseList__tablet-title-image" src={SortIcon}></img>
                            </div>

                            <div className="warehouseList__tablet-sub-container">
                                <h3 className="warehouseList__tablet-title">CONTACT NAME</h3>
                                <img className="warehouseList__tablet-title-image" src={SortIcon}></img>
                            </div>

                            <div className="warehouseList__tablet-sub-container">
                                <h3 className="warehouseList__tablet-title">CONTACT INFORMATION</h3>
                                <img className="warehouseList__tablet-title-image" src={SortIcon}></img>
                            </div>
                        </div>

                        <div className="warehouseList__tablet-misc-container">
                            <h3 className="warehouseList__tablet-title">ACTIONS</h3>
                        </div>
                    </div>

                    <div className="warehouseList__warehouse-cards">
                        {this.state.warehouselist.map(warehouse =>
                            <WarehouseCard
                                key={warehouse.id}
                                id={warehouse.id}
                                city={warehouse.city}
                                address={warehouse.address}
                                name={warehouse.contactName}
                                number={warehouse.contactNumber}
                                email={warehouse.contactEmail}
                            />)}
                    </div>

                </section>

            </>
        )
    }
}

export default WarehouseList;