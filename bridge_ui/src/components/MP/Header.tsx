// import Link from "next/link";
import { useEffect, useState } from "react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { getWalletBalance } from "../app/rpc/getWalletBalance";
// import { openRpcConnection } from "../app/rpc/openRpcConnection";
// import { evaluateFaqHref, evaluateHeaderTextColor, evaluateLink, evaluateLogo, evaluateName, evaluateSecondaryBackgroundColor } from "../utils/evaluateSection";
// import { useAuth } from "../lib/auth";
// import bs58 from "bs58";
// import { Connection } from "@solana/web3.js";
// import { toast } from "react-toastify";
// import PrimaryButton from "./PrimaryButton";
// import { ReactText } from "react";
// import Cookies from 'universal-cookie';
// import { WalletSignTransactionError } from "@solana/wallet-adapter-base";
// import nacl from "tweetnacl";

// interface RenderSignMessagePromptProps {
//     signIn: () => void;
// }

// interface SignWithToastProps {
//     connection: Connection,
//     toastId: ReactText,
//     signIn: () => void;
// }

// export const renderSignMessagePrompt = ({signIn}:RenderSignMessagePromptProps) => {

//     async function fetchNonce() {
//         const response = await fetch('/api/nonce');
//         if (response.status != 200)
//             throw new Error("nonce could not be retrieved");

//         const { nonce } = await response.json();

//         return nonce;
//     }

//     async function handleLogin() {
//         const nonce = await fetchNonce();

//         const message = `Sign this message to authenticate with your wallet. Nonce: ${nonce}`;
//         const encodedMessage = new TextEncoder().encode(message);
//         const signature = await signMessage(encodedMessage)
//         // console.log(nacl.sign.detached.verify(encodedMessage, signature, publicKey.toBytes()))
//         signIn(publicKey.toBase58(), bs58.encode(signature), nonce);
//     }

//     <div>
//         <div>Sign a secure message to authenticate your wallet and play!</div>
//         <PrimaryButton onClick={}/>
//     </div>
// }

// export async function signWithToast({ connection, toastId, signIn }:SignWithToastProps) {
//     toast.update(toastId, {
//         render: renderSignMessagePrompt(signIn),
//         type: "error",
//         isLoading: false,
//         autoClose: false
//     })
// }

export default function Header({ currentPath }: { currentPath: string; }) {

    const [active, setActive] = useState(false);
    const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);
    const [myBalance, setMyBalance] = useState(0);

    // async function fetchNonce() {
    //     const response = await fetch('/api/nonce');
    //     if (response.status != 200)
    //         throw new Error("nonce could not be retrieved");

    //     const { nonce } = await response.json();

    //     return nonce;
    // }

    // async function handleLogin() {
    //     const nonce = await fetchNonce();

    //     const message = `Sign in to Mushroom Party.\n\nNo password needed.\n\nBy clicking Approve or Sign you are confirming this wallet is owned by you.\n\nThis request will not trigger a transaction or cost anything.\n\nNonce: ${nonce}`;
    //     const encodedMessage = new TextEncoder().encode(message);
    //     try {
    //         const signature = await signMessage(encodedMessage);
    //         signIn(publicKey.toBase58(), bs58.encode(signature), nonce);
    //         // console.log(nacl.sign.detached.verify(encodedMessage, signature, publicKey.toBytes()))
    //     } catch (e) {
    //         if (e instanceof WalletSignTransactionError) {
    //             toast.error(
    //                 <div>
    //                     <div>{e.message == "You must sign a message to play!"}</div>
    //                     {e.message != "You must sign a message to play!" &&
    //                         <div className="text-sm font-light">
    //                             {"You must sign a message to play! Please reconect your wallet and try again."}
    //                         </div>}
    //                 </div>,
    //                 {}
    //             );
    //             disconnect();
    //         }
    //     }
    // }

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="flex flex-row w-full justify-center gap-4 z-[60]">
            <nav className={"bg-[#FEF2F2]" + " " + "w-full z-[60] flex items-center flex-wrap p-3 rounded-lg mt-4 md:mt-6" + " " + "text-gray-800"} >
                    <a href={currentPath} className="cursor-pointer inline-flex items-center p-2 mr-4 z-[60]">
                        <img className="inline w-6 lg:w-7 xl:w-7 mr-3 z-[60]" src="/Tombola_logo.png" />
                        <span className="text-l lg:text-xl xl:text-xl font-semibold tracking-wide z-[60]">Tombola Ethereum Bridge</span>
                    </a>

                <button className="z-[60] inline-flex p-3 hover:bg-gray-800 rounded md:hidden ml-auto hover:text-white outline-none" onClick={handleClick}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div className={`${active ? "" : "hidden"}   z-[60] w-full md:inline-flex md:flex-grow md:w-auto`}>
                    <div className="w-11/12 h-40 md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center items-start  flex flex-col md:h-auto">
                            <a href="https://app-dev.mushroom.party/tombola" className="text-black text-base cursor-pointer md:inline-flex md:w-auto w-full px-3 py-2 rounded font-medium items-center justify-center hover:bg-gray-500 hover:bg-opacity-50 hover:text-white">Go to Tombola <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span></a>
                        {/* <a
                            href="https://www.mushroom.party/nfts"
                            className="md:inline-flex md:w-auto w-44 px-3 py-2 rounded font-normal items-center justify-center hover:bg-gray-500  hover:bg-opacity-50 hover:text-white"
                        >
                            NFTs
                        </a> */}
                        {/* <a href='https://discord.gg/RD7MRVQwAG' className="md:inline-flex md:w-auto w-44 px-3 py-2 rounded font-medium items-center justify-center hover:bg-gray-500 hover:bg-opacity-50 hover:text-white">
                            Discord
                        </a> */}
                    </div>
                </div>
            </nav>
            {/* <div className={ "flex flex-row items-center justify-center bg-gray-800 w-20 h-20 flex-wrap rounded-lg mt-4 md:mt-6" + " " + evaluateHeaderTextColor( currentPath ) }>
                <img className="h-5" src="/MushroomAndBg.png" />
            </div> */}
        </div>
    );
}
