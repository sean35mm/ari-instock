import React from 'react';
import '../WarehouseCard/WarehouseCard.scss'
import DeleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../Assets/Icons/edit-24px.svg';
import ChevronIcon from '../../Assets/Icons/chevron_right-24px.svg';


function WarehouseCard(props) {
    return (
        <>
            <div className="warehouseList__card">
                <div className="warehouseList__card-text-container">
                    <div className="warehouseList__card-sub-container">
                        <h3 className="warehouseList__card-title">WAREHOUSE</h3>
                        <a className="warehouseList__card-link">
                            <p className="warehouseList__card-content warehouseList__card-location">Manhattan</p>
                            <img className="warehouseList__icon" src={ChevronIcon} />
                        </a>
                    </div>

                    <div className="warehouseList__card-sub-container">
                        <h3 className="warehouseList__card-title">CONTACT NAME</h3>
                        <p className="warehouseList__card-content warehouseList__card-content-mobile">Parmin Ahuja</p>
                        <p className="warehouseList__card-content warehouseList__card-content-tablet">503 Broadway, New York, USA</p>
                    </div>

                    <div className="warehouseList__card-sub-container">
                        <h3 className="warehouseList__card-title">ADDRESS</h3>
                        <p className="warehouseList__card-content warehouseList__card-content-mobile">503 Broadway, New York, USA</p>
                        <p className="warehouseList__card-content warehouseList__card-content-tablet">Parmin Ahuja</p>
                    </div>

                    <div className="warehouseList__card-sub-container">
                        <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
                        <p className="warehouseList__card-content">+1 (629) 555-0129</p>
                        <p className="warehouseList__card-content">paulja@instock.com</p>
                    </div>
                </div>

                <div className="warehouseList__card-image-container">
                    <img className="warehouseList__card-edit-button" src={DeleteIcon} />
                    <img className="warehouseList__card-edit-button" src={EditIcon} />
                </div>
            </div>
        </>
    )
}

export default WarehouseCard;