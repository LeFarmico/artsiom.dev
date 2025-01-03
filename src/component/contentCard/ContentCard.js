import "./ContentCard.css";

function ContentCard({ style, header, description, buttonLabel, url }) {
  return (
    <div className="content-card-style" style={style}>
      <div className="content-card-header-style">{header}</div>
      <div className="content-card-description-style">{description}</div>
      {url && url.trim() && (
        <a href={url}>
          <button className="content-card-button">{buttonLabel}</button>
        </a>
      )}
    </div>
  );
}

export default ContentCard;
