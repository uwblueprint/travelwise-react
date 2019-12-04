import React from 'react';
import { QuestionProps } from './Question';

const CATEGORY_1 = "category 1";
const CATEGORY_2 = "category 2";
const CATEGORY_3 = "category 3";

class EditTab extends React.Component<QuestionProps>{
    readonly state: QuestionProps;

    // public static defaultProps = QuestionProps;

    constructor(props:QuestionProps){
        super(props);
        let question = props;
        this.updateState = this.updateState.bind(this);
        this.addOption = this.addOption.bind(this);
        this.render = this.render.bind(this);
        this.editQuestionType = this.editQuestionType.bind(this);
        this.editOptionValue = this.editOptionValue.bind(this);
        this.editParagraphValue = this.editParagraphValue.bind(this);
        this.state = question;
    }

    handleSubmit(event:React.FormEvent<HTMLFormElement>){
        this.setState({value: event.currentTarget.value});
        // TODO: update DB
        event.preventDefault();
    }

    updateState(question: QuestionProps){
        this.setState(question);
    }

    addOption(){
        var qInfo = this.state;
        qInfo.options.push({id: qInfo.options.length.toString(), value:""})
        this.updateState(qInfo);
    }

    editQuestionType(event:React.ChangeEvent<HTMLSelectElement>){
        console.log(event.type)
        const name = event.target.name;
        var value = event.target.value;

        if(value === "Radio Buttons"){
            value="radio";
        }else if(value === "Radio Grid"){
            value="radio_grid";
        }else if(value === "Checkboxes"){
            value = "multiselect";
        }else if(value ==="Paragraph"){
            value ="text"; // TODO: determine if proper name?
        }else if(value === "Text Input"){
            value="textarea";
        }

        interface objectInterface{
            [index: string]: any
        }
        let obj: objectInterface = {};
        obj[name] = value;
        this.setState(obj);
    }

    editCategory(event:React.ChangeEvent<HTMLSelectElement>){
        console.log(event.type)
        const name = event.target.name;
        var value = event.target.value;

        if(value === CATEGORY_1){
            value="1";
        }else if(value === CATEGORY_2){
            value="2";
        }else if(value === CATEGORY_3){
            value = "3";
        }

        interface objectInterface{
            [index: string]: any
        }
        let obj: objectInterface = {};
        obj[name] = value;
        this.setState(obj);
    }

    editOptionValue(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.formEnctype);
        const id = Number(event.target.name);
        const value = event.target.value;
        var opts = this.state.options;
        var opt = opts[id];
        opts[id]={
            id: opt.id,
            // score: opt.score,
            value: value
        };
        this.setState({options: opts});
    }

    editParagraphValue(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.formEnctype);
        const id = Number(event.target.name);
        const value = event.target.value;
        var opts = this.state.options;
        var opt = opts[id];
        this.setState({options: [{id: opt.id, value: value}]});
    }

    render(){
        if(this.state.type === "radio" || this.state.type === "radio_grid" ||
           this.state.type === "multiselect"){
            console.log(this.state);
            return(<div>
                <h1>{this.state.name}</h1>
                <form>
                    <p>Question Type: </p>
                    <select name="type" onChange={this.editQuestionType}>
                        <option>Radio Buttons</option>
                        <option>Radio Grid</option>
                        <option>Checkboxes</option>
                        <option>Paragraph</option>
                        <option>Text Input</option>
                    </select>
                    {this.state.options.map((option, index) => (
                    <div key={option.id}>
                        Option {index+1} Value:
                        <input name={index.toString()} type="text" value={option.value} onChange={this.editOptionValue}/>
                        <br/>
                        Score for Option {index+1}:
                        <input type="text"/> {/* TODO: add onChange + score option (from DB somehow? or state for dynamic update fo page)  */}
                    </div>
                    ))}
                    <input type="button" value="add option" onClick={this.addOption}/>
                    <br/>
                    <p>Question Category: </p>
                    <select name="category_id"> {/* TODO: add onChange  */}
                        <option>{CATEGORY_1}</option>
                        <option>{CATEGORY_2}</option>
                        <option>{CATEGORY_3}</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>)
        } else {
            console.log(this.state);
            return(<div>
                <h1>{this.state.name}</h1>
                <form>
                    <p>Question Type: </p>
                    <select name="type" onChange={this.editQuestionType}>
                        <option>Radio Buttons</option>
                        <option>Radio Grid</option>
                        <option>Checkboxes</option>
                        <option>Paragraph</option>
                        <option>Text Input</option>
                    </select>
                    <p>Text:</p>
                    <input type="textarea" name="0" onChange={this.editParagraphValue}/>
                    <br/>
                    <p>Question Category: </p>
                    <select name="category_id"> {/* TODO: add onChange  */}
                        <option>{CATEGORY_1}</option>
                        <option>{CATEGORY_2}</option>
                        <option>{CATEGORY_3}</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>)
        }
    }
}

export default EditTab;