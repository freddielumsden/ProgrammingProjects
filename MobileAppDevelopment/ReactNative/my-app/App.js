import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Button , TouchableHighlight} from "react-native";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			noClicks: 0,
			clickIncrement: 1,
			upgradeCost: 20,
            workerIncrement: 5,
            workerUpgradeCost: 1000,
            prestigeLevel: 0,
		};
        this.workers = [];
		this.screen = "screen2"
	}
	updateClicks = () => {
		this.setState({ counter: this.state.counter + 1 });
		this.setState({
			noClicks: Math.round(this.state.noClicks + this.state.clickIncrement),
		});
	};
	buyUpgrade = () => {
		if (this.state.noClicks >= this.state.upgradeCost) {
			this.setState({
				noClicks: Math.round(this.state.noClicks - this.state.upgradeCost),
				clickIncrement: this.state.clickIncrement * (2 ** ((this.state.prestigeLevel+2) / 2)),
				upgradeCost: Math.round((this.state.upgradeCost * 1.8) / 10) * 10,
			});
		}
	};
	buyWorker = () => {
		if (this.state.noClicks >= 1000) {
			this.setState({
				noClicks: Math.round(this.state.noClicks - 1000),
			});
			this.workers.push(setInterval(() => {
				this.setState({
					noClicks: this.state.noClicks + this.state.workerIncrement,
				});
			}, 1000));
		}
	};
    buyWorkerUpgrade = () => {
        if (this.state.noClicks >= this.state.workerUpgradeCost) {
            this.setState({
                noClicks: Math.round(this.state.noClicks - this.state.workerUpgradeCost),
                workerIncrement: this.state.workerIncrement * (2 ** ((this.state.prestigeLevel+2) / 2)),
                workerUpgradeCost: Math.round((this.state.workerUpgradeCost ** 1.5) / 10) * 10,
            });
            console.log(this.state.workerUpgradeCost)
        }
    };
    prestige = () => {
        if (this.state.noClicks >= ((this.state.prestigeLevel+1)*10) ** 4)
        this.setState({
            noClicks: 0,
            clickIncrement: 1,
            upgradeCost: 20,
            workerIncrement: 4,
            workerUpgradeCost: 1000,
            prestigeLevel: this.state.prestigeLevel + 1,
        });
        this.workers.forEach(worker => {
            clearInterval(worker);
        }
        );
        this.workers = [];
    }
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					resizeMode="cover"
					style={styles.backgroundImage}
					blurRadius={10}
					source={{
						width: 200,
						height: 300,
						uri: "https://picsum.photos/200/300?grayscale",
					}}
				>
					
					{
						(this.screen === "screen1") && (
					<div>
						<Text numberOfLines={10} style={styles.noClicksText}>
							{this.state.noClicks.toLocaleString()}
						</Text>
							<StatusBar style="auto" />
							<Button onPress={this.updateClicks} title="Tap Me" />
							<Button
								onPress={this.buyUpgrade}
								title={"Buy Ugrade (Increment x 2) Cost: " + this.state.upgradeCost}
							/>
						<Button
							onPress={this.buyWorker}
							title={"Buy Worker (" + this.state.workerIncrement + "/s) Cost: 1000"}
						/>
						<Button
							onPress={this.buyWorkerUpgrade}
							title={"Buy Worker Upgrade (Worker Increment x 2 - only applies to following workers bought) Cost: " + this.state.workerUpgradeCost.toLocaleString()}
						/>
						<Button
							onPress={this.prestige}
							title={"Prestige (Reset Progress in return for better upgrades!) Cost: " + ((this.state.prestigeLevel+1)*10) ** 4}
						/>
					</div>
					)
					}
					{this.screen === "screen2" && (
						<div>
							<Text numberOfLines={10} style={styles.noClicksText}>
								Clicks: {this.state.noClicks.toLocaleString()}
							</Text>
							<Text style={styles.statsText}>
								Overall Counter: {this.state.counter + '\n'}
							</Text>
							<Text style={styles.statsText}>
								Worker Increment: {this.state.workerIncrement}
							</Text>
						</div>
					)}
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	noClicksText: {
		color: "#00e7f2",
		textAlign: "center",
		fontSize: 50,
		
	},
	statsText: {
		flex: 1,
		fontWeight: "bold",
		color: "#00e7f2",
	},
	backgroundImage: {
		flex: 1,
		justifyContent: "center",
		
	},
});
export default App;