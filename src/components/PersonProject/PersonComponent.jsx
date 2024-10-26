// import "./PersonComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PersonComponent = () => {
  let persons = [
    {
      id: 101,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      city: "New York",
    },
    {
      id: 102,
      name: "Jane Smith",
      age: 28,
      email: "jane.smith@example.com",
      city: "Los Angeles",
    },
    {
      id: 103,
      name: "Mark Johnson",
      age: 35,
      email: "mark.johnson@example.com",
      city: "Chicago",
    },
    {
      id: 104,
      name: "Daniel Brown",
      age: 32,
      email: "daniel.brown@example.com",
      city: "Miami",
    },
  ];

  let personElements = persons.map((person) => {
    return (
      <div className="col-md-4 mb-4" key={person.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">Age: {person.age}</p>
            <p className="card-text">Email: {person.email}</p>
            <p className="card-text">City: {person.city}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-center mb-4">Persons</h1>
      <div className="container">
        <div className="row">{personElements}</div>
      </div>
    </>
  );
};

export default PersonComponent;
