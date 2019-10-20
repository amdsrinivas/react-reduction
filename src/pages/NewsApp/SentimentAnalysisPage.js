import React from 'react';
import Page from 'components/Page';
import { getColor } from 'utils/colors';

class SentimentAnalysisPage extends React.Component{
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
      }
    
    render(){
        const primaryColor = getColor('primary');
        const secondaryColor = getColor('secondary');

        return(
            <Page
            title="Sentiment Analysis"
            breadcrumbs={[{ name: 'SentimentAnalysisPage', active: true }]}
            ></Page>
        )
    }
}

export default SentimentAnalysisPage;