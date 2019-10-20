import React from 'react';
import Page from 'components/Page';
import { getColor } from 'utils/colors';

class HomePage extends React.Component{
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
      }
    
    render(){
        const primaryColor = getColor('primary');
        const secondaryColor = getColor('secondary');

        return(
            <Page
            title="Home page"
            breadcrumbs={[{ name: 'HomePage', active: true }]}
            ></Page>
        )
    }
}

export default HomePage;