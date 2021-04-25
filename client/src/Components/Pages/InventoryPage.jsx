import React, { Component } from "react";
import InventoryList from "../InventoryList/InventoryList";
import InventoryEdit from "../InventoryEdit/InventoryEdit";
import InventoryAdd from "../InventoryAdd/InventoryAdd";
import InventoryDetails from "../InventoryDetails/InventoryDetails";
import { Route } from "react-router-dom";

export default class InventoryPage extends Component {
  render() {
    const warehouseNames = this.props.warehouseList.map((warehouse) => {
      return { id: warehouse.id, name: warehouse.name };
    });
    return (
      <div>
        <Route
          path="/inventory"
          exact
          render={(routeProps) => {
            return (
              <InventoryList
                {...routeProps}
                inventoryList={this.props.inventoryList}
              />
            );
          }}
        />
        
        <Route exact path="/inventory/add"  render={routeProps => {
          return <InventoryAdd
            {...routeProps}
            inventorylist={this.props.inventoryList}
            warehouselist={this.props.warehouseList}
          />
        }}
        />


        <Route
          path="/inventory/:id/edit"
          render={(routeProps) => {
            return (
              <InventoryEdit {...routeProps} warehouseNames={warehouseNames} />
              );
            }}
        />

            <Route
             exact
              path="/inventory/item/:id"
              render={(routeProps) => {
                return <InventoryDetails {...routeProps} />;
              }}
            />
      </div>
    );
  }
}
