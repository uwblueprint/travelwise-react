import React from 'react';
import { QuestionProps } from './Question';

class EditTab extends React.Component<QuestionProps>{
    render(){
        if(this.props.type === "radio" || this.props.type === "radio_grid" ||
           this.props.type === "checkbox" || this.props.type === "radio"){
            console.log(this.props);
            return(<div>
                <h1>{this.props.name}</h1>
                <form>
                    <p>Question Type: </p>
                    <select name="type"> {/* TODO: add onChange  */}
                        <option>Radio Buttons</option>
                        <option>Radio Grid</option>
                        <option>Checkboxes</option>
                        <option>Paragraph</option>
                        <option>Text Input</option>
                    </select>
                    {this.props.options.map((option, index) => (
                    <div key={option.id}>
                        <p>Option {index+1}</p>
                        <input type="text" value={option.value}/> {/* TODO: add onChange  */}
                        <br/>
                        <p>Score for Option {index+1}</p>
                        <input type="text"/> {/* TODO: add onChange + score option (from DB somehow? or state for dynamic update fo page)  */}
                    </div>
                    ))}
                    <input type="button" value="add option"/> {/*TODO: add onChange to add extra button */}
                    <br/>
                    <p>Question Category: </p>
                    <select name="type"> {/* TODO: add onChange  */}
                        <option>C1</option>
                        <option>C2</option>
                        <option>C3</option>
                    </select>
                </form>
            </div>)
        } else {
            console.log(this.props);
            return(<div>
                <h1>{this.props.name}</h1>
                <form>
                    <p>Question Type: </p>
                    <select name="type"> {/* TODO: add onChange  */}
                        <option>Radio Buttons</option>
                        <option>Radio Grid</option>
                        <option>Checkboxes</option>
                        <option>Paragraph</option>
                        <option>Text Input</option>
                    </select>
                    <p>Text:</p>
                    <input type="textarea"/>
                    <br/>
                    <p>Question Category: </p>
                    <select name="type"> {/* TODO: add onChange  */}
                        <option>C1</option>
                        <option>C2</option>
                        <option>C3</option>
                    </select>
                </form>
            </div>)
        }
    }
}

export default EditTab;