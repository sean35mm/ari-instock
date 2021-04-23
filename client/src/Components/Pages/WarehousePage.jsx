import React, { Component } from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import EditWarehouse from "../EditWarehouse/EditWarehouse";
import WarehouseList from "../WarehouseList/WarehouseList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function WarehousePage(props) {
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
