import React from "react";
import "./Styles/global.scss";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
import Inventory from "./Components/InventoryList/InventoryList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact render={routeProps => {
            return <WarehouseList
            {...routeProps} 
            />}}
          />
					<Route
						path="/warehouse"
						exact
						render={(routeProps) => {
							return <WarehouseDetails {...routeProps} />;
						}}
					/>
					<Route path="/warehouse/:id/edit" render={routeProps => {
            return <EditWarehouse
            {...routeProps} 
            />}}
          />
					{/* <Route path="/warehouse/add" render={routeProps => {
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
          /> */}
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
