import { IProviderInfo } from "../../helpers";

// @ts-ignore
import Web3DefaultLogo from "../logos/web3-default.svg?url";
// @ts-ignore
import MetaMaskLogo from "../logos/metamask.svg?url";
// @ts-ignore
import SafeLogo from "../logos/safe.svg?url";
// @ts-ignore
import NiftyWalletLogo from "../logos/niftyWallet.png";
// @ts-ignore
import TrustLogo from "../logos/trust.svg?url";
// @ts-ignore
import DapperLogo from "../logos/dapper.png";
// @ts-ignore
import CoinbaseLogo from "../logos/coinbase.svg?url";
// @ts-ignore
import CipherLogo from "../logos/cipher.svg?url";
// @ts-ignore
import imTokenLogo from "../logos/imtoken.svg?url";
// @ts-ignore
import StatusLogo from "../logos/status.svg?url";
// @ts-ignore
import TokenaryLogo from "../logos/tokenary.png";
// @ts-ignore
import OperaLogo from "../logos/opera.svg?url";
// @ts-ignore
import FrameLogo from "../logos/frame.svg?url";
// @ts-ignore
import LiqualityLogo from "../logos/liquality.png";
// @ts-ignore
import BoltXLogo from "../logos/boltx.svg?url";
// @ts-ignore
import MathWalletLogo from "../logos/mathwallet.png";
// @ts-ignore
import RWalletLogo from "../logos/rwallet.svg?url";
// @ts-ignore
import BitpieLogo from "../logos/bitpie.svg?url";
// @ts-ignore
import XDEFILogo from "../logos/xdefi.svg?url";
// @ts-ignore
import CeloExtensionWalletLogo from "../logos/celoExtensionWallet.svg?url";
// @ts-ignore
import BlockWalletLogo from "../logos/blockwallet.svg?url";
// @ts-ignore
import TallyLogo from "../logos/tally.svg?url";
// @ts-ignore
import PortalLogo from "../logos/portal.svg?url";
// @ts-ignore
import SequenceLogo from "../logos/sequence.svg?url";
// @ts-ignore
import BraveLogo from "../logos/brave.svg?url";
// @ts-ignore
import RabbyLogo from "../logos/rabby.svg?url";

export const FALLBACK: IProviderInfo = {
  id: "injected",
  name: "Web3",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isWeb3"
};

export const METAMASK: IProviderInfo = {
  id: "injected",
  name: "MetaMask",
  logo: MetaMaskLogo,
  type: "injected",
  check: "isMetaMask"
};

export const SAFE: IProviderInfo = {
  id: "injected",
  name: "Safe",
  logo: SafeLogo,
  type: "injected",
  check: "isSafe"
};

export const NIFTY: IProviderInfo = {
  id: "injected",
  name: "Nifty",
  logo: NiftyWalletLogo,
  type: "injected",
  check: "isNiftyWallet"
};

export const DAPPER: IProviderInfo = {
  id: "injected",
  name: "Dapper",
  logo: DapperLogo,
  type: "injected",
  check: "isDapper"
};

export const OPERA: IProviderInfo = {
  id: "injected",
  name: "Opera",
  logo: OperaLogo,
  type: "injected",
  check: "isOpera"
};

export const TRUST: IProviderInfo = {
  id: "injected",
  name: "Trust",
  logo: TrustLogo,
  type: "injected",
  check: "isTrust"
};

export const COINBASE: IProviderInfo = {
  id: "injected",
  name: "Coinbase",
  logo: CoinbaseLogo,
  type: "injected",
  check: "isCoinbaseWallet"
};

export const CIPHER: IProviderInfo = {
  id: "injected",
  name: "Cipher",
  logo: CipherLogo,
  type: "injected",
  check: "isCipher"
};

export const IMTOKEN: IProviderInfo = {
  id: "injected",
  name: "imToken",
  logo: imTokenLogo,
  type: "injected",
  check: "isImToken"
};

export const STATUS: IProviderInfo = {
  id: "injected",
  name: "Status",
  logo: StatusLogo,
  type: "injected",
  check: "isStatus"
};

export const TOKENARY: IProviderInfo = {
  id: "injected",
  name: "Tokenary",
  logo: TokenaryLogo,
  type: "injected",
  check: "isTokenary"
};

export const FRAMEINJECTED: IProviderInfo = {
  id: "injected",
  name: "Frame",
  logo: FrameLogo,
  type: "injected",
  check: "isFrame"
};

export const LIQUALITY: IProviderInfo = {
  id: "injected",
  name: "Liquality",
  logo: LiqualityLogo,
  type: "injected",
  check: "isLiquality"
};

export const BOLTX: IProviderInfo = {
  id: "boltx",
  name: "Bolt-X",
  logo: BoltXLogo,
  type: "injected",
  check: "isBoltX"
};

export const MATHWALLET: IProviderInfo = {
  id: "injected",
  name: "Math Wallet",
  logo: MathWalletLogo,
  type: "injected",
  check: "isMathWallet"
};

export const RWALLET: IProviderInfo = {
  id: "injected",
  name: "rWallet",
  logo: RWalletLogo,
  type: "injected",
  check: "isRWallet"
};

export const XDEFI: IProviderInfo = {
  id: "injected",
  name: "XDEFI",
  logo: XDEFILogo,
  type: "injected",
  check: "__XDEFI"
};

export const BITPIE: IProviderInfo = {
  id: "injected",
  name: "Bitpie",
  logo: BitpieLogo,
  type: "injected",
  check: "isBitpie"
};

export const CELOINJECTED: IProviderInfo = {
  id: "injected",
  name: "Celo extension wallet",
  logo: CeloExtensionWalletLogo,
  type: "injected",
  check: "isCelo"
};

export const BLOCKWALLET: IProviderInfo = {
  id: "injected",
  name: "BlockWallet",
  logo: BlockWalletLogo,
  type: "injected",
  check: "isBlockWallet"
};

export const TALLYINJECTED: IProviderInfo = {
  id: "injected",
  name: "Tally",
  logo: TallyLogo,
  type: "injected",
  check: "isTally"
};

export const PORTAL: IProviderInfo = {
  id: "injected",
  name: "Ripio Portal",
  logo: PortalLogo,
  type: "injected",
  check: "isPortal"
};

export const SEQUENCEINJECTED: IProviderInfo = {
  id: "injected",
  name: "Sequence",
  logo: SequenceLogo,
  type: "injected",
  check: "isSequence"
};

export const RABBY: IProviderInfo = {
  id: "injected",
  name: "Rabby",
  logo: RabbyLogo,
  type: "injected",
  check: "isRabby"
};

export const BRAVE: IProviderInfo = {
  id: "injected",
  name: "Brave",
  logo: BraveLogo,
  type: "injected",
  check: 'isBraveWallet'
};
