import { Article} from '@/components/article'
import { Layout } from '@/components/layout'
import React, { useState } from 'react';
import Clock from '../tables/Clock';

//Calendar
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { TimeClock } from '@mui/x-date-pickers/TimeClock';
// import dayjs from 'dayjs';

import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import Tasks from '../tables/Tasks'
import Meeting from '../tables/Meeting'
import Employee from '../tables/Employee'
import Chart from '../tables/Chart';

import placeholder from  '../assets/images/placeholder.png'

// const [currentTime, setCurrentTime] = useState(new Date());

export default function Account() {

  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };


  return (
    <Layout>
      <Article>
      <div
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29) ',
              padding: 50,
              width: 1500,
              marginLeft: 100,
            }}
          >
          
        <MDBRow>
        <MDBCol size='3'>
          <div className='flex-row'>
          <img
                    src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyq2bMtBbRDoABr2Glnx6pST2BNJ1OnTDXQ&usqp=CAU'
                    alt="Default user icon"
                    style={{
                        cursor: 'pointer',
                        height: '45px',
                        width: '45px',
                        borderRadius: '50%',
                    }}
                    />
           <p style={{marginTop: '-30px'}}> Admin</p></div>
          <MDBTabs className='flex-column text-center mt-3 '>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Task Management
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
               Setup Meetings
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Sacco Growth
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
                Register New Employee
              </MDBTabsLink>
            </MDBTabsItem>
            
          </MDBTabs>

          {/* <Clock /> */}

          <div>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
          </LocalizationProvider> */}
          </div>

          <div>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeClock defaultValue={dayjs(currentTime)}/>
          </LocalizationProvider> */}
          </div>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}><Tasks/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}><Meeting/></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}><Chart /></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab4'}><Employee /></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
   
      </div>

      
       
      </Article>
    </Layout>
  )
}
