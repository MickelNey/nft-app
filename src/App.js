import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getImages} from "./store/asyncActions";

import {Route, Routes} from "react-router-dom";
import {CartsPage, SingleCartPage} from "./pages";

import {Loader} from "./components";

// can be module (ex. CardsModule )
function App() {
    const { status, error} = useSelector(state => state.images)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getImages())
    }, [dispatch])

    if (status === 'loading') {
        return <Loader text='Loading'/>
    } else
    if (status === 'error')  {
        return <div>error: {error.message} </div>
    }

    return (
        <Routes>
            <Route path='/' element={ <CartsPage />} />
            <Route path='nft/:id/' element={ <SingleCartPage />}/>
        </Routes>
    );
}

export default App;
