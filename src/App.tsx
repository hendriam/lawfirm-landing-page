import Blogs from "./components/blogs";
import Header from "./components/header";
import Offer from "./components/offer";
import OurLawyers from "./components/our-layers";
import Testimonials from "./components/testimonials";

function App() {
    return (
        <>
            <Header />
            <main className="container mx-0 lg:mx-auto px-5 xl:px-0 lg:w-full max-w-6xl">
                <Offer />
                <OurLawyers />
                <Testimonials />
                <Blogs />
            </main>
        </>
    );
}

export default App;
