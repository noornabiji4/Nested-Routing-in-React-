import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const details = [
    {
        name: "Kalonji Oil",
        id: "Kalonji Oil",
        description: "We have been producing 100% pure Kalonji oil for the last so many years by extracting Kalonji oil purely by natural method without taking help of any other chemicals. Our 23 years of rigorous & continued research on Kalonji has given successful results to cure many diseases"
    },
    {
        name: "Zam-Zam-e-Bahar Oil",
        id: "Zam-Zam-e-Bahar Oil",
        description: "Specially formulated hair oil to cure hair loss, dandruff, pre-mature graying of hair , revitalizes hair, recovers the damaged hair, headaches, gives sound sleep."
    },
    {
        name: "Rogan-e-Gesudaraaz",
        id: "Rogan-e-Gesudaraaz",
        description: "Exclusive treatment for the grey hair due to cold & sinus, gives permanent relief from sinus, nutritive to mind & nourishment to hair"
    },
    {
        name: "Kalonji Herbal Miswak ",
        id: "Kalonji Herbal Miswak ",
        description: "It is very much useful for the toothache, gum bleeding, bad odor and the entire tooth related problems."
    },
]
function Details({ match }) {
    const detail = details.find(({ id }) => id === match.params.detailId)
        .details.find(({ id }) => id === match.params.subId)
    return (
        <div>
            <h3>{detail.name}</h3>
            <p>{detail.description}</p>
        </div>
    )
}

function product({ match }) {
    const detail = details.find(({ id }) => id === match.params.detailId)

    return (
        <div>
            <h2>{detail.name}</h2>
            <p>{detail.description}</p>
            <ul>
                {detail.map((sub) => {
                    return <li key={sub.id}>
                        <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
                    </li>
                })}
            </ul>
            <hr />
            <Route path={`${match.path}/:subId`} component={Details} />
        </div>
    )
}

function products({ match }) {
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                {details.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={`${match.id}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>

            <hr />

            <Route path={`${match.path}/:productsId`} component={product} />
        </div>
    )
}
function Home() {
    return (
        <h1>Home</h1>
    )
}
class Nav extends Component {
    render() {
        return (
            <Router>
                <div >
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                    </ul>
                    <hr />
                    <Route exact path='/' component={Home} />
                    <Route path='/products' component={products} />
                </div>
            </Router>
        )
    }
}
export default Nav