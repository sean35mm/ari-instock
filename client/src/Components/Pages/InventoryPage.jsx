import React, { Component } from 'react';
import InventoryList from "../InventoryList/InventoryList"
import InventoryEdit from "../InventoryEdit/InventoryEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class InventoryPage extends Component {
    render() {
      
      const warehouseNames = this.props.warehouseList.map((warehouse) => {return {id: warehouse.id, name: warehouse.name}});
        return (
            <div>
            <Router>
              <Switch>        
    
                <Route path="/inventory" exact render={routeProps => {
                  return <InventoryList
                  {...routeProps}
                  inventoryList={this.props.inventoryList} 
                  />}}
                />
                {/* <Route path="/inventory/:id" exact render={routeProps => {
                  return <InventoryDetail
                  {...routeProps} 
                  />}}
                /> */}

                <Route path="/inventory/:id/edit" render={routeProps => {
                  return <InventoryEdit
                  {...routeProps}
                  warehouseNames={warehouseNames} 
                  />}}
                />
                
                {/* <Route path="/inventory/add" render={routeProps => {
                  return <InventoryAdd
                  {...routeProps} 
                  />}}
                /> */}
              </Switch>
            </Router>
          </div>
        )
    }
}

