import "./ContentCard.css";

function ContentCard({
  style,
  header,
  description,
  buttonLabel,
  url,
  onClick,
}) {
  return (
    <div className="content-card-style" style={style}>
      <div className="content-card-header-style">{header}</div>
      <div className="content-card-description-style">{description}</div>
      {onClick ? (
        <button className="content-card-button" onClick={onClick}>
          {buttonLabel}
        </button>
      ) : (
        url &&
        url.trim() && (
          <a href={url}>
            <button className="content-card-button">{buttonLabel}</button>
          </a>
        )
      )}
    </div>
  );
}

export default ContentCard;
