import ConnectWallet from "@/components/connectWallet/connect-wallet";
import ReadContract from "@/components/readContract/read-contract";

function App() {
    return (
        <>
            <ConnectWallet/>
            <div>
                <ReadContract/>
            </div>

        </>

    )
}

export default App
