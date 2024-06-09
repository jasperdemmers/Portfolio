import QuoteComponent from "../../components/Quote.jsx";

const Quote = () => {
    return (
        <div className="text-center max-w-2xl mx-auto w-full pt-16 md:pt-14 lg:pt-8">
            <QuoteComponent
                p1={`"Perfection is not attainable, but if we `}
                p2={"chase perfection"}
                p3={` we can catch excellence."`}
                auth={"Vince Lombardi"}
            />
        </div>
    )
}
export default Quote;