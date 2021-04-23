import React from "react";
import "./Styles/global.scss";
import WarehousePage from "./Components/Pages/WarehousePage";
import InventoryPage from "./Components/Pages/InventoryPage";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import axios from "axios";

<<<<<<< HEAD
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
          /> */}
					{/* <Route path="/warehouse/add" render={routeProps => {
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
=======
class App extends React.Component {
  state = {
    warehouseList: [],
    inventoryList: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/warehouse')
    .then(res => {
      this.setState({
        warehouseList: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });

    axios.get('http://localhost:8080/inventory')
    .then(res => {
      this.setState({
        inventoryList: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }


  render () {
    if(!this.state.inventoryList.length || !this.state.warehouseList.length) {
      return <h1 className="loading">Loading...</h1>
    }
>>>>>>> 7763cdaa54bb60dbd379a8349bb0f29c940b785a

    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/warehouse" />
            </Route>

            <Route path="/warehouse" render={routeProps => {
              return <WarehousePage
              {...routeProps} 
              warehouseList={this.state.warehouseList}
              inventoryList={this.state.inventoryList}
              />}}

            />
            <Route path="/inventory" render={routeProps => {
              return <InventoryPage
              {...routeProps}
              warehouseList={this.state.warehouseList}
              inventoryList={this.state.inventoryList} 
              />}}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
