import TeamCard from "./TeamCard";
import teams from "../teams.json";

function TeamList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {teams.teams.map((team: any, index: number) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

export default TeamList;