import './styles.css'

export default function Project ({name, url}) {
    console.log("name:", name)
    return (
        <a href={url}>{name}</a>
    )
}