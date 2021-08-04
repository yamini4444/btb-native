import React, { PureComponent } from "react";
import { AppState } from "react-native";
import { connect } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";
import { checkOfflineRes } from '../src/actions/CheckOffline';
class OfflineMessage extends PureComponent {

	async componentDidMount() {
        await AppState.addEventListener("change", this.handleAppStateChange);
        NetInfo.addEventListener(state => { this.handleConnectivityChange(state) });
		await this.updateConnectivity();
		await this.pingServerReachable();
	}

	async componentWillUnmount() {
        await AppState.removeEventListener("change", this.handleAppStateChange);
        // await NetInfo.removeEventListener(state => { this.handleConnectivityChange(state) });
		clearTimeout(this.webPing);
	}

	updateConnectivity = async () => {
        const isReachable = await NetInfo.fetch();
		try {
			if (isReachable && isReachable.type !== "none") {
				await AsyncStorage.setItem("isServerReachable", "1");
			} else {
				await AsyncStorage.setItem("isServerReachable", "0");
			}
		} catch (error) {
			await AsyncStorage.setItem("isServerReachable", "0");
		}
	};

	pingServerReachable = () => {
		const INTERVAL = 2000;
		this.webPing = setInterval(async () => {
			this.updateConnectivity();
		}, INTERVAL);
	};

	handleConnectivityChange = async hasConnection => {
		if (hasConnection.isConnected) {
			this.props.checkOfflineRes(true);
		} else {
			this.props.checkOfflineRes(false);
		}
	};

	handleAppStateChange = async nextAppState => {
		if (this.backgroundState(nextAppState)) {
			clearTimeout(this.webPing);
		} else if (nextAppState === "active") {
			await this.pingServerReachable();
            const isConnected = await NetInfo.fetch();
			this.props.checkOfflineRes(isConnected);
		}
	};

	backgroundState = state => {
		return state.match(/inactive|background/);
	};

	render() {
		return null;
    }

}

OfflineMessage.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkOfflineRes: (data) => dispatch(checkOfflineRes(data)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(OfflineMessage);
