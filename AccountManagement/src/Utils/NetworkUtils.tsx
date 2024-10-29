import NetInfo from "@react-native-community/netinfo";

export default class NetworkUtils {

  // isNetReachable will hold the latest network status/
  // This will be updated On start network listener & On Network connectivity change.
  static isNetReachable = false;

  static startNetworkConnectivityChangeListener(callback) {
    NetInfo.addEventListener(state => {
      NetworkUtils.handleConnectivityChange(state.isConnected)
    });

    NetInfo.fetch().then(state => {
      NetworkUtils.handleConnectivityChange(state.isConnected);
      callback()
    });
  }

  static stopNetworkConnectivityChangeListener() {
    // NetInfo.removeEventListener("connectionChange", NetworkUtils.handleConnectivityChange);
  }

  static handleConnectivityChange(isConnected) {
    // Set changed status to isNetReachable
    NetworkUtils.isNetReachable = isConnected;
  }

  static isNetworkReachable() {
    return NetworkUtils.isNetReachable;
  }

}//end of class NetworkUtils
