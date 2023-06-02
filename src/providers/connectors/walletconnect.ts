import { IAbstractConnectorOptions } from "../../helpers";

export interface IWalletConnectConnectorOptions extends IAbstractConnectorOptions {
	showQrModal?: boolean;
	projectId?: string;
	chains?: number[];
}

const ConnectToWalletConnect = (
  WalletConnectProvider: any,
  opts: IWalletConnectConnectorOptions
) => {
  return new Promise(async (resolve, reject) => {
    let showQrModal = true;
    let projectId = "";
    let chains = [1];

    if (opts) {
      chains = opts.chains || chains;
      projectId = typeof opts.projectId !== "undefined" ? opts.projectId : projectId;
      showQrModal = opts.showQrModal || showQrModal;
    }
    const provider = WalletConnectProvider.init({
		projectId,
		chains,
		showQrModal,
	});
    try {
      await provider.enable();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToWalletConnect;
