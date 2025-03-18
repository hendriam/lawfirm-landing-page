import Header from "./components/header";
import Offer from "./components/offer";

function App() {
    return (
        <>
            <Header />
            <main className="container mx-0 lg:mx-auto px-5 xl:px-0 lg:w-full max-w-6xl">
                <Offer />
            </main>
        </>
    );
}

export default App;
