const ConnectToInjected = async () => {
  let provider = null;
  if ((window as any).ethereum !== undefined) {
		provider = (window as any).ethereum;
		try {
			await provider.request({ method: "eth_requestAccounts" });
		} catch (error) {
			throw new Error("User Rejected");
		}
  }else if ((window as any).celo) {
		provider = (window as any).celo;
  } else {
		throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToInjected;
