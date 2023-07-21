
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../hooks/useCart";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_Pk);
const Payment = () => {
    const [cart] = useCart();
    const total = cart?.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading={'please process'} heading={"Payment"}></SectionTitle>
            <h3 className=" text-3xl ml-8">Payment of payment</h3>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Payment;