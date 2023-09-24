import './styles.css'

export default function ({ href, src, alt }) {
  return (
    <li className="li_logo">
      <a className="a_logo" href={href} target="_blank">
        <img className="img_logo" src={src} alt={alt} />
      </a>
    </li>
  );
}
