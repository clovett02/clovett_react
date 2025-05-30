import { useState, useEffect } from 'react';
import '../css/resume.css'
import headshot from '../images/headshot.png';

export default function Resume(){

    const [pichidden, setpichidden] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleresize = () => {
            setpichidden(window.innerWidth < 900);
        }
        window.addEventListener('resize', handleresize);
        handleresize();
        return () => {
            window.removeEventListener('resize', handleresize);
        };
    }, []);

    return(
        <div className="resume">
            <div className="headshot" hidden={pichidden}>
                <picture id="headshot_pic">
                    <img src={headshot} width="194" height="218" alt="headshot.png"/>
                </picture>
            </div>
            <div className="body">
                <h2>Career Summary</h2>

                <p className="company">Nemours Childrens Hospital   |   <span className="companydescription">Healthcare</span></p>
                <p className="jobtitle">Enterprise Intelligence Developer, Data Analyst   |   <span className="dates_worked">May 2023 - Present</span></p>
                <p>
                    As an Enterprise Intelligence developer at Nemour’s, I work on an agile development team. I meet with stakeholders, 
                    gather requirements, and develop and modify solutions based off of those requirements. This include but is not 
                    limited to modify SQL statements used in Qlik Dashboards, creating dashboards from scratch, and creating scripts or 
                    small applications to automate repetitive tasks.
                    <ul className="bullet_items">
                        <li>
                            <span className="boldtext">Patient Billing Dashboard</span> After organizing a meeting with 8-12 stakeholders, 
                            I used information from that meeting and follow-ups to improve a QlikSense dashboard. I modified the 
                            dashboard to query data from various Employee, Patient, Provider, and Billing tables to generate valuable 
                            insights for the users of that dashboard.
                        </li>
                        <li>
                            <span className="boldtext">Excel VBA Dashboard</span> Drawing on old skills from a previous job, I updated and 
                            cleaned up VBA code for an Excel dashboard that a team was using to generate accounting reports. My changes 
                            made the code easier to maintain and more user friendly, providing a little more feedback and instruction 
                            whenever there were unhandled errors.
                        </li>
                    </ul>
                </p>


                <p className="company">KPMG   |   <span className="companydescription">Audit, Tax, and Advisory Services</span></p>
                <p className="jobtitle">Data Scientist, Senior Associate   |   <span className="dates_worked">Oct 2021 - April 2023</span></p>
                <p>
                    As the data scientist for our team, it was my responsibility to develop solutions to automate reports for our client 
                    and to give insight into ways to improve their processes to make them audit ready.
                    <ul className="bullet_items">
                        <li>
                            <span className="boldtext">DRI (Data Remediation Information) Tool</span> I created a desktop application with 
                            C# and .Net Core that automated no less than 12 recurring audit reports and KPI’s. 
                            One of the reports compared data from our client’s main inventory system with another global 
                            positioning inventory system. This made it possible to quickly highlight and correct inventory errors 
                            in the main system.
                        </li>
                        <li>
                            <span className="boldtext">Python Data Extraction Bot</span> Due to time constraints and our team not having access to our client’s 
                            underlying data tables for their inventory system at the time, I created a bot to extract the data that 
                            we needed for our reports. The bot used image recognition to mimic human points, clicks, and keyboard 
                            shortcuts, though it worked many times faster, and more reliably than a person. This saved many man hours 
                            and made it possible to generate some reports on a more frequent basis, since manually extracting that 
                            data from the system would usually take a person more than 4 to 5 work hours. With that time savings, it 
                            freed our team up to produce even more meaningful insights based off of that data.
                        </li>
                        <li>
                            <span className="boldtext">Inventory Progress Tracker</span> Our client was required to conduct a yearly inventory of all of their 
                            equipment held and maintained by all of its commands. I developed a desktop application with C# that 
                            would ingest data from their inventory system, and produce a detailed progress report showing how 
                            much of the inventory had been completed by each command with percentages and trends to give an idea 
                            of the expected completion timeframe at the current pace, for over a million assets, and $1 billion 
                            worth of inventory in total.
                        </li>
                    </ul>
                </p>
                
                <p className="company">KPMG   |   <span className="companydescription">Audit, Tax, and Advisory Services</span></p>
                <p className="jobtitle">Data Analyst, Associate   |   <span className="dates_worked">Apr 2018 - Oct 2021</span></p>
                <p>
                    As the Data Analyst and team lead for the Inventory Coordination branch for our client, 
                    it was my responsibility to make sure that our team reported accurately on the progress 
                    of the inventory that we were conducting, and to promptly provide reliable information 
                    on any errors that were found regarding the physical assets and the inventory system, 
                    along with suggestions for how to fix those issues.
                    <ul className="bullet_items">
                        <li>
                            <span className="boldtext">Created an Interactive Planograph</span> all in Excel using VBA. 
                            This macro provided a top-down map view of the client’s warehouse, given their inventory data. 
                            Clicking on any of the marked cells within the sheet would bring up detailed data in cells 
                            off to the right describing what was in each level on that location, along with quantity, 
                            dollar values, and other relevant information. After ingesting the inventory data and 
                            selecting a warehouse, the macro would automatically size and shade the cells on a worksheet, 
                            showing which areas were aisles, exits, storage areas, and locations with inventory currently 
                            on them.
                        </li>
                    
                        <li>
                            <span className="boldtext">GCSS (Global Combat Support System) Application</span> I created a 
                            desktop application for our team utilizing python and the tkinter package. The application 
                            stored data from multiple sources, including GCSS, in local .db files created with SQLite. 
                            This data was used to export a variety of accurate and useful reports in Excel and PDF format. 
                            This greatly helped our team and I with pinpointing and resolving issues with our client’s 
                            inventory, and made our client deliverable reports uniform, accurate, and capable of being 
                            generated in minutes by anyone on the team.
                        </li>
                    </ul>
                </p>
                
            </div>            

        </div>
    );
}