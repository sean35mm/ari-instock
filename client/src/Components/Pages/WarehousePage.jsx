import React from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import EditWarehouse from "../EditWarehouse/EditWarehouse";
import WarehouseAdd from "../WarehouseAdd/WarehouseAdd";
import WarehouseList from "../WarehouseList/WarehouseList";
import { Route } from "react-router-dom";
import WarehouseModal from "../Modals/WarehouseModal";
import axios from "axios";

export default function WarehousePage(props) {
  let handleDelete = () => {
    const {
      match: { params },
    } = this.props;
    const warehouseId = params.id;
    axios.delete(`/warehouse/${warehouseId}`);
  };

  return (
    <div>
<<<<<<< HEAD
      <Route
        path="/warehouse"
        exact
        render={(routeProps) => {
          return (
            <WarehouseList
              {...routeProps}
=======
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

          <Route path="/warehouse/add" render={routeProps => {
            return <WarehouseAdd
              {...routeProps}
              inventorylist={props.inventoryList}
>>>>>>> b6910524bdc30c50328d9e6927e897188aaf38cd
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

<<<<<<< HEAD
      <Route
        exact
        path="/warehouse/:id"
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

      <WarehouseModal onDelete={handleDelete} />
=======
          <Route
            path="/warehouse/:id" exact
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

          {/* <WarehouseModal onDelete={handleDelete} /> */}

>>>>>>> b6910524bdc30c50328d9e6927e897188aaf38cd
    </div>
  );
}
