function Title({ title }) {
    return (
        <div className="autoShow">
            <h1 className="text-center text-[42px] font-bold text-[var(--black2white)] font-[montserrat-bold] appear">
                {title}
            </h1>
        </div>
    )
}

export { Title };