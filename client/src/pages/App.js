import React, { Suspense, lazy, Component } from 'react';
import Introduction from '../components/App/Introduction';


const ContainerWithBackground = lazy(() => import( /* webpackChunkName: "BackgroundContainer" */
    '../components/styled/ContainerWithBackground'));
const Navbar = lazy(() => import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar'));
const PolygonBooks = lazy(() => import(/* webpackChunkName: "PolygonBooks" */
    '../components/styled/PolygonBooks'));
const MiddleEbook = lazy(() => import(/* webpackChunkName: "MIddleEbook" */
    '../components/App/MiddleEbook'));
const BookSection = lazy(() => import(/* webpackChunkName: "BookSection"*/
    '../components/App/BookSection'));
const FooterApp = lazy(() => import(/* webpackChunkName: "BookSection"*/
    '../components/App/FooterApp'));

class App extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<div> loadingNewpage... </div>} >
                    <ContainerWithBackground>
                        <Navbar />
                        <Introduction />
                        <MiddleEbook />
                    </ContainerWithBackground>
                    <PolygonBooks>
                        <BookSection />
                    </PolygonBooks>
                    <FooterApp />
                </Suspense>
            </>
        );
    }
}

export default App;
