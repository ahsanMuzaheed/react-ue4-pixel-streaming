
class pixelWindow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buttonname:"test",
        };
        this.myHandleResponseFunction = this.myHandleResponseFunction.bind(this);
    }

    myHandleResponseFunction =(data)=>{
        console.log(data);
        console.log("Response received!");
        console.log("you clicked pixelstreaming window!!");
        console.log("you will be happy!!");
        this.setState({
            buttonname:aaaaaaa
        });
    }

    componentWillMount(){
        addResponseEventListener("handle_responses", this.myHandleResponseFunction);
        console.log("componentwillmount")
    }

    render(){
        return(
        <div>
            <div id ="player" className="fixed-size" >False</div>
             {/*<div id ="player" className="fixed-size" onClick={()=>{this.myHandleResponseFunction()}}>False</div>*/}
            <div>
                <button>{this.state.buttonname}</button>
            </div>
        </div>
        )
    }
}

let domContainer = document.querySelector('#pixelWindow');
ReactDOM.render(e(pixelWindow), domContainer);


