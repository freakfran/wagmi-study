import ConnectWallet from "@/components/connectWallet/connect-wallet";
import ReadContract from "@/components/readContract/read-contract";
import WriteContract from "@/components/writeContract/write-contract";

function App() {
    return (
        <>
            <ConnectWallet/>
            <div>
                <ReadContract/>
                <WriteContract/>
            </div>

        </>

    )
}

export default App
