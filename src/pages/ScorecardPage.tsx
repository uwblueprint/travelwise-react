import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import DonutChart from "react-d3-donut";
import { Card, LinearProgress } from "@material-ui/core";

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

interface DonutComponentProps {
  data: Array<{count: number, color: string}>;
  innerRadius: number;
  outerRadius: number;
  displayString: string;
  fontSize: number;
}

const DonutComponent: React.FC<DonutComponentProps> = (props) => {
  var data = props.data

  return(
    <div style={{padding: 20, textAlign: "center"}}>
      <div style={{position: "relative", top: props.outerRadius + 0.5 * props.fontSize, fontSize: props.fontSize, fontWeight: "bold" }}>{props.displayString}</div>
      <DonutChart
        innerRadius={props.innerRadius}
        outerRadius={props.outerRadius}
        transition={true}
        svgClass="example3"
        pieClass="pie3"
        strokeWidtn={0}
        data={data}
      />
    </div>
  )
}
/*
const LinearProgressCard: React.FC = () => {

}
*/

const ScorecardPage: React.FC = () => {
  var dt = [{count: 3, color: "#1978BE"}, {count: 1, color: '#F3F3F3'}]
  return (
    <div>
      
      <DonutComponent data={dt} innerRadius={120} outerRadius={130} fontSize={30} displayString="12/30"/>
      <Card style={{width: 300}}>
        <LinearProgress variant="determinate" value={50} />
      </Card>
      

      companies
      {companiesList}
    </div>
  );
};

export default ScorecardPage;
