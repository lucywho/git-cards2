import Card from "./Card"

export default function Cards(props) {
    return (
        <>
            {props.profiles.map((profile, profileId) => (
                <Card key={profileId} {...profile} />
            ))}
        </>
    )
}
