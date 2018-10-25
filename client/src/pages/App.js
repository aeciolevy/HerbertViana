import React, { Suspense, lazy, Component } from 'react';
import Introduction from '../components/App/Introduction';
import Async from 'react-code-splitting';

const ContainerWithBackground = (props) => <Async load={import( /* webpackChunkName: "MainContainer" */ 
    '../components/styled/ContainerWithBackground')} componentProps={props} />;
const Navbar = (props) => <Async load={import(/* webpackChunkName: "Navbar" */
    '../components/Shared/Navbar')} componentProps={props} />;
const PolygonBooks = (props) => <Async load={import(/* webpackChunkName: "PolygonBooks" */
    '../components/styled/PolygonBooks')} componentProps={props} />;
const MiddleEbook = (props) => <Async load={import(/* webpackChunkName: "MIddleEbook" */
    '../components/App/MiddleEbook')} componentProps={props} />;
const BookSection = lazy(() => import(/* webpackChunkName: "BookSection"*/
    '../components/App/BookSection'));

class App extends Component {
    render() {
        return (
            <>
                <ContainerWithBackground>
                    <Navbar />
                    <Introduction />
                    <MiddleEbook />
                </ContainerWithBackground>
                <PolygonBooks>
                    <Suspense fallback={<div> loading... </div>} >
                        <BookSection />
                    </Suspense>
                </PolygonBooks>
            </>
        );
    }
}

export default App;
