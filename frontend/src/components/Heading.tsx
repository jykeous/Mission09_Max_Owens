// Heading component displayed at the top of the page
// Introduces the user to the purpose of the website

function Heading() {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1>NCAA Basketball Teams</h1>
      <p>
        This website lists NCAA college basketball teams along with their
        mascots and locations. Browse through all the teams participating
        in March Madness.
      </p>
    </div>
  );
}

export default Heading;