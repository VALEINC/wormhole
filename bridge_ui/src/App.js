import {
    CHAIN_ID_BSC,
    CHAIN_ID_ETH,
    CHAIN_ID_SOLANA,
} from "@certusone/wormhole-sdk";
import {
    AppBar,
    Container,
    Link,
    makeStyles,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { useCallback } from "react";
import { useHistory,useLocation } from "react-router";
import {
    Link as RouterLink,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Attest from "./components/Attest";
import Footer from "./components/Footer";
import HeaderText from "./components/HeaderText";
import Migration from "./components/Migration";
import EvmQuickMigrate from "./components/Migration/EvmQuickMigrate";
import SolanaQuickMigrate from "./components/Migration/SolanaQuickMigrate";
import NFT from "./components/NFT";
import NFTOriginVerifier from "./components/NFTOriginVerifier";
import Recovery from "./components/Recovery";
import TokenOriginVerifier from "./components/TokenOriginVerifier";
import Transfer from "./components/Transfer";
import UnwrapNative from "./components/UnwrapNative";
import WithdrawTokensTerra from "./components/WithdrawTokensTerra";
import { CLUSTER } from "./utils/consts";

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
        // background:
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
            <AppBar
                position="static"
                color="inherit"
                className={classes.appBar}
                elevation={0}
            >
                <Toolbar>
                    <Link
                        component={RouterLink}
                        to="/transfer"
                        className={classes.brandLink}
                    >
                    </Link>
                    <div className={classes.spacer} />
                    {/* <Hidden implementation="css" xsDown>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                component={NavLink}
                to="/transfer"
                color="inherit"
                className={classes.link}
              >
                Bridge
              </Link>
              <Link
                href="https://docs.wormholenetwork.com/wormhole/faqs"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                className={classes.link}
              >
                FAQ
              </Link>
              <Link
                href="https://wormholenetwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                className={classes.link}
              >
                Wormhole
              </Link>
            </div>
          </Hidden>
          <Hidden implementation="css" smUp>
            <Tooltip title="View the FAQ">
              <IconButton
                href="https://docs.wormholenetwork.com/wormhole/faqs"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                className={classes.link}
              >
                <HelpOutline />
              </IconButton>
            </Tooltip>
          </Hidden> */}
                </Toolbar>
            </AppBar>
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
            <Switch>
                <Route exact path="/">
                    <NFT />
                </Route>
                {/* <Route exact path="/nft">
                    <NFT />
                </Route> */}
                {/* <Route exact path="/redeem">
                    <Recovery />
                </Route> */}
                <Route exact path="/nft-origin-verifier">
                    <NFTOriginVerifier />
                </Route>
                <Route exact path="/token-origin-verifier">
                    <TokenOriginVerifier />
                </Route>
                {/* <Route exact path="/register">
                    <Attest />
                </Route> */}
                <Route exact path="/migrate/Solana/:legacyAsset/:fromTokenAccount">
                    <Migration chainId={CHAIN_ID_SOLANA} />
                </Route>
                <Route exact path="/migrate/Ethereum/:legacyAsset/">
                    <Migration chainId={CHAIN_ID_ETH} />
                </Route>
                <Route exact path="/migrate/BinanceSmartChain/:legacyAsset/">
                    <Migration chainId={CHAIN_ID_BSC} />
                </Route>
                <Route exact path="/migrate/Ethereum/">
                    <EvmQuickMigrate chainId={CHAIN_ID_ETH} />
                </Route>
                <Route exact path="/migrate/BinanceSmartChain/">
                    <EvmQuickMigrate chainId={CHAIN_ID_BSC} />
                </Route>
                <Route exact path="/migrate/Solana/">
                    <SolanaQuickMigrate />
                </Route>
                <Route exact path="/withdraw-tokens-terra">
                    <WithdrawTokensTerra />
                </Route>
                <Route exact path="/unwrap-native">
                    <UnwrapNative />
                </Route>
                <Route>
                    <Redirect to="/transfer" />
                </Route>
            </Switch>
            <div className={classes.spacer} />
            <div className={classes.gradientRight}></div>
            <div className={classes.gradientRight2}></div>
            <div className={classes.gradientLeft}></div>
            <div className={classes.gradientLeft2}></div>
            <Footer />
        </div>
    );
}

export default App;
