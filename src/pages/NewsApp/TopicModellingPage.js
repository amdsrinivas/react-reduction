import React from 'react';
import Page from 'components/Page';
import { getColor } from 'utils/colors';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
  } from 'reactstrap';

class TopicModellingPage extends React.Component{
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
      }
    
    test(){
        var text = document.getElementById('input_text').value ;
        var version = document.getElementById('input_version').value ;
        console.log('Text : ' + text + ' Version : ' + version ) ;
    }
    render(){
        const primaryColor = getColor('primary');
        const secondaryColor = getColor('secondary');

        return(
            <Page
            title="Topic Modelling"
            breadcrumbs={[{ name: 'TopicModellingPage', active: true }]}
            >

            <Card>
                <CardHeader> Enter the inputs :</CardHeader>
                <CardBody>
                    <Form>
                        <Label for="input_text">
                            News Article:
                        </Label>
                        <Input type="textarea" name="input_text"/><br/>
                        <Label for="version">
                            Select the model:
                        </Label>
                        <Input type="select" name="input_version">
                            <option value="v1">Topic Modelling using LDA</option>
                            <option value="v2">Topic Modelling using SOTA BERT model</option>
                        </Input>
                    </Form><br/>
                    <Button onClick="this.test">Submit</Button>
                </CardBody>
            </Card>

            </Page>
        )
    }
}

export default TopicModellingPage;