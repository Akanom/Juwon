import {Container} from 'reactstrap'
import CampsitesList from '../features/campsites/CampsitesList'
import SubHeader from '../components/SubHeader' 



const CampsitesDirectoryPage=()=>{

    return(
        <Container>
            <SubHeader current='Directory'/>
            <CampsitesList />
        </Container>
    )
}

export default CampsitesDirectoryPage 



// const CampsitesDirectoryPage = () => {
//     const selectedCampsite = selectRandomCampsite();

//     return (
//         <Container>
//             <Row>
//                 <Col sm='5' md='7'>
//                     <CampsitesList />
//                 </Col>
//                 <Col sm='7' md='5'>
//                     <CampsiteDetail campsite={selectedCampsite} />
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default CampsitesDirectoryPage;