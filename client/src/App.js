import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route path="/" exact render={routeProps => {
            return <Warehouse
            {...routeProps} 
            />}}
          />
          <Route path="/warehouse/:id" exact render={routeProps => {
            return <WarehouseDetail
            {...routeProps} 
            />}}
          />
          <Route path="/warehouse/:id/edit" render={routeProps => {
            return <WarehouseEdit
            {...routeProps} 
            />}}
          />
          <Route path="/warehouse/add" render={routeProps => {
            return <WarehouseAdd
            {...routeProps} 
            />}}
          />

          <Route path="/inventory" exact render={routeProps => {
            return <Inventory
            {...routeProps} 
            />}}
          />
          <Route path="/inventory/:id" exact render={routeProps => {
            return <InventoryDetail
            {...routeProps} 
            />}}
          />
          <Route path="/inventory/:id/edit" render={routeProps => {
            return <InventoryEdit
            {...routeProps} 
            />}}
          />
          <Route path="/inventory/add" render={routeProps => {
            return <InventoryAdd
            {...routeProps} 
            />}}
          />

        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
