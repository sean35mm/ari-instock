import React from "react";
import "./Styles/global.scss";
import WarehousePage from "./Components/Pages/WarehousePage";
import InventoryPage from "./Components/Pages/InventoryPage";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import axios from "axios";

class App extends React.Component {
	state = {
		warehouseList: [],
		inventoryList: [],
	};

	componentDidMount() {
		axios
			.get("http://localhost:8080/warehouse")
			.then((res) => {
				this.setState({
					warehouseList: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get("http://localhost:8080/inventory")
			.then((res) => {
				this.setState({
					inventoryList: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		if (!this.state.inventoryList.length || !this.state.warehouseList.length) {
			return <h1 className="loading">Loading...</h1>;
		}

		return (
			<div>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Redirect to="/warehouse" />
						</Route>

						<Route
							path="/warehouse"
							render={(routeProps) => {
								return (
									<WarehousePage
										{...routeProps}
										warehouseList={this.state.warehouseList}
										inventoryList={this.state.inventoryList}
									/>
								);
							}}
						/>
						<Route
							path="/inventory"
							render={(routeProps) => {
								return (
									<InventoryPage
										{...routeProps}
										warehouseList={this.state.warehouseList}
										inventoryList={this.state.inventoryList}
									/>
								);
							}}
						/>
					</Switch>
					<Footer />
				</Router>
			</div>
		);
	}
}
export default App;
