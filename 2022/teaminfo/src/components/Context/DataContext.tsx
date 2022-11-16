import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const selectedTeamLocal: string | null = localStorage.getItem("selectedTeam");
  const employeeListLocal: string | null = localStorage.getItem("employeeList");
  const [selectedTeam, setTeam] = useState<string>(
    selectedTeamLocal ? JSON.parse(selectedTeamLocal) : "Team B"
  );
  const navList = [
    {
      to: "/",
      className: "nav-link",
      children: "Home",
    },{
      to: "/GroupedTeamMembers",
      className: "nav-link",
      children: "Teams",
    },
  ];
  const [employees, setEmployees] = useState<[]>(
    employeeListLocal
      ? JSON.parse(employeeListLocal)
      : [
          {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA",
          },
          {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA",
          },
          {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA",
          },
          {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB",
          },
          {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB",
          },
          {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB",
          },
          {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC",
          },
          {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC",
          },
          {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC",
          },
          {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD",
          },
          {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD",
          },
          {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD",
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event: any) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event: any) {
    const transformedEmployees: any = employees.map((employee: any) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <DataContext.Provider
      value={{
        employees,
        selectedTeam,
        handleTeamSelectionChange,
        handleEmployeeCardClick,
        setTeam,
        navList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
