import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Info from '././components/Info/Info';
import Reviews from '././components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Main from './components/Main/Main';
// import asasin from './components/Pictures/asasin.jpg';
// import bioshock from './components/Pictures/bioshock.jpg';
// import ds from './components/Pictures/ds.png';
// import fata from './components/Pictures/fata.jpg';
// import ghost from './components/Pictures/ghost.png';
// import gow from './components/Pictures/gow.png';
// import gta from './components/Pictures/gta.png';
// import horizon from './components/Pictures/horizon.jpg';
// import mario from './components/Pictures/mario.jpg';
// import minecraft from './components/Pictures/minecraft.png';
// import p5 from './components/Pictures/p5.png';
// import portal from './components/Pictures/portal.png';
// import rdr from './components/Pictures/rdr.png';
// import sot from './components/Pictures/sot.jpg';
// import undertale from './components/Pictures/undertale.jpg';
// import wd from './components/Pictures/wd.png';
// import witcher from './components/Pictures/witcher.png';
// import zelda from './components/Pictures/zelda.jpg';
import ProductNs from './components/ProductNs/ProductNs';
import ProductPs from './components/ProductPs/ProductPs';
import ProductXb from './components/ProductXb/ProductXb';

//  const games = [
//     {
//         id: "1400000414",
//         name: "Witcher 3 Wild Hunt",
//         price: 1000,
//         available: true,
//         condition: "new",
//         imageUrl: witcher,
//     },
//     {
//         id: "1400000415",
//         name: "Grand Theft Auto V",
//         price: 800,
//         available: false,
//         condition: "used",
//         imageUrl: gta,
//     },
//     {
//         id: "1400000416",
//         name: "God of War: Ragnarok",
//         price: 400,
//         available: true,
//         condition: "used",
//         imageUrl: gow,
//     },
//     {
//         id: "1400000417",
//         name: "Red Dead Redemtion II",
//         price: 200,
//         available: true,
//         condition: "new",
//         imageUrl: rdr,
//     },
//     {
//         id: "1400000418",
//         name: "Ghost of Tsushima",
//         price: 650,
//         available: false,
//         condition: "used",
//         imageUrl: ghost,
//     },
//     {
//         id: "1400000419",
//         name: "Horizon Zero Dawn",
//         price: 300,
//         available: true,
//         condition: "used",
//         imageUrl: horizon,
//     },
//     {
//         id: "1400000420",
//         name: "Assassin's creed Mirage",
//         price: 1000,
//         available: true,
//         condition: "new",
//         imageUrl: asasin,
//     },
//     {
//         id: "1400000421",
//         name: "Dark Souls 3",
//         price: 800,
//         available: true,
//         condition: "used",
//         imageUrl: ds,
//     },
//     {
//         id: "1400000422",
//         name: "Watch Dogs 2",
//         price: 400,
//         available: true,
//         condition: "used",
//         imageUrl: wd,
//     },
//     {
//         id: "1400000423",
//         name: "Bioshock Infinite",
//         price: 200,
//         available: true,
//         condition: "used",
//         imageUrl: bioshock,
//     },
//     {
//         id: "1400000424",
//         name: "Sea of Thieves",
//         price: 650,
//         available: true,
//         condition: "used",
//         imageUrl: sot,
//     },
//     {
//         id: "1400000425",
//         name: "Minecraft Story Mode",
//         price: 300,
//         available: false,
//         condition: "used",
//         imageUrl: minecraft,
//     },
//     {
//         id: "1400000426",
//         name: "The Legend of Zelda: Breath of the Wild",
//         price: 1000,
//         available: true,
//         condition: "new",
//         imageUrl: zelda,
//     },
//     {
//         id: "1400000427",
//         name: "Super Mario Odyssey",
//         price: 800,
//         available: false,
//         condition: "used",
//         imageUrl: mario,
//     },
//     {
//         id: "1400000428",
//         name: "The House in Fata Morgana",
//         price: 400,
//         available: true,
//         condition: "new",
//         imageUrl: fata,
//     },
//     {
//         id: "1400000429",
//         name: "Portal: Companion Collection",
//         price: 200,
//         available: true,
//         condition: "new",
//         imageUrl: portal,
//     },
//     {
//         id: "1400000430",
//         name: "Undertale",
//         price: 650,
//         available: false,
//         condition: "used",
//         imageUrl: undertale,
//     },
//     {
//         id: "1400000431",
//         name: "Persona 5 Royal",
//         price: 300,
//         available: true,
//         condition: "used",
//         imageUrl: p5,
//     },
// ];

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ProductPs" element={<ProductPs />} />
                <Route path="/ProductXb" element={<ProductXb />} />
                <Route path="/ProductNs" element={<ProductNs />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/Reviews" element={<Reviews />} />
                <Route path="/Info" element={<Info />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
