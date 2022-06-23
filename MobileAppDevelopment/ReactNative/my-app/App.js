import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Button , Pressable} from "react-native";

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
		this.screen = "screen1"
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
		if (this.state.noClicks >= this.state.workerUpgradeCost) {
			this.setState({
				noClicks: Math.round(this.state.noClicks - this.state.workerUpgradeCost),
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
						<Pressable onPress={this.updateClicks} style={styles.button}>
							<Text style={styles.text}>
								Tap Me
							</Text>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={this.buyUpgrade}>
								<Text style={styles.text}>{"Buy Ugrade (Increment x 2) Cost: " + this.state.upgradeCost.toLocaleString()}</Text>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={this.buyWorker}>
								<Text style={styles.text}>{"Buy Worker (Increment x " + this.state.workerIncrement + ") Cost: " + this.state.workerUpgradeCost.toLocaleString()}</Text>
						</Pressable>
						<Pressable
							style={styles.button}
							onPress={this.buyWorkerUpgrade}>
								<Text style={styles.text}>{"Buy Worker Upgrade (Increment x " + this.state.workerIncrement + ") Cost: " + this.state.workerUpgradeCost.toLocaleString()}</Text>
							</Pressable>
						<Pressable
							style={styles.button}
							onPress={this.prestige}>
								<Text style={styles.text}>{"Prestige (Reset Progress in return for better upgrades!) Cost: " + ((this.state.prestigeLevel+1)*10) ** 4}</Text>
							</Pressable>
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
		color: "#009bf9",
		textAlign: "center",
		fontSize: 50,
		fontWeight: "bold",
	},
	button: {
		flex:1,
        flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		borderWidth:1,
		borderColor:'#009bf9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'black',
	},
	text: {
		fontSize: 16,
    	lineHeight: 21,
    	fontWeight: 'bold',
    	letterSpacing: 0.25,
    	color: 'white',
	},
	backgroundImage: {
		flex: 1,
		justifyContent: "center",
		
	},
});
export default App;