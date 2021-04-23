import React, { Component } from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import EditWarehouse from "../EditWarehouse/EditWarehouse";
import WarehouseList from "../WarehouseList/WarehouseList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehouseModal from "../Modals/WarehouseModal";
import axios from "axios";

export default function WarehousePage(props) {

let handleDelete = () => {
  const {match: {params}} = this.props;
  const warehouseId = params.id;
  axios
    .delete(`/warehouse/${warehouseId}`)
}

  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/warehouse"
            exact
            render={(routeProps) => {
              return (
                <WarehouseList
                  {...routeProps}
                  warehouselist={props.warehouseList}
                />
              );
            }}
          />
          <Route
            path="/warehouse/:id"
            exact
            render={(routeProps) => {
              return (
                <WarehouseDetails
                  {...routeProps}
                  inventoryList={props.inventoryList}
                  warehouseList={props.warehouseList}
                />
              );
            }}
          />

          {/* <Route path="/warehouse/:id/edit" render={routeProps => {
                        return <EditWarehouse
                            {...routeProps}
                        />
                    }}
                    /> */}

          <WarehouseModal onDelete={handleDelete}/>

          {/* <Route path="/warehouse/add" render={routeProps => {
                        return <WarehouseAdd
                        {...routeProps} 
                        />}}
                    /> */}
        </Switch>
      </Router>
    </div>
  );
}