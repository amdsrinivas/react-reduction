import React from 'react';
import Page from 'components/Page';
import { getColor } from 'utils/colors';
import {Doughnut} from "react-chartjs-2" ;
import { randomNum } from 'utils/demos';

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    Input,
    Label,
    Row,
  } from 'reactstrap';

const models_available = ['v1', 'v2'] ;
const descriptions = {
    'v1' : 'Topic Modelling using LDA' ,
    'v2' : 'Topic Modelling using SOTA BERT'
}
const feedback_enabled = false ;

class TopicModellingPage extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {...this.getInitialState()} ;
    }
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0);
      }
    
    
    getInitialState(){
        return {
            'input_text' : '',
            'input_version' : 'v1',
            'output' : '',
            'feedback' : '-1',
            'doughnut_data' : null
        } ;
    }  
    
    createOptions(){
        var options = [] ;
        var i ;
        for (i in models_available){
            var cur_model = models_available[i] ;
            //console.log(cur_model) ;
            options.push(<option key={i} value={cur_model}>{descriptions[cur_model]}</option> )
        }
        return options ;
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
                        <Input type="textarea" 
                               name="input_text" 
                               value={this.state.input_text}
                               onChange={(event) => this.setState({'input_text' : event.target.value, 'output' : null})}/><br/>
                        <Label for="version">
                            Select the model:
                        </Label>
                        <Input type="select" 
                               name="input_version"
                               value={this.state.input_version}
                               onChange={(event) => {this.setState({'input_version' : event.target.value, 'output' : null})}}>
                            {/* <option value="v1">Topic Modelling using LDA </option>
                            <option value="v2">Topic Modelling using SOTA BERT model</option> */}
                            {this.createOptions()}
                        </Input><br/>
                        <Button onClick = { () => { 
                                                    console.log('Inside onClick') ;
                                                    console.log(' input_text : ' + this.state.input_text) ;
                                                    console.log(' input_version : ' + this.state.input_version) ;
                                                    this.setState({'output' : 'Done'}) ;
                                                }}>Submit</Button>
                                                &nbsp; &nbsp; &nbsp;
                        <Button  onClick = { () => {
                                                    this.setState(this.getInitialState()) ;
                                          }}>Reset</Button>
                    </Form>

                </CardBody>
            </Card><br/>
           
            {(this.state.output == 'Done')?
                (<Row><Col xl={8} lg={12} md={12}><Card>
                    <CardHeader>Model Output</CardHeader>
                    <CardBody>
                        <Doughnut data={{datasets: [
                                                {
                                                    data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
                                                    backgroundColor: [
                                                        getColor('primary'),
                                                        getColor('secondary'),
                                                        getColor('success'),
                                                        getColor('info'),
                                                        getColor('danger'),
                                                    ],
                                                    label: 'Dataset 1',
                                                },
                                            ],
                                        labels: ['Very Negative', 'Negative', 'Neutral', 'Positive', 'Very Postive']
                                        }
                                        }/>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                {(feedback_enabled == true)?(<Card>
                    <CardHeader>Provide Feedback (optional)</CardHeader>
                    <CardBody>
                        <Form>
                            <Label for="feedback">Select a class</Label>
                            <Input type="select"
                                   name="feedback"
                                   value={this.state.feedback}
                                   onChange={(event) => { this.setState({'feedback' : event.target.value})}}>
                                       <option value={0}>Negative</option>
                                       <option value={1}>Postive</option>
                            </Input><br/>
                            <Button onClick={()=> {
                                console.log(JSON.stringify(this.state));
                                            }}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>):(<span/>)}
                
                </Col>
                </Row>
                ):
                (<Card>
                    <CardBody>Submit to see the model outputs</CardBody>
                </Card>)
            }

            </Page>
        )
    }
}

export default TopicModellingPage;