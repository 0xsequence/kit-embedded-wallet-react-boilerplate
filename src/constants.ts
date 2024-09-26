import {
  mainnet,
  polygon,
  Chain,
  polygonAmoy,
  arbitrumSepolia,
} from "wagmi/chains";

const chains = [mainnet, polygon, polygonAmoy, arbitrumSepolia] as [
  Chain,
  ...Chain[],
];

export default chains;
