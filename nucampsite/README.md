**1. Introduction**

1... Starting the application

start and watch json file in gitbash

open the json-server file with gitbash (this can also be opened in your prefered text editor) and run the code below before starting the application. 

*json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000*


**2. Home Page**

The code combines the HomePage, DisplayList, and SubHeader components.

The HomePage component is a functional component that returns a Container from the reactstrap library with the SubHeader and DisplayList components inside.

The DisplayList component is also a functional component that uses the useSelector hook from react-redux to retrieve an array of featured items from the campsites, promotions, and partners slices of the store. It maps over this array and returns either a Loading component, an Error component with an error message, or an AnimatedDisplayCard.

**3. Campsite Detail Page**

This repository contains the code for a Campsite Detail page, where users can view details about a specific campsite, including an image, name, and description.

3.1 Components

The code consists of two main components:

CampsiteDetailPage

CampsiteDetail

3.1.1 CampsiteDetailPage

This component is the main component of the Campsite Detail page. It uses React's useParams hook to fetch the campsite id from the URL, and then fetches the campsite data from the Redux store using useSelector. The component uses conditional rendering to determine what to display based on the state of the store. If the data is loading, a loading spinner is displayed. If there's an error, an error message is displayed. Otherwise, the component displays a CampsiteDetail component and a CommentsList component.

3.1.2.CampsiteDetail

This component is a functional component that takes in a campsite object as a prop. It displays the image, name, and description of the campsite using the Reactstrap library.

3.3 Data

The code uses data from a server that serves data in JSON format. The data is fetched using the fetchCampsites thunk, which is created using the createAsyncThunk function from the Redux Toolkit. The fetchCampsites thunk is triggered by an action that's dispatched from a component. The data is stored in the Redux store under the campsites slice. The code provides several selectors for accessing data from the store, including selectAllCampsites, selectCampsiteById, and selectFeaturedCampsite.


**4. About Page**

This page is a representation of the About section of a website, and it displays information about the mission and history of the website, as well as a list of community partners.

The web application in question consists of several components that work together to provide a visually appealing and responsive layout. At the top level, there is the Container component, which serves as a holder for all other components. The SubHeader component is a custom component that displays the title of the current page.

The Row component, which is part of the "reactstrap" library, provides a flexible and responsive layout. The Col component, also from "reactstrap", represents a column within the Row component. Another "reactstrap" component, the Card component, is used to display information in a visually appealing way. The CardBody component holds the contents of the Card component, while the CardHeader component holds the header of the Card component.

In addition to these components, there is the PartnersList component, which displays a list of community partners. The PartnersList component is composed of several sub-components, including the selectAllPartners function from the "./partnersSlice" file, which retrieves the partners from the state. The Partner component is a custom component that displays information about a single partner. The useSelector hook from the "react-redux" library allows for accessing the state. Finally, the Error and Loading components are custom components that respectively display an error message and a loading indicator.

In summary, the AboutPage component provides information about the mission and history of the website, as well as a list of community partners. The PartnersList component is responsible for displaying the partners and is made up of several sub-components, including the Partner component, which displays the information of a single partner.



**5. DIrectory Page**

5.1. Campsite Directory Page

The code block imports three components: Container, CampsitesList, and SubHeader. It then defines a functional component called CampsitesDirectoryPage which returns a Container component containing a SubHeader component with a current prop of "Directory" and a CampsitesList component. Finally, it exports the CampsitesDirectoryPage component.

5.2 Campaite List Page

The code block imports CampsiteCard, Col, Row, selectAllCampsites, useSelector, Loading, and Error from different files. It defines a functional component called CampsitesList which retrieves an array of campsites from the Redux store using the useSelector hook and also checks the loading status and error message using isLoading and errMsg variables. If isLoading is true, it returns a Loading component, and if errMsg is truthy, it returns an Error component with the error message. If neither isLoading nor errMsg are true, it maps through the campsites array, rendering a CampsiteCard component for each campsite. Finally, it exports the CampsitesList component.



**6. Contact Page**

6.1 Contact Page

The code block is a  component for a Contact page that includes a SubHeader component and a ContactForm component. The Contact page displays a physical address, phone number, and email, as well as a form for submitting feedback. The page is built using the Reactstrap library and contains two rows with columns that are used to structure the layout.

6.2 Contact Form

The second code  is a component that contains a form for submitting contact information and feedback. It uses the Formik library for form management and includes fields for first name, last name, phone number, email, checkbox for contact permission, a dropdown menu for contact type, and a textarea for feedback. The form also contains validation using a custom function. When submitted, the form logs the form values to the console and resets the form using the Formik resetForm method.





