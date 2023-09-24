import './styles.css'

export default function Project ({name, url}) {
    
    return (
        <a href={url}>{name}</a>
    )
}