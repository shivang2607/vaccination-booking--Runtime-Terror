import React, { useState, useEffect } from 'react';
import { Table, Col, Form, Button } from 'react-bootstrap'
import {Certify} from './certify'

export const Booking = () => {
  const [stateid, setStateid] = useState([]);
  const [districtid, setDistrictid] = useState([]);
  const [items, setItems] = useState([]);
  const [cities, setCities] = useState([]);
  const [hos, setHos] = useState([]);
  const [fees, setFees] = useState([]);
  const [caddress, setCaddress] = useState([]); 
  const [cfeetype, setCfeetype] = useState([]); 
  const [cname, setCname] = useState([]); 
  const [cdistrict, setCdistrict] = useState([]); 
  const [token, setToken] = useState([]); 
  const [vaccine, setVaccine] = useState([]); 
  const [certifycomponent, setCertifycomponent] = useState(true);
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const onhandelClick = () => {
    setChecked(!checked);
  }
  // const [open, setOpen] = useState(false);



  let date = new Date();
  var dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  let today = dd+'-'+mm+'-'+yy;
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        }
      )
  }, [])

  useEffect(() => {
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`)
      .then(res2 => res2.json())
      .then(
        (result2) => {
          setCities(result2);
        },
      )
  }, [stateid])

  useEffect(() => {
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${dd + '-' + mm + '-' + yy}`)
      .then(res3 => res3.json())
      .then(
        (result3) => {
          setHos(result3);
        },
      )
  }, [districtid, mm, dd, yy])


  let inputstyle = {
    width: '66%'
  }
  const formstyle = {
    padding: '20px',
    margin: 'auto',
    border: '1px solid grey',
    width: '60%',
    minHeight: '30vh'
  }
  let tablestyle = {
    width: '60%',
    margin: '40px auto',
    height: '52vh',
    border: '1px solid grey',
    padding: '10px',
    overflow: 'scroll',
    backgroundColor:'white'
  }
  let tabstyle = {
    overflow: 'scroll'
  }

  const change = (e) => {
    setDistrictid(e.target.value)
    setShow(true)
  }
  const onBooked = () => {
    alert('All Slots are Booked for this Hospital!')
  }
  const submit = (e) => {
    e.preventDefault();
    stateid ? setClick(true) : alert('cgg')

    //    if(!cities)
    //    alert('please choose all the required values!');
    //    else
    //    {
    //         setOpen(true);
    //        val=1;
    //    }
  }
  const certify = (fee,address,fee_type1, name1, district_name1, token, vaccine)=>{
    console.log("certify is working", fee);
    setFees(fee);
    setCaddress(address)
    setCfeetype(fee_type1);
    setCname(name1);
    setCdistrict(district_name1);
    setToken(token);
    setVaccine(vaccine);
    setCertifycomponent(false);
  }

  console.log(hos);
  return (
    <>

    {certifycomponent?<div>
      <div style={formstyle}>
        <Form className='ml-3' onSubmit={submit}>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="State" style={inputstyle} onChange={e => setStateid(e.target.value)}>
                <option value="-1">State...</option>
                {items.states && items.states.map((i) => {
                  return <option key={i.state_id} value={i.state_id}>{i.state_name}</option>
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity" >
              <Form.Label>City</Form.Label>
              <Form.Control as="select" defaultValue="City" style={inputstyle} onChange={change}>
                <option value='-1'>City...</option>
                {cities.districts && cities.districts.map((i) => {
                  return <option key={i.district_id} value={i.district_id}>{i.district_name}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox1">
            <Form.Check type="checkbox" label="18+" onChange={onhandelClick} className='mx-2' />
          </Form.Group>

          {show ? <Button variant="primary" type="submit" >
            Search
</Button> : null}

        </Form>
      </div>


      {click ? <div className="table" style={tablestyle} >
        <Table responsive style={tabstyle} >
          <thead>
            <tr>
              <th>Center Name </th>
              {Array.from({ length: 3 }).map((_, index) => (
                <th key={index}>{(dd + index) + '/' + mm + '/' + yy}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              hos.sessions && hos.sessions.map((i) => {
                return (

                  checked === true ? i.min_age_limit === 18 ?
                    <tr>
                      <td>{i.name}<label style={{ color: 'red', fontSize: 12 }}>&nbsp; Fee: Rs.  {i.fee}</label><br></br><label style={{ color: 'green', fontSize: 12 }}>{i.address}</label></td>{i.available_capacity === 0 ? <td key={i.center_id}><Button variant='danger' className="btn btn-sm" onClick={onBooked}>Booked</Button><br />
                        <label style={{ color: 'red', fontSize: 12, margin: '1px auto' }}>{i.min_age_limit}+</label> </td> :
                        <td key={i.center_id}><Button variant='success' className="btn btn-sm" onClick={()=>certify(i.fee, i.address, i.fee_type, i.name, i.district_name, i.available_capacity, i.vaccine)}>{i.available_capacity}
                        </Button>
                          <br />
                          <label style={{ color: 'red', fontSize: 12, margin: '1px auto' }}>{i.min_age_limit}+</label>
                        </td>}<td ><Button variant='light' className="btn btn-sm">N/A</Button> </td> <td ><Button variant='light' className="btn btn-sm">N/A</Button> </td>
                    </tr> : <tr></tr> :
                    <tr><td>{i.name}<label style={{ color: 'red', fontSize: 12 }}>&nbsp; Fee: Rs.  {i.fee}</label><br></br><label style={{ color: 'green', fontSize: 12 }}>{i.address}</label></td>{i.available_capacity === 0 ? <td key={i.center_id}><Button variant='danger' className="btn btn-sm" onClick={onBooked}>Booked</Button>
                      <br />
                      <label style={{ color: 'red', fontSize: 12 }}>{i.min_age_limit}+</label>  </td> :
                      <td key={i.center_id}><Button variant='success' className="btn btn-sm" onClick={()=>certify(i.fee, i.address, i.fee_type, i.name, i.district_name, i.available_capacity, i.vaccine)}>{i.available_capacity}

                      </Button><br />
                        <label style={{ color: 'red', fontSize: 12 }}>{i.min_age_limit}+</label>  </td>}<td ><Button variant='light' className="btn btn-sm">N/A</Button> </td> <td ><Button variant='light' className="btn btn-sm">N/A</Button> </td></tr>
                )
              })
            }
          </tbody>
        </Table>
      </div> : null}

    </div>:
    <Certify fees={fees} Address={caddress} Name={cname} district = {cdistrict} type={cfeetype} token = {token} date={today} vaccine={vaccine}/>}
            </>
  )
}
