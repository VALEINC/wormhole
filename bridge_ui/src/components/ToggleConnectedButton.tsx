import { Button, makeStyles, Tooltip } from "@material-ui/core";
import { LinkOff } from "@material-ui/icons";
import PrimaryButton from "./MP/PrimaryButton";

const ToggleConnectedButton = ({
  connect,
  disconnect,
  connected,
  pk,
  walletIcon,
}: {
  connect(): any;
  disconnect(): any;
  connected: boolean;
  pk: string;
  walletIcon?: string;
}) => {
  const classes = null;
  const is0x = pk.startsWith("0x");
  return connected ? (
    <Tooltip title={pk}>
      <PrimaryButton
        width="w-full"
        marginX=""
        disabledText="Unavailable"
        onClick={disconnect}
        startIcon={
          walletIcon ? (
            <img className="h-6 w-6" src={walletIcon} alt="Wallet" />
          ) : (
            <LinkOff />
          )
        }
      >
        Disconnect {pk.substring(0, is0x ? 6 : 3)}...
        {pk.substr(pk.length - (is0x ? 4 : 3))}
      </PrimaryButton>
    </Tooltip>
  ) : (
    <PrimaryButton
      currentPath="/"
      onClick={connect}
      width="w-full"
      marginX=""
      disabledText="Unavailable"
    >
      Connect
    </PrimaryButton>
  );
};

export default ToggleConnectedButton;
