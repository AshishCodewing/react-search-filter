import "./products.css"

function Products({ result }) {
    console.log(result);
    return (
        <>
            <section className="card-container">
                {result}
            </section>

        </>
    )
}

export default Products;