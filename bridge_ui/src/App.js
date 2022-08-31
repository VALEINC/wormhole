import {
    CHAIN_ID_ETH,
    CHAIN_ID_SOLANA,
} from "@certusone/wormhole-sdk";
import {
    AppBar,
    Link,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import { useCallback } from "react";
import { useHistory,useLocation } from "react-router";
import {
    Link as RouterLink,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Migration from "./components/Migration";
import EvmQuickMigrate from "./components/Migration/EvmQuickMigrate";
import SolanaQuickMigrate from "./components/Migration/SolanaQuickMigrate";
import NFT from "./components/NFT";
import NFTOriginVerifier from "./components/NFTOriginVerifier";
import TokenOriginVerifier from "./components/TokenOriginVerifier";
import UnwrapNative from "./components/UnwrapNative";
import WithdrawTokensTerra from "./components/WithdrawTokensTerra";
import Header from "./components/MP/Header";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "transparent",
        marginTop: theme.spacing(2),
        "& > .MuiToolbar-root": {
            margin: "auto",
            width: "100%",
            maxWidth: 1440,
        },
    },
    spacer: {
        flex: 1,
        width: "100vw",
    },
    link: {
        ...theme.typography.body2,
        fontWeight: 600,
        marginLeft: theme.spacing(4),
        textUnderlineOffset: "6px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(2.5),
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(1),
        },
        "&.active": {
            textDecoration: "underline",
        },
    },
    bg: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
    },
    brandLink: {
        display: "inline-flex",
        alignItems: "center",
        "&:hover": {
            textDecoration: "none",
        },
    }
}));

function App() {
    const classes = useStyles();
    const { push } = useHistory();
    const { pathname } = useLocation();
    const handleTabChange = useCallback(
        (event,value) => {
            push(value);
        },
        [push]
    );

    return (
        <div className={classes.bg}>
            {/* {["/"].includes(pathname) ? (
                <Container maxWidth="md" style={{ paddingBottom: 24 }}>
                    <Tabs
                        value={pathname}
                        variant="fullWidth"
                        onChange={handleTabChange}
                        indicatorColor="primary"
                    >
                        <Tab label="NFTs" value="/nft" />
                    </Tabs>
                </Container>
            ) : null} */}
            <div>
                <div className="w-11/12 md:w-11/12 lg:w-10/12 xl:w-3/4 mx-auto text-white">
                    <Header />
                    <div className="my-8 flex flex-col gap-4">
                        <div className="text-base">Use the Tombola Ethereum Bridge (powered by Wormhole) to transfer an NFT cross-chain</div>
                        <div className="flex flex-col gap-2">
                            <div className="font-medium text-base">
                            Are you a Seller? 
                            </div>
                            <div>
                                Use the bridge to send an NFT from Ethereum to Solana. Then contact us on <a className="font-bold" href='https://discord.gg/RD7MRVQwAG'>Discord</a> to sell your NFT on Tombola.
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-medium text-base">
                            Are you a Buyer? 
                            </div>
                            <div>
                                Use the bridge to transfer a bridged Ethereum NFT back to the Ethereum chain from Solana.
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <NFT />
                        </Route>
                        <Route exact path="/nft-origin-verifier">
                            <NFTOriginVerifier />
                        </Route>
                        {/* <Route exact path="/token-origin-verifier">
                    <TokenOriginVerifier />
                </Route>
                <Route exact path="/migrate/Solana/:legacyAsset/:fromTokenAccount">
                    <Migration chainId={CHAIN_ID_SOLANA} />
                </Route>
                <Route exact path="/migrate/Ethereum/:legacyAsset/">
                    <Migration chainId={CHAIN_ID_ETH} />
                </Route>
                <Route exact path="/migrate/Ethereum/">
                    <EvmQuickMigrate chainId={CHAIN_ID_ETH} />
                </Route>
                <Route exact path="/migrate/Solana/">
                    <SolanaQuickMigrate />
                </Route>
                <Route exact path="/unwrap-native">
                    <UnwrapNative />
                </Route>
                <Route>
                    <Redirect to="/transfer" />
                </Route> */}
                    </Switch>
                </div>
            </div>
            {/* <div className={classes.spacer} />
            <div className={classes.gradientRight}></div>
            <div className={classes.gradientRight2}></div>
            <div className={classes.gradientLeft}></div>
            <div className={classes.gradientLeft2}></div> */}
        </div >
    );
}

export default App;
