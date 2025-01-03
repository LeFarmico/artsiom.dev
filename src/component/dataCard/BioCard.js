import "./CardStyle.css";

function BioCard({ title, text }) {
  return (
    <div className="bio-card">
      <h2 className="bio-headline">{title}</h2>
      <p className="bio-description">{text}</p>
    </div>
  );
}

export default BioCard;
