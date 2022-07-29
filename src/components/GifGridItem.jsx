export const GifGridItem = ( {  url, title} ) => {
    return (
            <div className='card' >
                    <img src={ url } alt={ title } />
                    <p className='card p'>{ title }</p>
            </div>
    )
}

