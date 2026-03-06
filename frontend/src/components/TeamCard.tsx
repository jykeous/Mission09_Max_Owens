// Displays information for a single team

function TeamCard({ team }: any) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "12px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f5f5f5",
        color: "#000"
      }}
    >
      <h3>{team.school}</h3>

      <p>
        <strong>Mascot:</strong> {team.name}
      </p>

      <p>
        <strong>Location:</strong> {team.city}, {team.state}
      </p>
    </div>
  );
}

export default TeamCard;