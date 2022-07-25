import { Button, Divider, Slider } from "@mui/material";
import { useState } from "react";
import { StrategyState } from "../StrategyContextProvider";
import "./styles.css";

const RetirementStrategy = () => {
  const [empCont, setEmpCont] = useState(12);
  const [age, setAge] = useState(65);

  const { setEmployeeContribution, setRetirementAge } = StrategyState();

  const handleUpdate = () => {
    setEmployeeContribution(empCont);
    setRetirementAge(age);
  };

  return (
    <div className="strategy-card">
      <h2>Retirement Strategy</h2>
      <p className="mt-2">Employee Contribution</p>
      <div className="d-flex-row">
        <Slider
          defaultValue={12}
          value={empCont}
          max={20}
          style={{ margin: "10px 8px 0 0" }}
          onChange={(e: any) => setEmpCont(e.target.value)}
        />
        <span>{empCont}%</span>
      </div>
      <p className="mt-1">Retirement Age</p>
      <div className="d-flex-row">
        <Slider
          defaultValue={65}
          value={age}
          min={20}
          max={80}
          style={{ margin: "10px 8px 0 0" }}
          onChange={(e: any) => setAge(e.target.value)}
        />
        <span>{age}</span>
      </div>
      <Divider />
      <div className="d-flex-row justify-content-between">
        <p>Employer Contribution</p>
        <p>8.4%</p>
      </div>
      <div className="d-flex-row justify-content-between">
        <p>Interest Rate</p>
        <p>5%</p>
      </div>
      <Button
        style={{
          backgroundColor: "#4935ff",
          color: "white",
          textTransform: "none",
          marginTop: 16,
          padding: "8px 24px",
          width: "100%",
          textAlign: "center",
        }}
        size="large"
        onClick={handleUpdate}
      >
        Update
      </Button>
    </div>
  );
};

export default RetirementStrategy;
