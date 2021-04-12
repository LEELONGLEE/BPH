/* global google */
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
//import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

import { GoogleMap, Polygon } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";

import { extend, post } from "jquery";

import Select from './ReactSelect.js';
import Calendar from './Calendar.js';
import Popover from './Popover.js'
import Piechart from './Pie_Chart.js'
import Barchart from './Bar_Chart.js'
import PopoverBot from './PopoverBot.js'
import Botchat from './botchat/Bot_Chat.js'

import { VscHubot } from 'react-icons/vsc'

import './reactcss/index.css'
import { CopyrightOutlined } from "@material-ui/icons";

var Districtlatlong = [];
var Districtlatlong1 = [];
var Districtlatlong2 = [];
var Districtlatlong3 = [];
var Districtlatlong4 = [];

const items = [
  {
    id: 1,
    value: "Tất cả"
  },
  {
    id: 2,
    value: "TP Cao Lãnh"
  },
  {
    id: 3,
    value: "Huyện Tháp Mười"
  },
  {
    id: 4,
    value: "Hồng Ngự"
  },
]

const districts = [
  {
    id: 1,
    value: "Huyện Cao Lãnh",
    color: "Red",
    date: "",
    coor: []
  },
  {
    id: 2,
    value: "TP Cao Lãnh",
    color: "Yellow",
    date: "",
    coor: []
  },
  {
    id: 3,
    value: "Huyện Tháp Mười",
    color: "Blue",
    date: "",
    coor: []
  },
  {
    id: 4,
    value: "Hồng Ngự",
    color: "Green",
    date: "",
    coor: []
  },
  {
    id: 5,
    value: "Huyện Hồng Ngự",
    color: "Pink",
    date: "",
    coor: []
  },
]

//const setselectData = 'open';

function Index() {

  const [selectData, setselectData] = useState('open');
  const [selectDate, setselectDate] = useState('a');
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  // console.log("selectDataindex ", selectData);
  console.log("selectDateIndex ", selectDate);
  // get Json from link
  const HTMdata = require('./latlong/HuyenThapMuoilatlong.json');
  const TPCLdata = require('./latlong/TPCaoLanhlatlong.json');
  const HCLdata = require('./latlong/HuyenCaoLanh.json');
  const TPSDdata = require('./latlong/TPSaDeclatlong.json');
  const HNdata = require('./latlong/HongNgulatlong.json');
  const HHNdata = require('./latlong/HuyenHongNgu.json');
  const HTHdata = require('./latlong/HuyenTanHong.json');
  const HTNdata = require('./latlong/HuyenTamNong.json');
  const HTBdata = require('./latlong/HuyenThanhBinh.json');
  const HLVdata = require('./latlong/HuyenLapVo.json');
  const HLaiVungdata = require('./latlong/HuyenLaiVung.json');
  const HCTdata = require('./latlong/HuyenChauThanh.json');

  //console.log("HCTcoor: ", HCTdata['geometry']['coordinates'][0]);
  //console.log("tpcl ", TPCLdata[0]['geojson']['coordinates']);

  // call to coordinates json
  const HTMcoor = HTMdata['geometry']['coordinates'];
  const TPCLcoor = TPCLdata[0]['geojson']['coordinates'];
  const HCLcoor = HCLdata[0]['geojson']['coordinates'][0];
  const TPSDcoor = TPSDdata[0]['geojson']['coordinates'];
  const HNcoor = HNdata[0]['geojson']['coordinates'];
  const HHNcoor = HHNdata[0]['geojson']['coordinates'][0];
  const HTHcoor = HTHdata[0]['geojson']['coordinates'][0];
  const HTNcoor = HTNdata[0]['geojson']['coordinates'][0];
  const HTBcoor = HTBdata[0]['geojson']['coordinates'][0];
  const HLVcoor = HLVdata[0]['geojson']['coordinates'][0];
  const HLaiVungcoor = HLaiVungdata[0]['geojson']['coordinates'][0];
  const HCTcoor = HCTdata['geometry']['coordinates'][0];

  // HN
  if (selectData == "Hồng Ngự") {
    EmptyArr();
    districts.forEach((dis) => {
      if (dis.value == "Hồng Ngự") {
        var objectHN = myFunction(HNcoor);
        dis.coor = [
          objectHN.arr
        ]
      } else if (dis.value == "Huyện Hồng Ngự") {
        var objectHHN = myFunction(HHNcoor);
        dis.coor = [
          objectHHN.arr
        ]
      }
    })
    console.log("districts real HN: ", districts);

    // TP Cao Lanh
  } else if (selectData == "TP Cao Lãnh") {
    EmptyArr();
    districts.forEach((dis) => {
      if (dis.value == "Huyện Cao Lãnh") {
        var objectHCL = myFunction(HCLcoor);
        dis.coor = [
          objectHCL.arr
        ]
        console.log("objectHCL: ", objectHCL);
        Districtlatlong.push(objectHCL.arr);
        console.log("Districtlatlongz: ", Districtlatlong);
      } else if (dis.value == "TP Cao Lãnh") {
        var objectTPCL = myFunction(TPCLcoor);
        dis.coor = [
          objectTPCL.arr
        ]
        Districtlatlong.push(objectTPCL.arr);
      }
      console.log("dis: ", dis);
    })

    // Huyen TM
  } else if (selectData == "Huyện Tháp Mười") {
    EmptyArr();
    districts.forEach((dis) => {
      dis.coor = []
    })

    districts.forEach((dis) => {
      if (dis.value == "Huyện Tháp Mười") {
        var objectHTM = myFunction(HTMcoor);
        dis.coor = [
          objectHTM.arr
        ]
      }
    })

    // All
  } else if (selectData == "Tất cả") {
    EmptyArr();
    districts.forEach((dis) => {
      if (dis.value == "Huyện Cao Lãnh") {
        var objectHCL = myFunction(HCLcoor);
        dis.coor = [
          objectHCL.arr
        ]
        console.log("objectHCL: ", objectHCL);
        Districtlatlong.push(objectHCL.arr);
        console.log("Districtlatlongz: ", Districtlatlong);
      } else if (dis.value == "TP Cao Lãnh") {
        var objectTPCL = myFunction(TPCLcoor);
        dis.coor = [
          objectTPCL.arr
        ]
        Districtlatlong.push(objectTPCL.arr);
      } else if (dis.value == "Huyện Tháp Mười") {
        var objectHTM = myFunction(HTMcoor);
        dis.coor = [
          objectHTM.arr
        ]
      } else if (dis.value == "Hồng Ngự") {
        var objectHN = myFunction(HNcoor);
        dis.coor = [
          objectHN.arr
        ]
      } else if (dis.value == "Huyện Hồng Ngự") {
        var objectHHN = myFunction(HHNcoor);
        dis.coor = [
          objectHHN.arr
        ]
      }
      console.log("dis: ", dis);
    })

    console.log("districts real: ", districts);
  }

  const data = require('./ReactSelect.js');

  function displayAllDistricts() {
    districts.forEach((dis) => {
      if (dis.value == "Huyện Cao Lãnh") {
        var objectHCL = myFunction(HCLcoor);
        dis.coor = [
          objectHCL.arr
        ]
        console.log("objectHCL: ", objectHCL);
        Districtlatlong.push(objectHCL.arr);
        console.log("Districtlatlongz: ", Districtlatlong);
      } else if (dis.value == "TP Cao Lãnh") {
        var objectTPCL = myFunction(TPCLcoor);
        dis.coor = [
          objectTPCL.arr
        ]
        Districtlatlong.push(objectTPCL.arr);
      } else if (dis.value == "Huyện Tháp Mười") {
        var objectHTM = myFunction(HTMcoor);
        dis.coor = [
          objectHTM.arr
        ]
      } else if (dis.value == "Hồng Ngự") {
        var objectHN = myFunction(HNcoor);
        dis.coor = [
          objectHN.arr
        ]
      } else if (dis.value == "Huyện Hồng Ngự") {
        var objectHHN = myFunction(HHNcoor);
        dis.coor = [
          objectHHN.arr
        ]
      }
      console.log("dis: ", dis);
    })
  }

  function EmptyArr() {
    districts.forEach((dis) => {
      dis.coor = []
    })
  }

  //function to push object into array
  function myFunction(coor) {
    var tempDT = [];
    coor.forEach((i) => {
      var object = {
        lat: i[1], lng: i[0]
      }
      tempDT.push(object)
    },
    )
    var obj = {
      arr: tempDT
    }
    return obj;
  }

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const WrappedMap = withScriptjs(withGoogleMap(wrappedGoogleMap));

  function wrappedGoogleMap() {
    return (
      <GoogleMap defaultZoom={10.2}
        defaultCenter={{ lat: 10.554040, lng: 105.563560 }} >
        {displayAllDistricts()}
        {districts.map(d => (
          <Polygon
            path={d.coor[0]}
            defaultOptions={{
              fillColor: d.color,
              fillOpacity: 0.35,
              strokeWeight: 1,
              strokeColor: "Black",
            }}
          />
        ))}
      </GoogleMap>
    )
  }

  return (
    <>
      <Header />
      <div className="botChatArea">
        {/* <Botchat /> */}
        {/* <VscHubot className="vscbot" /> */}
        <PopoverBot />
        {/* <PopoverBot /> */}
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col" style={{ width: '100vh', height: '100vh' }}>
                    <WrappedMap
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB3qZKYhGXsldb46EevVM7lW1H3qRX9wl0&v=3.exp&libraries=geometry,drawing,places`}
                      loadingElement={<div style={{ height: "100%" }} />}
                      containerElement={<div style={{ height: "100%" }} />}
                      mapElement={<div style={{ height: "100%" }} />}
                    />
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-uppercase text-muted ls-1 mb-1">
                      Huyện: <Select title="Select District" items={items} setselectData={setselectData} />
                    </h3>
                    <h3 className="text-uppercase text-muted ls-1 mb-1">
                      Ngày: <Popover setselectDate={setselectDate} />
                    </h3>
                    <div className="dateArea">
                      <h3>{selectDate}</h3>
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Piechart />
                </div>
              </CardBody>
              <CardBody>
                <div className="chart">
                  {/* <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  /> */}
                  <Barchart />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                        </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                        </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                          46,53%
                        </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                          36,49%
                        </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                        </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                          46,53%
                        </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                        </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  )
}
// load google Map
//const WrappedMap = withScriptjs(withGoogleMap(Map));



export default Index;
