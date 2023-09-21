export default function ({ href, src, alt }) {
  return (
    <li>
      <a href={href} target="_blank">
        <img src={src} alt={alt} />
      </a>
    </li>
  );
}
