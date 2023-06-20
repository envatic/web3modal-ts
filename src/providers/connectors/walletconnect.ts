const ConnectToWalletConnect = (WalletConnectProvider: any, opts: any) => {
	return new Promise(async (resolve, reject) => {
		const provider = await WalletConnectProvider.init(opts);
		try {
			await provider.connect();
			resolve(provider);
		} catch (e) {
			reject(e);
		}
	});
};

export default ConnectToWalletConnect;
