import React from "react"

export default function Destination(props) {
    const capitalizedLocation = props.location.toUpperCase()

    return (
        <section className="dest">
            {props.id !== 1 && <hr />}
            <div className="dest--container">
                <img className="dest--image" src={props.imageUrl} alt={`${props.title} Image`}/>
                <div className="dest--details">
                    <div className="dest--location-section">
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A"/>
                        </svg>
                        <p className="dest--location">{capitalizedLocation}</p>
                        <a className="dest--google-maps-link" href={props.googleMapsUrl}>View in Google Maps</a>
                    </div>
                    <h1 className="dest--title">{props.title}</h1>
                    <p className="dest--dates">{`${props.startDate} - ${props.endDate}`}</p>
                    <p className="dest--description">{props.description}</p>
                </div>
            </div>
        </section>
    )
}

/**
 *     {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
    }
 */