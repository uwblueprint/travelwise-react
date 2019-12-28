import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import DonutChart from "react-d3-donut";
import { Card, Checkbox, LinearProgress, makeStyles } from "@material-ui/core";

import CheckListCard from "./ScorecardComponents/CheckListCard";
import DonutComponent from "./ScorecardComponents/DonutComponent";
import DonutCard from "./ScorecardComponents/DonutCard";
import LinearProgressCard from "./ScorecardComponents/LinearProgressCard";
/*
const COMPANIES_QUERY = gql`
  {
    companies {
      name
      id
    }
  }
`;

interface Data {
  companies: Array<{ id: string; name: string }>;
}

const companiesList = (
  <Query<Data> query={COMPANIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <h1>ERROR</h1>;
      if (!data) return <div>no data</div>;

      const companies = data.companies;
      return companies.map(company => <div>{company.name}</div>);
    }}
  </Query>
);
*/

const ScorecardPage: React.FC = () => {
  var dt = [{count: 3, color: "#1978BE"}, {count: 1, color: '#F3F3F3'}]
  var dt2 = [{count: 15, color: "#F6C000"}, {count: 5, color: '#F3F3F3'}]
  var flurble = [
    {name: "Additional Subsidies", isChecked: false},
    {name: "Transit map is displayed", isChecked: true},
    {name: "Located with 500m of GRT", isChecked: true}
  ]

  const classes = makeStyles(() => ({
    checklist: {
      border: "1.36px solid #CCCCCC",
      maxWidth: 300,
      minWidth: 150,
      width: '25vw'
    }
  }))();

  return (
    <div style={{margin: '20px', display: 'flex'}}>
      <div>
        <div style={{display: 'flex', alignItems: 'row', justifyContent: 'center'}}>
        <DonutComponent data={dt} pieClass='pie1' innerRadius={130} outerRadius={150} fontSize={30} title="Overall Score"/>
       </div>

        <div style={{display: 'flex', alignItems: 'column', justifyContent: 'center'}}>
          <LinearProgressCard title="Target and Achievement" numerator={15} denominator={30} barColor="#1978BE"/>
          <LinearProgressCard title="Support Structure" numerator={15} denominator={30} barColor="#71A850"/>
          {/*<LinearProgressCard title="Mode-Specific" numerator={15} denominator={30} barColor="#F6C000"/>*/}
          <DonutCard data={dt2} innerRadius={90} outerRadius={100} title={"Mode-Specific"} fontSize={20} pieClass={'pie2'} description={"A brief description."}/>
        </div>
      </div>

      <Card className={classes.checklist}>
        <CheckListCard data={flurble} title={"Administrative"}/>
        <CheckListCard data={flurble} title={"Other items"}/>
      </Card>


{/*
  <div style={{margin: '20px'}}>
        companies
        {companiesList}
      </div>
*/}
    </div>
  );
};

export default ScorecardPage;
