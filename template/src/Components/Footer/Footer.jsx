import { Container, Ul, Owner, Div, Line } from "./FooterStyled"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToCareer, goToContactUs, goToOurShops, goToLegalNotice, goToPrivacyPolice, goToTermsOfSale, goToAccountTerms, goToPayments, goToReturnsExchanges, goToShipppingInformations, goToOrders } from "../router/Coordinator";

export const Footer = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState({});

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const toggleOpen = (section) => {
        setIsOpen((prevState) => ({ ...prevState, [section]: !prevState[section] }));
    };

    return (
        <Container id="FOOTER">
            <Div>
                <div>
                    <h3 onClick={() => toggleOpen('legal')}>Legal</h3>
                    <Ul isopen={isOpen['legal']}>
                        <li><button onClick={() => { goToLegalNotice(navigate); scrollToTop(); }}>Legal Notice</button></li>
                        <li><button onClick={() => { goToTermsOfSale(navigate); scrollToTop(); }}>Terms os sale</button></li>
                        <li><button onClick={() => { goToPrivacyPolice(navigate); scrollToTop(); }}>Privacy Policy</button></li>
                    </Ul>
                </div>
                <div>
                    <h3 onClick={() => toggleOpen('FAQ')}>FAQ</h3>
                    <Ul isopen={isOpen['FAQ']}>
                        <li><button onClick={() => { goToAccountTerms(navigate); scrollToTop(); }}>Account</button></li>
                        <li><button onClick={() => { goToShipppingInformations(navigate); scrollToTop(); }}>Shippping informations</button></li>
                        <li><button onClick={() => { goToOrders(navigate); scrollToTop(); }}>Orders</button></li>
                        <li><button onClick={() => { goToPayments(navigate); scrollToTop(); }}>Payments</button></li>
                        <li><button onClick={() => { goToReturnsExchanges(navigate); scrollToTop(); }}>Returns & exchanges</button></li>
                    </Ul>
                </div>
                <div>
                    <h3 onClick={() => toggleOpen('Company')}>Company</h3>
                    <Ul isopen={isOpen['Company']}>
                        <li><button onClick={() => { goToContactUs(navigate); scrollToTop(); }}>Contact us</button></li>
                        <li><button onClick={() => { goToOurShops(navigate); scrollToTop(); }}>Our shops</button></li>
                        <li><button onClick={() => { goToCareer(navigate); scrollToTop(); }}>Career</button></li>
                    </Ul>
                </div>
                <div>
                    <h3 onClick={() => toggleOpen('Follow')}>Follow</h3>
                    <Ul isopen={isOpen['Follow']}>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
                    </Ul>
                </div>
                <div>
                </div>
            </Div>
            <Line></Line>
            <Owner>© JOAO NEIVA 2023</Owner>
        </Container>
    )
}