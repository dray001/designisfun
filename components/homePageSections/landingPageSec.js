const LandingSection =({style, data})=> {
    return (
    <section className={`${style}`}>
        <h1>Landing Page Section </h1>
        <p>{data}</p>
    </section>
    )
}

export default LandingSection