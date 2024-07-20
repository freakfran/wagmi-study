import ConnectWallet from "@/components/connectWallet/connect-wallet";
import SendTransaction from "@/components/connectWallet/send-transaction";
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
