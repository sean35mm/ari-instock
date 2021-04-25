import React from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import EditWarehouse from "../EditWarehouse/EditWarehouse";
import WarehouseAdd from "../WarehouseAdd/WarehouseAdd";
import WarehouseList from "../WarehouseList/WarehouseList";
import { Route } from "react-router-dom";

export default function WarehousePage(props) {

  return (
    <div>
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
        path="/warehouse/add"
        render={(routeProps) => {
          return <WarehouseAdd {...routeProps} />;
        }}
      />

      <Route
        exact
        path="/warehouse/warehouse/:id"
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

      <Route
        path="/warehouse/:id/edit"
        render={(routeProps) => {
          return (
            <EditWarehouse
              {...routeProps}
              warehouseList={props.warehouseList}
            />
          );
        }}
      />

    </div>
  );
}
