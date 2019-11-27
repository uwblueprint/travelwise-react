import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import DonutChart from "react-d3-donut";
import { Card, LinearProgress, makeStyles } from "@material-ui/core";

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
  title: string;
  fontSize: number;
  pieClass: string;
}

const DonutComponent: React.FC<DonutComponentProps> = (props) => {
  var data = props.data
  const classes = makeStyles(() => ({
    innerNumberDiv: {
      position: "absolute",
      fontSize: props.fontSize,
      fontWeight: "bold",
      bottom: '50%',

      // horizontal center
      width: '100%',
      textAlign: 'center',
    },
    innerTitleDiv: {
      position: "absolute",
      fontSize: props.fontSize * 0.75,
      fontWeight: "bold",
      top: '50%',

      // horizontal center
      width: '100%',
      textAlign: 'center',
    },
    outerDiv: {
      display: 'inline-block',
      position: 'relative',
    }
  }))();

  return(
    <div className={classes.outerDiv}>
      <div className={classes.innerNumberDiv}>{data[0].count + "/" + (data[0].count + data[1].count)}</div>
      <div className={classes.innerTitleDiv}>{props.title}</div>
      <DonutChart
        innerRadius={props.innerRadius}
        outerRadius={props.outerRadius}
        transition={true}
        svgClass="example3"
        pieClass={props.pieClass}
        strokeWidtn={0}
        data={data}
      />
    </div>
  )
}

interface LinearProgressCardProps {
  title: string,
  numerator: number,
  denominator: number,
  barColor: string
}

const LinearProgressCard: React.FC<LinearProgressCardProps> = (props) => {
  const classes = makeStyles(() => ({
    cardStyle: {
      border: "1.36px solid #CCCCCC",
      maxWidth: 210,
      minWidth: 150,
      maxHeight: 280,
      minHeight: 200,
      textAlign: "center",
      padding: 31.6,
      width: '15vw',
      height: '20vw',
      display: 'flex',
      flexDirection: 'column',
    },
    barRoot: {
      height: 5,
      backgroundColor: "#CCCCCC",
      borderRadius: 10
    },
    barBar: {
      borderRadius: 10,
      backgroundColor: props.barColor
    },
    title: {
      padding: 0,
      margin: 0
    }
  }))();

  return(
    <Card className={classes.cardStyle}>
      <h3 className={classes.title}>{props.title}</h3>
      <div style={{flexGrow: 2}}/>
      <h1>{props.numerator + " / " + props.denominator}</h1>
      <div style={{flexGrow: 3}}/>
      <LinearProgress 
        variant="determinate" 
        classes={{root: classes.barRoot, bar: classes.barBar}} 
        value={props.numerator/props.denominator*100}
      />
    </Card>
  )
}


const ScorecardPage: React.FC = () => {
  var dt = [{count: 3, color: "#1978BE"}, {count: 1, color: '#F3F3F3'}]
  return (
    <div style={{margin: '20px'}}>
      
      <DonutComponent data={dt} pieClass='pie1' innerRadius={120} outerRadius={130} fontSize={30} title="item 1"/>
      <DonutComponent data={dt} pieClass='pie8' innerRadius={90} outerRadius={100} fontSize={15} title="item 2"/>


      <LinearProgressCard title="title" numerator={30} denominator={40} barColor="#71A850"/>
      <LinearProgressCard title="title" numerator={30} denominator={40} barColor="#71A850"/>

      <div style={{margin: '20px'}}>
        companies
        {companiesList}
      </div>
    </div>
  );
};

export default ScorecardPage;
