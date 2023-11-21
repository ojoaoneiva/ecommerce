import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../ProductList/Home/Home"
import { CreateProduct } from "../CreateProduct/CreateProduct"
import { SignUp } from "../CreateProduct/SignUp"
import { Login } from "../CreateProduct/Login"
import { ProductPage } from "../ProductPage/ProductPage"
import { LegalNotice } from "../Footer/Legal/LegalNotice"
import { TermsOfSale } from "../Footer/Legal/TermsOfSale"
import { PrivacyPolice } from "../Footer/Legal/PrivacyPolice"
import { AccountTerms } from "../Footer/FAQ/AccountTerms"
import { Orders } from "../Footer/FAQ/Orders"
import { Payments } from "../Footer/FAQ/Payments"
import { ReturnsExchanges } from "../Footer/FAQ/ReturnsExchanges"
import { ShipppingInformations } from "../Footer/FAQ/ShipppingInformations"
import { Career } from "../Footer/Company/Career"
import { ContactUs } from "../Footer/Company/ContactUs"
import { OurShops } from "../Footer/Company/OurShops"

export const Routess = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/CreateProduct/" element={<CreateProduct />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/:type" element={<Home />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
        <Route path="/LegalNotice/" element={<LegalNotice />} />
        <Route path="/TermsOfSale/" element={<TermsOfSale />} />
        <Route path="/PrivacyPolice/" element={<PrivacyPolice />} />
        <Route path="/AccountTerms/" element={<AccountTerms />} />
        <Route path="/Orders/" element={<Orders />} />
        <Route path="/Payments/" element={<Payments />} />
        <Route path="/ReturnsExchanges/" element={<ReturnsExchanges />} />
        <Route path="/ShipppingInformations/" element={<ShipppingInformations />} />
        <Route path="/Career/" element={<Career />} />
        <Route path="/ContactUs/" element={<ContactUs />} />
        <Route path="/OurShops/" element={<OurShops />} />
      </Routes>
    </BrowserRouter>
  );
};